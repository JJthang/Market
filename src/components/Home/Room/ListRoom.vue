<template>
    <div class="w-full fjc bg-[#F3F3F3]">
        <div class="w-[95%] lg:w-[75%] py-6">
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
                <div class="flex gap-5">
                    <div class="flex gap-3">
                        <Dropdown iconPos="left" v-model="selectedCity" :options="cities" :pt="{
                            trigger: {
                                class: 'pr-2 w-4 text-[#1a489c]',
                            },
                            input: {
                                class:
                                    ' px-0 lg:py-2 py-2 lg:px-2 text-[15px] pt-[-3px] flex  item-center justify-center text-[#1a489c]',
                            },
                            root: {
                                class: 'w-[2rem] lg:w-[3rem] text-[#1a489c] fjc',
                            },
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
                    <!-- class: 'fjc'
                            },
                            label: {
                                class: 'font-medium text-[#1a489c] text-[10px] ',
                            },
                            icon: {
                                class: 'text-[#1a489c]',
                            },
                            icon: {
                                class: 'lg:block hidden lg:px-5 px-2'
                            } -->
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
                <div class="flex flex-col my-5" v-for="(item, index) in data" :key="index">
                    <Itemlist :item="item" :index="index" class="transition-all" />
                </div>
            </div>
            <div class="flex justify-center lg:mt-16">
                <button
                    class="py-3 lg:py-3.5 px-10 border border-[#ccc] text-center w-full max-w-[360px] font-bold text-sm lg:text-base"
                    @click="loadMore++" v-if="loadMore <= 2">
                    + Load More
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";
import { useQuery } from "@tanstack/vue-query";
import { fetchProduct } from "@/api/Product.js";
import Itemlist from "@/components/Home/Room/ListItem/item.vue";
import { root } from "postcss";

const selectedCity = ref();
const cities = ref([
    { name: "New York" },
    { name: "Rome" },
    { name: "London" },
]);
const taps = ["Rooms", "Plans"];
const currentTap = ref(0);
const loadMore = ref(2);
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
])

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

.shadow-card {
    --tw-shadow: 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    --tw-shadow-colored: 2px 3px 14px 0 var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 2px 3px 14px 0 rgba(74, 74, 74, 0.25);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
