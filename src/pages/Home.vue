<script setup lang="ts">
import Video from '../components/Video.vue'
import Intro from '../components/Intro.vue'
import Amenities from '../components/Amenities.vue'
import ImageGallery from '../components/ImageGallery.vue'
import CommentCarousel from '../components/CommentCarousel.vue'
</script>

<template>
  <Video />
  <Intro />
  <Amenities />
  <ImageGallery :limit="6" :show-see-all="true" />
  <CommentCarousel />
</template>