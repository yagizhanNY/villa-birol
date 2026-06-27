<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, onMounted, computed } from 'vue'
import { getAllImages } from '@/services/contentfulService'
import { useRouter } from 'vue-router'
import { useI18n } from '../i18n'

const props = withDefaults(defineProps<{ limit?: number; showSeeAll?: boolean }>(), {
  limit: 0,
  showSeeAll: false,
})

const { t } = useI18n()
const router = useRouter()

const allImages = ref<string[]>([])
const visibleRef = ref(false)
const indexRef = ref(0)

onMounted(async () => {
  const images = await getAllImages()
  allImages.value = images.map((img) => img.url)
})

const displayImages = computed(() =>
  props.limit > 0 ? allImages.value.slice(0, props.limit) : allImages.value
)

const onImageClick = (index: number) => {
  visibleRef.value = true
  indexRef.value = index
}

const onHide = () => {
  visibleRef.value = false
}
</script>

<template>
  <section class="bg-white py-20 lg:py-28" id="gallery">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <p class="section-label">{{ t('gallery.label') }}</p>
          <h2 class="section-title">{{ t('gallery.title') }}</h2>
          <div class="gold-divider"></div>
        </div>
        <RouterLink
          v-if="showSeeAll"
          to="/photos"
          class="btn-primary self-start sm:self-auto text-sm py-2.5 px-5"
        >
          {{ t('gallery.see_all') }} →
        </RouterLink>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <div
          v-for="(img, index) in displayImages"
          :key="index"
          @click="onImageClick(index)"
          :class="[
            'relative overflow-hidden rounded-lg cursor-pointer group',
            index === 0 && limit > 0 ? 'col-span-2 row-span-2' : '',
          ]"
        >
          <img
            :src="img + '?w=800&fm=webp'"
            :alt="'Villa Birol - photo ' + (index + 1)"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            :style="index === 0 && limit > 0 ? 'height: 400px' : 'height: 200px'"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="allImages"
      :index="indexRef"
      @hide="onHide"
    />
  </section>
</template>
