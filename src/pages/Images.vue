<script lang="ts" setup>
import ImageGallery from '@/components/ImageGallery.vue'
import { useI18n } from '../i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <!-- Page Hero -->
  <div class="bg-navy pt-32 pb-16 text-center">
    <p class="section-label">{{ t('gallery.label') }}</p>
    <h1 class="section-title section-title--light text-4xl md:text-5xl">{{ t('gallery.page_title') }}</h1>
    <div class="gold-divider mx-auto mt-4"></div>
    <p class="text-white/50 mt-4 text-sm">{{ t('gallery.page_subtitle') }}</p>
    <RouterLink
      to="/"
      class="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium mt-6 transition-colors"
    >
      ← {{ t('gallery.back_home') }}
    </RouterLink>
  </div>

  <!-- Full Gallery -->
  <ImageGallery :limit="0" :show-see-all="false" />
</template>