<script lang="ts" setup>
import { CiMail } from 'vue3-icons/ci';
import { FaWhatsapp } from "vue3-icons/fa";
</script>

<template>
    <nav class="items-center w-full h-full p-4 bg-slate-700 shadow-md">
        <div class="flex justify-between items-center mx-4 xl:mx-96">
            <div>
                <RouterLink class="text-white font-dancing text-[30px] md:text-[40px]" to="/">Villa Birol</RouterLink>
            </div>
            <div class="flex items-center gap-2 md:gap-6">
                <RouterLink class="text-white hover:underline hover:cursor-pointer" to="/photos">Photos</RouterLink>
                <a href="mailto:birolyakali@hotmail.com">
                    <CiMail class="text-white w-8 h-8" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=905322821619">
                    <FaWhatsapp class="text-white w-8 h-8" />
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.font-dancing {
    font-family: 'Dancing Script', cursive;
}
</style>