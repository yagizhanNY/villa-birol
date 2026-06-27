<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { FaWhatsapp } from 'vue3-icons/fa'
import { useI18n } from '../i18n'

const { locale, t, toggleLocale } = useI18n()

const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-navy shadow-lg backdrop-blur-md'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="font-display text-white text-2xl md:text-3xl font-medium tracking-wide hover:text-gold transition-colors"
      >
        Villa Birol
      </RouterLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <RouterLink
          to="/"
          class="text-white/90 hover:text-gold text-sm font-medium tracking-wide transition-colors"
        >
          {{ t('nav.home') }}
        </RouterLink>
        <RouterLink
          to="/photos"
          class="text-white/90 hover:text-gold text-sm font-medium tracking-wide transition-colors"
        >
          {{ t('nav.photos') }}
        </RouterLink>
        <a
          href="#contact"
          class="text-white/90 hover:text-gold text-sm font-medium tracking-wide transition-colors"
        >
          {{ t('nav.contact') }}
        </a>

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1.5 text-white/80 hover:text-gold text-sm font-semibold tracking-widest border border-white/30 hover:border-gold rounded px-3 py-1.5 transition-all duration-300"
        >
          <span>{{ locale === 'tr' ? 'EN' : 'TR' }}</span>
        </button>

        <!-- WhatsApp CTA -->
        <a
          href="https://api.whatsapp.com/send?phone=905322821619"
          target="_blank"
          rel="noopener"
          class="btn-primary text-sm py-2.5 px-5"
        >
          <FaWhatsapp class="w-4 h-4" />
          {{ t('hero.cta_whatsapp') }}
        </a>
      </div>

      <!-- Mobile: lang + burger -->
      <div class="flex md:hidden items-center gap-3">
        <button
          @click="toggleLocale"
          class="text-white text-xs font-bold tracking-widest border border-white/40 rounded px-2.5 py-1 transition-colors hover:border-gold hover:text-gold"
        >
          {{ locale === 'tr' ? 'EN' : 'TR' }}
        </button>
        <button
          @click="mobileOpen = !mobileOpen"
          class="text-white p-2 rounded focus:outline-none"
          :aria-expanded="mobileOpen"
          aria-label="Menu"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-navy-mid border-t border-white/10 px-6 py-5 flex flex-col gap-4"
      >
        <RouterLink to="/" @click="mobileOpen = false"
          class="text-white/90 hover:text-gold text-sm font-medium transition-colors">
          {{ t('nav.home') }}
        </RouterLink>
        <RouterLink to="/photos" @click="mobileOpen = false"
          class="text-white/90 hover:text-gold text-sm font-medium transition-colors">
          {{ t('nav.photos') }}
        </RouterLink>
        <a href="#contact" @click="mobileOpen = false"
          class="text-white/90 hover:text-gold text-sm font-medium transition-colors">
          {{ t('nav.contact') }}
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=905322821619"
          target="_blank"
          rel="noopener"
          class="btn-primary text-sm py-2.5 w-full justify-center mt-2"
        >
          <FaWhatsapp class="w-4 h-4" />
          {{ t('hero.cta_whatsapp') }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>