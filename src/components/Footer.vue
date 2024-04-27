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
            <a href="https://abnb.me/wesC39scgzb">
                <a href="https://villasepeti.com/ev/villa-umberto" target="_blank">
                    <img loading="lazy" class="w-8 h-8 rounded-full" src="/logos/villasepeti_logo.jpeg"
                        alt="villa sepeti logo">
                </a>
            </a>
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