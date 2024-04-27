<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent, onMounted } from 'vue'
import { getAllImages } from '@/services/contentfulService'

const imgsRef = ref([] as string[])
const visibleRef = ref(false)
const indexRef = ref(0)

onMounted(async () => {
    const images = await getAllImages();
    imgsRef.value = images.map((img) => img.url);
})

const onImageClick = (index: number) => {
    visibleRef.value = true;
    indexRef.value = index;
}

const onHide = () => {
    visibleRef.value = false;
};
</script>

<template>
    <KeepAlive>
        <div>
            <section class="flex justify-center mt-4">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div v-for="(img, index) in imgsRef" :key="index" @click="onImageClick(index)">
                        <img :src="img" class="w-full h-full object-cover rounded-md shadow-md cursor-pointer">
                    </div>
                </div>
            </section>
            <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef"
                @hide="onHide"></vue-easy-lightbox>
        </div>
    </KeepAlive>
</template>
