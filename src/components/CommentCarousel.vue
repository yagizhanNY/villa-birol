<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import type IComment from '../models/comment'
import Comment from './Comment.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { onMounted, ref } from 'vue'
import { getAllComments } from '@/services/contentfulService'
import { useI18n } from '../i18n'

const { t } = useI18n()
const comments = ref<IComment[]>([])

onMounted(async () => {
  comments.value = await getAllComments()
})
</script>

<template>
  <section class="bg-navy-mid py-20 lg:py-28 relative overflow-hidden">
    <!-- Decorative SVG quote mark -->
    <div class="absolute top-10 w-full flex justify-center pointer-events-none select-none opacity-10">
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="55" font-size="80" font-family="Georgia, serif" fill="white">"</text>
      </svg>
    </div>

    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="section-label">{{ t('comments.label') }}</p>
        <h2 class="section-title section-title--light">{{ t('comments.title') }}</h2>
        <div class="gold-divider mx-auto mt-4"></div>
      </div>

      <!-- Swiper -->
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 8000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :space-between="40"
        class="comment-swiper"
      >
        <SwiperSlide v-for="(item, i) in comments" :key="i">
          <Comment :comment="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style>
.comment-swiper {
  padding-bottom: 56px !important;
}
.comment-swiper .swiper-pagination {
  bottom: 0;
}
.comment-swiper .swiper-pagination-bullet {
  background: rgba(201, 169, 110, 0.4);
  opacity: 1;
  width: 8px;
  height: 8px;
  transition: all 0.3s ease;
}
.comment-swiper .swiper-pagination-bullet-active {
  background: #c9a96e;
  width: 24px;
  border-radius: 4px;
}
</style>