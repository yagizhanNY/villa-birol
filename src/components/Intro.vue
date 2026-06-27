<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAllImages } from '@/services/contentfulService'
import { useI18n } from '../i18n'
import { FaDownload } from 'vue3-icons/fa'

const { t } = useI18n()
const featuredImg = ref('')

onMounted(async () => {
  try {
    const images = await getAllImages()
    if (images.length > 0) featuredImg.value = images[0].url
  } catch (e) {
    // no image
  }
})
</script>

<template>
  <section id="about" class="bg-cream py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Text Column -->
        <div class="order-2 lg:order-1">
          <p class="section-label">{{ t('about.label') }}</p>
          <h2 class="section-title mb-4">{{ t('about.title') }}</h2>
          <div class="gold-divider"></div>

          <div class="space-y-4 text-gray-600 leading-relaxed text-[15px]">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
            <p>{{ t('about.p3') }}</p>
          </div>

          <!-- Permit notice -->
          <div class="mt-8 flex items-start gap-3 bg-white border border-gold/30 rounded-lg p-4">
            <FaDownload class="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <p class="text-sm text-gray-600 leading-snug">
              {{ t('about.permit_text') }}
              <a
                href="/documents/permit.pdf"
                download
                class="text-gold font-semibold hover:underline ml-1"
              >{{ t('about.permit_link') }}</a>.
            </p>
          </div>
        </div>

        <!-- Image Column -->
        <div class="order-1 lg:order-2">
          <div class="relative">
            <div
              class="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg pointer-events-none"
            ></div>
            <img
              v-if="featuredImg"
              :src="featuredImg"
              alt="Villa Birol interior"
              class="w-full h-80 lg:h-[480px] object-cover rounded-lg shadow-2xl relative z-10"
            />
            <div
              v-else
              class="w-full h-80 lg:h-[480px] bg-navy-light rounded-lg shadow-2xl relative z-10 flex items-center justify-center"
            >
              <span class="text-white/30 text-lg font-display">Villa Birol</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>