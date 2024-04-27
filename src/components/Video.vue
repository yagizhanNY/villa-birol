<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getVideoUrl } from '../services/contentfulService';

const videoUrl = ref('https://videos.ctfassets.net/se6zmosrwmun/40ftswFir6RRC03TZnhbLf/05da66d0cb128f334c40e5ef4e5d6167/villa-video.mp4');

onMounted(async () => {
    const url = await getVideoUrl();
    videoUrl.value = url;
})
</script>

<template>
    <header class="flex w-full justify-center mt-4">
        <div class="relative w-[320px] h-[200px] md:w-[1024px] md:h-[512px]">
            <keep-alive>
                <video class="w-full h-full object-cover rounded-md shadow-md" autoplay loop playsinline muted>
                    <source :src="videoUrl" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </keep-alive>
        </div>
    </header>
</template>