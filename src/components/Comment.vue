<script lang="ts" setup>
import type IComment from '../models/comment'
import { useI18n } from '../i18n'

const { locale } = useI18n()

const props = defineProps<{ comment: IComment }>()

function stars(rating: number): string {
  const full = Math.round((rating / 10) * 5)
  return '★'.repeat(full) + '☆'.repeat(5 - full)
}
</script>

<template>
  <div class="flex flex-col items-center text-center px-8 pt-4 pb-8 max-w-2xl mx-auto">
    <!-- Stars -->
    <p class="text-gold text-2xl tracking-wider mb-6">{{ stars(comment.rating) }}</p>

    <!-- Quote text -->
    <blockquote class="font-display text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
      "{{ locale === 'tr' ? comment.comment : comment.commentEn }}"
    </blockquote>

    <!-- Author -->
    <div class="flex flex-col items-center gap-1">
      <div class="w-10 h-px bg-gold/50 mb-3"></div>
      <p class="text-white font-semibold text-sm tracking-wide">{{ comment.author }}</p>
      <p class="text-white/40 text-xs">{{ new Date(comment.publishedDate).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-GB', { year: 'numeric', month: 'long' }) }}</p>
    </div>
  </div>
</template>