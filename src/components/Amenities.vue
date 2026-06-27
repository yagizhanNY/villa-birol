<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { t, ta } = useI18n()

const icons: Record<string, string> = {
  pool:    `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c0 2.21 1.79 4 4 4h10a4 4 0 004-4V8a4 4 0 00-4-4H7a4 4 0 00-4 4v4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16c1.333-.667 2.667-.667 4 0s2.667.667 4 0 2.667-.667 4 0 2.667.667 4 0"/>`,
  kitchen: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 12h18M3 18h18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 6V4m4 2V4m4 2V4"/>`,
  beach:   `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.02 12.02l.707.707M1 12h1m18 0h1M4.22 19.78l.707-.707M18.95 5.05l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>`,
  parking: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7h4a3 3 0 010 6H9"/>`,
  permit:  `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
}

interface AmenityItem {
  icon: string
  title: string
  desc: string
}

const items = computed(() => ta<AmenityItem>('amenities.items'))
</script>

<template>
  <section class="bg-navy py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="section-label">{{ t('amenities.label') }}</p>
        <h2 class="section-title section-title--light">{{ t('amenities.title') }}</h2>
        <div class="gold-divider mx-auto mt-4"></div>
      </div>

      <!-- Cards Grid — 3 cols on lg, 2 on sm, 1 on mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="group bg-navy-light rounded-xl p-7 border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
            <svg
              class="w-6 h-6 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-html="icons[item.icon] ?? icons['permit']"
            />
          </div>
          <!-- Title -->
          <h3 class="font-display text-white text-lg font-medium mb-2 group-hover:text-gold transition-colors duration-300">
            {{ item.title }}
          </h3>
          <!-- Description -->
          <p class="text-white/55 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
