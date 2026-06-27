<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getVideoUrl } from '../services/contentfulService'
import { FaWhatsapp, FaPhone } from 'vue3-icons/fa'
import { useI18n } from '../i18n'

const { t } = useI18n()

const videoUrl = ref('https://videos.ctfassets.net/se6zmosrwmun/40ftswFir6RRC03TZnhbLf/05da66d0cb128f334c40e5ef4e5d6167/villa-video.mp4')

onMounted(async () => {
  try {
    const url = await getVideoUrl()
    videoUrl.value = url
  } catch (e) {
    // fallback stays
  }
})
</script>

<template>
  <section class="relative w-full h-screen min-h-[600px] overflow-hidden">
    <!-- Video Background -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      loop
      playsinline
      muted
    >
      <source :src="videoUrl" type="video/mp4" />
    </video>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to bottom, rgba(10,20,35,0.55) 0%, rgba(10,20,35,0.45) 50%, rgba(10,20,35,0.75) 100%);"
    ></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <p
        class="text-gold text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4 fade-in-up"
        style="animation-delay: 0.1s"
      >
        {{ t('hero.subtitle') }}
      </p>

      <h1
        class="font-display text-white text-5xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-wide mb-6 fade-in-up"
        style="animation-delay: 0.25s"
      >
        {{ t('hero.title') }}
      </h1>

      <div class="gold-divider mx-auto fade-in-up" style="animation-delay: 0.4s"></div>

      <p
        class="text-white/80 text-base md:text-lg max-w-lg leading-relaxed mb-10 fade-in-up"
        style="animation-delay: 0.5s"
      >
        {{ t('hero.description') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 fade-in-up" style="animation-delay: 0.65s">
        <a
          href="https://api.whatsapp.com/send?phone=905322821619"
          target="_blank"
          rel="noopener"
          class="btn-primary text-base px-7 py-3.5"
        >
          <FaWhatsapp class="w-5 h-5" />
          {{ t('hero.cta_whatsapp') }}
        </a>
        <a
          href="tel:+905322821619"
          class="btn-outline text-base px-7 py-3.5"
        >
          <FaPhone class="w-4 h-4" />
          {{ t('hero.cta_call') }}
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-white/60 fade-in-up" style="animation-delay: 1s">
      <span class="text-xs tracking-widest uppercase">{{ t('hero.scroll_down') }}</span>
      <div class="w-px h-10 bg-white/30 animate-pulse"></div>
    </div>
  </section>
</template>