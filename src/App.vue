<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
  <Analytics />
  <SpeedInsights />
</template>

<style>
* {
  box-sizing: border-box;
}
</style>
