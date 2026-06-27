<script setup lang="ts">
import { CiMail } from 'vue3-icons/ci'
import { SiGooglemaps } from 'vue3-icons/si'
import { FaWhatsapp, FaPhone } from 'vue3-icons/fa'
import { useI18n } from '../i18n'

const { t, locale } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="bg-navy text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand Column -->
      <div class="lg:col-span-1">
        <RouterLink to="/" class="font-display text-2xl font-medium text-white hover:text-gold transition-colors">
          Villa Birol
        </RouterLink>
        <p class="text-white/50 text-sm leading-relaxed mt-3 mb-6">{{ t('footer.brand_desc') }}</p>
        <div class="flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=905322821619"
            target="_blank"
            rel="noopener"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp class="w-4 h-4" />
          </a>
          <a
            href="mailto:birolyakali@hotmail.com"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all duration-300"
            aria-label="E-Mail"
          >
            <CiMail class="w-4 h-4" />
          </a>
          <a
            href="https://maps.app.goo.gl/5NvPCiquYHeWyhDk8"
            target="_blank"
            rel="noopener"
            class="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold flex items-center justify-center transition-all duration-300"
            aria-label="Google Maps"
          >
            <SiGooglemaps class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">{{ t('footer.quick_links') }}</h4>
        <ul class="space-y-3">
          <li>
            <RouterLink to="/" class="text-white/60 hover:text-gold text-sm transition-colors">{{ t('footer.links.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/photos" class="text-white/60 hover:text-gold text-sm transition-colors">{{ t('footer.links.gallery') }}</RouterLink>
          </li>
          <li>
            <a href="#about" class="text-white/60 hover:text-gold text-sm transition-colors">{{ t('footer.links.about') }}</a>
          </li>
          <li>
            <a href="#contact" class="text-white/60 hover:text-gold text-sm transition-colors">{{ t('footer.links.contact') }}</a>
          </li>
        </ul>
      </div>

      <!-- Useful Links -->
      <div>
        <h4 class="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">{{ t('footer.useful') }}</h4>
        <ul class="space-y-3">
          <li>
            <a href="/documents/permit.pdf" download class="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
              {{ t('footer.useful_links.permit') }}
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/5NvPCiquYHeWyhDk8"
              target="_blank"
              rel="noopener"
              class="text-white/60 hover:text-gold text-sm transition-colors"
            >
              {{ t('footer.useful_links.maps') }}
            </a>
          </li>
          <li>
            <a
              href="https://villasepeti.com/home/fethiye/villa-umberto"
              target="_blank"
              rel="noopener"
              class="inline-block mt-2"
            >
              <img src="/logos/villasepeti_logo.jpeg" alt="Villasepeti" class="h-7 rounded opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5">{{ t('footer.contact_title') }}</h4>
        <ul class="space-y-3">
          <li>
            <a
              href="tel:+905322821619"
              class="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2"
            >
              <FaPhone class="w-3.5 h-3.5 text-gold" />
              {{ t('footer.phone') }}
            </a>
          </li>
          <li>
            <a
              href="mailto:birolyakali@hotmail.com"
              class="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2"
            >
              <CiMail class="w-3.5 h-3.5 text-gold" />
              {{ t('footer.email') }}
            </a>
          </li>
        </ul>

        <div class="flex flex-col gap-2 mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=905322821619"
            target="_blank"
            rel="noopener"
            class="btn-primary text-sm py-2.5 px-4 justify-center"
          >
            <FaWhatsapp class="w-4 h-4" />
            {{ t('footer.whatsapp_cta') }}
          </a>
          <a
            href="tel:+905322821619"
            class="btn-outline text-sm py-2.5 px-4 justify-center"
          >
            <FaPhone class="w-3.5 h-3.5" />
            {{ t('footer.call_cta') }}
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-white/40 text-xs">© {{ currentYear }} Villa Birol. {{ locale === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.' }}</p>
        <p class="text-white/30 text-xs">Fethiye, Muğla, Türkiye</p>
      </div>
    </div>
  </footer>
</template>