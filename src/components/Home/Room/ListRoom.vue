<template>
    <div class="w-full fjc bg-[#F3F3F3]">
        <div class="w-[95%] lg:w-[60%] md:w-[90%] py-6">
            <div class="w-full flex lg:flex-row flex-col justify-between">
                <div
                    class="flex justify-start items-start lg:justify-center lg:items-center lg:flex-row flex-col gap-3 lg:gap-5 mb-3">
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Book for day-use only</label>
                    </div>
                    <div class="flex justify-center items-end">
                        <input type="checkbox" class="bg-[#232e48] mr-2 h-[20px] cursor-pointer" />
                        <label for="" class="text-[#1a489c] font-semibold text-[13px]">Show only validate</label>
                    </div>
                </div>
                <div class="flex md:gap-5 gap-2 md:justify-normal justify-between">
                    <div class="flex md:gap-3 gap-1">
                        <Dropdown iconPos="left" v-model="selectedCity" :options="cities" :pt="{
                            trigger: {
                                class: 'pr-2 w-4 text-[#1a489c]',
                            },
                            input: {
                                class:
                                    ' px-0 lg:py-2 py-2 lg:px-2 text-[15px] pt-[-3px] flex  item-center justify-center text-[#1a489c]',
                            },
                            root: {
                                class: 'lg:w-[6rem] lg:py-1 text-[#1a489c] fjc',
                            },
                            // fixWidth
                            // lg:fixWidth
                        }" optionLabel="name" placeholder="Sort by" class="w-full md:w-9rem" />
                        <Button label="Filter" :pt="{
                            label: {
                                class: 'font-medium text-[#1a489c] text-sm',
                            },
                            icon: {
                                class: 'text-[#1a489c]  ',
                            },
                            root: {
                                class: 'text-sm h-[1.5rem] lg:h-[3rem] fjc'
                            }

                        }" iconPos="right" class="bg-white border border-[#d1d5db] h-[2.7rem]"
                            icon="pi pi-sliders-h" />
                    </div>
                    <div class="flex">
                        <button v-for="(item, index) in taps" @click="currentTap = index" :key="index"
                            class="lg:px-3 py-1.5 border border-border text-secondary w-[90px] text-xs" :class="[index == 0 ? 'rounded-l-[5px]' : 'rounded-r-[5px]'],
                                { 'bg-[#232e48] text-white': index == currentTap }">
                            {{ item }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-start items-center">
                <h3 class="text-sm lg:text-3xl font-bold font-mono mt-4">
                    11 Rooms & 3 Plans
                </h3>
            </div>
            <div class="mt-4">
                <div class="flex flex-col my-5" v-for="(item, index) in dataSlice" :key="index">
                    <Itemlist :item="item" :index="index" class="transition-all" />
                </div>
            </div>
            <div class="flex justify-center lg:mt-16 ">
                <MyButton class="py-3 lg:py-3.5 px-10 border-[#ccc] w-full max-w-[360px] text-sm lg:text-base"
                    @click="loadMore++" v-if="loadMore <= 2">
                    + Load More
                </MyButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onBeforeMount, onUpdated } from "vue";
import Dropdown from "primevue/dropdown";
import { useQuery } from "@tanstack/vue-query";
import { fetchProduct } from "@/api/Product.js";
import Itemlist from "@/components/Home/Room/ListItem/item.vue";
import { root } from "postcss";
import MyButton from "@/components/Button/index.vue";

const selectedCity = ref();
const cities = ref([
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
]);
const taps = ["Rooms", "Plans"];
const currentTap = ref(0);
const loadMore = ref(2);
const dataSlice = ref([]);
const data = ref([
    {
        "id": 1,
        "images": ["https://cdn.pixabay.com/photo/2014/05/16/04/13/log-huts-345360_1280.jpg",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png"],
        "convenient": [
            {
                "value": "1 Person Min",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "2 Person Max",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "1200(mm) : 2 beds",
                "icon": "fa-solid fa-bed"
            }, {
                "value": "Smoking",
                "icon": "fa-solid fa-smoking"
            }, {
                "value": "Room size 29m²",
                "icon": "fa-solid fa-building"
            }, {
                "value": "bathRoom",
                "icon": "fa-solid fa-bath"
            }, {
                "value": "Toilet",
                "icon": "fa-solid fa-toilet"
            }
        ],
        "price": 28000,
        "sale": 5,
        "plan": [
            {
                "id": 1,
                "images": "https://static.vinwonders.com/production/homestay-la-gi-banner.jpg",
                "title": "Feel free to walk around♪Room Without Meals Plan! Enjoy a relaxing holiday in Nasu Kogen☆",
                "price": 15600,
                "sale": 5
            }, {
                "id": 2,
                "images": "https://vinhomesland.vn/wp-content/uploads/2020/06/mama-house-homestay.jpg",
                "title": "Feel free to walk around♪ For those who want to have dinner out without worrying about the time★Buffet Plan with Resort Breakfast★",
                "price": 18600,
                "sale": 8
            }, {
                "id": 3,
                "images": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406023161.jpg?k=31be8fcb8f7feb6cc33b055eeb9abd7f65b8659ce70c55083a2b89dfda797fa3&o=&hp=1",
                "title": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                "price": 19500,
                "sale": 6
            }
        ]
    },
    {
        "id": 2,
        "images": ["https://cdn.pixabay.com/photo/2014/05/16/04/13/log-huts-345360_1280.jpg",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png"],
        "convenient": [
            {
                "value": "2 Person Min",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "4 Person Max",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "2400(mm) : 2 beds",
                "icon": "fa-solid fa-bed"
            }, {
                "value": "Smoking",
                "icon": "fa-solid fa-smoking"
            }, {
                "value": "Room size 29m²",
                "icon": "fa-solid fa-building"
            }, {
                "value": "bathRoom",
                "icon": "fa-solid fa-bath"
            }, {
                "value": "Toilet",
                "icon": "fa-solid fa-toilet"
            }
        ],
        "price": 15000,
        "sale": 5,
        "plan": [
            {
                "id": 1,
                "images": "https://static.vinwonders.com/production/homestay-la-gi-banner.jpg",
                "title": "Feel free to walk around♪Room Without Meals Plan! Enjoy a relaxing holiday in Nasu Kogen☆",
                "price": 15600,
                "sale": 5
            }, {
                "id": 2,
                "images": "https://storage.googleapis.com/digital-platform/hinh_anh_bat_mi_y_tuong_thiet_ke_homestay_doc_dao_hut_khach_so_1_12dc91aaa7/hinh_anh_bat_mi_y_tuong_thiet_ke_homestay_doc_dao_hut_khach_so_1_12dc91aaa7.jpg",
                "title": "Feel free to walk around♪ For those who want to have dinner out without worrying about the time★Buffet Plan with Resort Breakfast★",
                "price": 18600,
                "sale": 8
            }, {
                "id": 3,
                "images": "https://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg",
                "title": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                "price": 19500,
                "sale": 6
            }
        ]
    },
    {
        "id": 3,
        "images": ["https://cdn.pixabay.com/photo/2014/05/16/04/13/log-huts-345360_1280.jpg",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png",
            "https://bukitvista-wordpress-storage.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-08-at-15.02.08.png"],
        "convenient": [
            {
                "value": "1 Person Min",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "3 Person Max",
                "icon": "fa-solid fa-user-group"
            }, {
                "value": "1700(mm) : 2 beds",
                "icon": "fa-solid fa-bed"
            }, {
                "value": "Smoking",
                "icon": "fa-solid fa-smoking"
            }, {
                "value": "Room size 35m²",
                "icon": "fa-solid fa-building"
            }, {
                "value": "bathRoom",
                "icon": "fa-solid fa-bath"
            }, {
                "value": "Toilet",
                "icon": "fa-solid fa-toilet"
            }
        ],
        "price": 15000,
        "sale": 5,
        "plan": [
            {
                "id": 1,
                "images": "https://cdn.tgdd.vn/Files/2022/01/19/1411730/8-homestay-mien-bac-sieu-dep-re-cho-dip-nghi-tet-nham-dan-2022-202201191812116123.jpg",
                "title": "Feel free to walk around♪Room Without Meals Plan! Enjoy a relaxing holiday in Nasu Kogen☆",
                "price": 15600,
                "sale": 5
            }, {
                "id": 2,
                "images": "https://ik.imagekit.io/bbhed67kj/wp-content/uploads/2019/01/Bisle-Nature-Trail-Homestay-1.jpg",
                "title": "Feel free to walk around♪ For those who want to have dinner out without worrying about the time★Buffet Plan with Resort Breakfast★",
                "price": 18600,
                "sale": 8
            }, {
                "id": 3,
                "images": "https://minhphatpc.vn/wp-content/uploads/2022/01/chi-phi-xay-dung-1-homestay-2.jpg",
                "title": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                "price": 19500,
                "sale": 6
            }
        ]
    }
]);

const dataList = ref([
    [
        {
            "id": 1,
            "min_price": 37200,
            "room_count": 14,
            "room_plan": [
                {
                    "hotel_plan_code": "16438",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/216255/wordpress_%E8%BF%B7%E3%81%A3%E3%81%9F%E3%82%89%E3%82%B3%E3%83%AC_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233943/wordpress_HER%E3%82%AD%E3%83%83%E3%82%BA_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/244942/wordpress_%E8%87%AA%E7%A4%BE.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233861/wordpress_%E6%B8%A9%E6%B3%89_2_1280_720.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=KTW216438-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "KTW216438-1",
                    "room_plan_name": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 1,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37200,
                    "tax": 3720,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 40920
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                },
                {
                    "hotel_plan_code": "16445",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233750/wordpress_%E8%8F%9C%E3%81%99%E4%B9%83%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233752/wordpress_%E5%92%8C_2_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/235852/wordpress_%E6%9C%9D16_9.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=KTW216445-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "KTW216445-1",
                    "room_plan_name": "【Full of seasonal ingredients】Nasu Kogen's original Japanese cuisine! Our chef's special selection:『Nagomi』course★",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 7,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37200,
                    "tax": 3720,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 40920
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                }
            ],
            "room_type_name": "【Annex Tower】 Kizuna-Twin room／ Western Style Room/ Non-Smoking /29㎡",
            "room_type_code": "KTW2",
            "room_type_description": "【Western Style Room/ 29㎡/ Annex Tower 4～14/F (Except 6･7･12/F)/ Non-Smoking】With 2 regular beds. Shower booth only, no bathtub. We have added a tatami space to the room so guests can sit together barefoot to further deepen the bond with each other.",
            "min_people": 1,
            "max_people": 2,
            "max_adult": 2,
            "hide_smoking": false,
            "room_facilities": [],
            "position": 4,
            "filters": [
                {
                    "id": 1232,
                    "name": "Non-smoking",
                    "filter_type": "room",
                    "order": 2
                }
            ],
            "beds": [
                {
                    "bed_count": 2,
                    "width": null,
                    "length": null,
                    "bed_type": "1200(mm) "
                }
            ],
            "floor_data": null,
            "room_size": {
                "value": 29,
                "unit": "square_meters"
            },
            "room_pictures": [
                {
                    "id": 216615,
                    "display_name": "【アネックスタワー】絆ツインルーム",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/KTW_1_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/chatbot_header_KTW_1_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/thumbnail_KTW_1_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/wordpress_KTW_1_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216615/wordpress_thumb_KTW_1_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 216616,
                    "display_name": "【アネックスタワー】絆ツインルーム",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/KTW_2_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/chatbot_header_KTW_2_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/thumbnail_KTW_2_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/wordpress_KTW_2_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/216616/wordpress_thumb_KTW_2_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 74999,
                    "display_name": "【アネックスタワー】絆ツインルーム※バスタブなし、シャワーのみ",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/ktw3.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/chatbot_header_ktw3.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/thumbnail_ktw3.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_ktw3.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_thumb_ktw3.jpg"
                        }
                    }
                }
            ],
            "bathroom": true,
            "toilet": true,
            "is_smoking": false
        },
        {
            "id": 2,
            "min_price": 37200,
            "room_count": 4,
            "room_plan": [
                {
                    "hotel_plan_code": "16438",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/216255/wordpress_%E8%BF%B7%E3%81%A3%E3%81%9F%E3%82%89%E3%82%B3%E3%83%AC_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233943/wordpress_HER%E3%82%AD%E3%83%83%E3%82%BA_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/244942/wordpress_%E8%87%AA%E7%A4%BE.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233861/wordpress_%E6%B8%A9%E6%B3%89_2_1280_720.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=STW216438-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "STW216438-1",
                    "room_plan_name": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 1,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37200,
                    "tax": 3720,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 40920
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                },
                {
                    "hotel_plan_code": "16445",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233750/wordpress_%E8%8F%9C%E3%81%99%E4%B9%83%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233752/wordpress_%E5%92%8C_2_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/235852/wordpress_%E6%9C%9D16_9.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=STW216445-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "STW216445-1",
                    "room_plan_name": "【Full of seasonal ingredients】Nasu Kogen's original Japanese cuisine! Our chef's special selection:『Nagomi』course★",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 7,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37200,
                    "tax": 3720,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 40920
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                }
            ],
            "room_type_name": "【Annex Tower】 Kizuna-Twin room／ Western Style Room/ Smoking （Deodorize OK）/29㎡",
            "room_type_code": "STW2",
            "room_type_description": "【Western Style Room／29㎡／Annex Tower 6 to 7/F／Smoking】With 2 regular beds. No bathtubs, with a shower stall. We set up a spacious tatami space so the bonds (Kizuna) can deepen between the guests and have a cozy time barefoot.",
            "min_people": 1,
            "max_people": 2,
            "max_adult": 2,
            "hide_smoking": false,
            "room_facilities": [],
            "position": 7,
            "filters": [
                {
                    "id": 1231,
                    "name": "Smoking",
                    "filter_type": "room",
                    "order": 1
                }
            ],
            "beds": [
                {
                    "bed_count": 2,
                    "width": null,
                    "length": null,
                    "bed_type": "1200(mm) "
                }
            ],
            "floor_data": null,
            "room_size": {
                "value": 29,
                "unit": "square_meters"
            },
            "room_pictures": [
                {
                    "id": 217107,
                    "display_name": "【アネックスタワー】絆ツインルーム",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217107/STW_1_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217107/chatbot_header_STW_1_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217107/thumbnail_STW_1_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217107/wordpress_STW_1_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217107/wordpress_thumb_STW_1_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 217108,
                    "display_name": "【アネックスタワー】絆ツインルーム",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217108/STW_2_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217108/chatbot_header_STW_2_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217108/thumbnail_STW_2_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217108/wordpress_STW_2_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/217108/wordpress_thumb_STW_2_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 74999,
                    "display_name": "【アネックスタワー】絆ツインルーム※バスタブなし、シャワーのみ",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/ktw3.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/chatbot_header_ktw3.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/thumbnail_ktw3.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_ktw3.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/74999/wordpress_thumb_ktw3.jpg"
                        }
                    }
                }
            ],
            "bathroom": true,
            "toilet": true,
            "is_smoking": true
        },
        {
            "id": 3,
            "min_price": 37800,
            "room_count": 1,
            "room_plan": [
                {
                    "hotel_plan_code": "16438",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/216255/wordpress_%E8%BF%B7%E3%81%A3%E3%81%9F%E3%82%89%E3%82%B3%E3%83%AC_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233943/wordpress_HER%E3%82%AD%E3%83%83%E3%82%BA_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/244942/wordpress_%E8%87%AA%E7%A4%BE.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233861/wordpress_%E6%B8%A9%E6%B3%89_2_1280_720.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=CTW216438-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "CTW216438-1",
                    "room_plan_name": "【No.1 in our hotel's popularity】 When in doubt, this is the one! 90 kinds of Japanese, Chinese, and Western dishes are served at the buffet.",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 1,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37800,
                    "tax": 3780,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 41580
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                },
                {
                    "hotel_plan_code": "16445",
                    "limited": false,
                    "hotel_plan_description": null,
                    "url_plan_pictures": [
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233750/wordpress_%E8%8F%9C%E3%81%99%E4%B9%83%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8_1_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/233752/wordpress_%E5%92%8C_2_1280_720.jpg",
                        "https://cdn0.tripla.ai/assets/chatbot_image/picture/235852/wordpress_%E6%9C%9D16_9.jpg"
                    ],
                    "cancellation_policy_link": "https://bw.tripla.ai/#/cancellation-policy?room_plan_codes[]=CTW216445-1&uri=https://concierge.tripla.ai&code=e6aac76dbdb814bc80a1b740e70d6ec0",
                    "cancellation_policy_id": 1214,
                    "cancellation_free_deadline": "2023/12/22 23:59",
                    "is_no_refund": false,
                    "meal_status": "breakfast, dinner",
                    "payment_method": [
                        {
                            "code": "credit_card",
                            "name": "Online payment by credit card",
                            "payment_discount_amount": 0
                        },
                        {
                            "code": "on_site_credit_card_required",
                            "name": "Onsite Payment (Credit card registration is required)",
                            "payment_discount_amount": 0
                        }
                    ],
                    "room_plan_code": "CTW216445-1",
                    "room_plan_name": "【Full of seasonal ingredients】Nasu Kogen's original Japanese cuisine! Our chef's special selection:『Nagomi』course★",
                    "wifi_option": "Free",
                    "wifi": "yes_free",
                    "booking_start_date": null,
                    "position": 7,
                    "charge_percent": 100,
                    "wbf_enabled": false,
                    "filters": [
                        {
                            "id": 1235,
                            "name": "Dinner and breakfast",
                            "filter_type": "plan",
                            "order": 5
                        }
                    ],
                    "inclusive_extra_ids": [],
                    "availability": "available",
                    "total_price": 37800,
                    "tax": 3780,
                    "accommodation_tax": 0,
                    "room_rate": [
                        {
                            "date": "2023/12/24",
                            "rate": 41580
                        }
                    ],
                    "sleeps": 2,
                    "selected_room_count": 0,
                    "matched_search_criteria": {
                        "adults_count": 2,
                        "children_count": 0,
                        "adults_with_companion": 2,
                        "adult_companion": 0,
                        "children_with_kid_tier_A_companion": 0,
                        "kid_tier_A_companion": 0
                    },
                    "non_sign_in_discount": {},
                    "sign_in_discount": {}
                }
            ],
            "room_type_name": "【Annex Tower】 Kids D/Western-style Room/Non-smoking/29㎡",
            "room_type_code": "CTW2",
            "room_type_description": "【Western Style Room／29㎡／Annex Tower 3/F／Non-Smoking】With Hollywood style low bed. A room authorized by \" Welcome Baby Accommodation\".  Children can learn by playing the Animal panels collaborated with \"Nasu Animal Kingdom\", etc.",
            "min_people": 1,
            "max_people": 2,
            "max_adult": 2,
            "hide_smoking": false,
            "room_facilities": [],
            "position": 18,
            "filters": [
                {
                    "id": 1232,
                    "name": "Non-smoking",
                    "filter_type": "room",
                    "order": 2
                }
            ],
            "beds": [
                {
                    "bed_count": 2,
                    "width": null,
                    "length": null,
                    "bed_type": "Semi-double"
                }
            ],
            "floor_data": null,
            "room_size": {
                "value": 29,
                "unit": "square_meters"
            },
            "room_pictures": [
                {
                    "id": 222388,
                    "display_name": "【アネックスタワー】キッズルームD",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222388/CTW_1_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222388/chatbot_header_CTW_1_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222388/thumbnail_CTW_1_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222388/wordpress_CTW_1_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222388/wordpress_thumb_CTW_1_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 222392,
                    "display_name": "【アネックスタワー】キッズルームD",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222392/CTW_2_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222392/chatbot_header_CTW_2_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222392/thumbnail_CTW_2_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222392/wordpress_CTW_2_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222392/wordpress_thumb_CTW_2_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 222394,
                    "display_name": "【アネックスタワー】キッズルームD",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222394/CTW_4_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222394/chatbot_header_CTW_4_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222394/thumbnail_CTW_4_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222394/wordpress_CTW_4_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222394/wordpress_thumb_CTW_4_1280_720.jpg"
                        }
                    }
                },
                {
                    "id": 222393,
                    "display_name": "【アネックスタワー】キッズルームD",
                    "picture": {
                        "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222393/CTW_3_1280_720.jpg",
                        "chatbot_header": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222393/chatbot_header_CTW_3_1280_720.jpg"
                        },
                        "thumbnail": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222393/thumbnail_CTW_3_1280_720.jpg"
                        },
                        "wordpress": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222393/wordpress_CTW_3_1280_720.jpg"
                        },
                        "wordpress_thumb": {
                            "url": "https://cdn0.tripla.ai/assets/chatbot_image/picture/222393/wordpress_thumb_CTW_3_1280_720.jpg"
                        }
                    }
                }
            ],
            "bathroom": true,
            "toilet": true,
            "is_smoking": false
        }
    ]
])
onBeforeMount(() => {
    dataSlice.value = data.value.slice(0, loadMore.value);
})

watch(loadMore, (vuewValue) => {
    dataSlice.value = data.value.slice(0, vuewValue);
})

// const { data } = useQuery({
//     queryKey: ["getData", loadMore],
//     queryFn: () => fetchProduct(loadMore.value),
//     select: (data) => data.data,
//     keepPreviousData: true,
// });



</script>

<style lang="scss" scoped>
input[type="checkbox"] {
    background-size: contain;
    border: 1px solid #7b7b85;
    width: 20px;
    height: 20px;
    accent-color: #232e48;
}

.fixWidth {
    width: 5rem !important;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

.p-dropdown .p-dropdown-trigger {
    width: 0px !important;
}

.p-dropdown .p-dropdown-label.p-placeholder {
    display: flex;
}

.fixWidth {
    width: 6rem !important;
    padding: 21px 0px !important;
}

.shadow-card {
    --tw-shadow: 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    --tw-shadow-colored: 2px 3px 14px 0 var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
