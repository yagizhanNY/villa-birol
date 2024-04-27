<script setup lang="ts">
import { CiMail } from 'vue3-icons/ci';
import { SiGooglemaps } from "vue3-icons/si";
</script>

<template>
    <footer className="flex w-full items-center justify-between border-t shadow-md mt-3 px-3 py-5">
        <div>
            <RouterLink class="font-dancing text-[20px] md:text-[30px]" to="/">Villa Birol</RouterLink>
        </div>
        <div className="flex gap-3">
            <a href="mailto:birolyakali@hotmail.com">
                <CiMail class="w-8 h-8"/>
            </a>
            <a href="https://maps.app.goo.gl/5NvPCiquYHeWyhDk8" target="_blank">
                <SiGooglemaps class="w-8 h-8"/>
            </a>
        </div>
    </footer>
</template>

<style scoped>
.font-dancing {
    font-family: 'Dancing Script', cursive;
}
</style>