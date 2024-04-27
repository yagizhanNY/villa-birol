<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import type IComment from '../models/comment'
import Comment from './Comment.vue';
// Import Swiper styles
import 'swiper/css';
import { onMounted, ref } from 'vue';
import { getAllComments } from '@/services/contentfulService';

const comments = ref<IComment[]>([])

onMounted(async () => {
    comments.value = await getAllComments();
})
</script>

<template>
    <div class="w-[350px] max-h-[300px] mt-5 mx-4 sm:mx-0 sm:w-full">
        <Swiper :modules="[Autoplay]" :autoplay="{
            delay: 10000,
            disableOnInteraction: false,
        }" class="max-w-[512px] max-h-[300px]" :slides-per-view="1" navigation :space-between="50">
            <SwiperSlide v-for="item in comments">
                <Comment :comment="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>