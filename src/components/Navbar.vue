<script lang="ts" setup>
</script>

<template>
    <nav class="items-center w-full h-full p-4 bg-slate-700 shadow-md">
        <div class="flex justify-between items-center mx-4 xl:mx-96">
            <div>
                <RouterLink class="text-white font-dancing text-[30px] md:text-[40px]" to="/" >Villa Birol</RouterLink>
            </div>
            <div class="flex gap-2 md:gap-6">
                <RouterLink class="text-white hover:underline hover:cursor-pointer" to="/photos">Photos</RouterLink>
                <a class="text-white hover:underline hover:cursor-pointer" href="https://villasepeti.com/ev/villa-umberto" target="_blank">Reservation</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .font-dancing {
        font-family: 'Dancing Script', cursive;
    }
</style>