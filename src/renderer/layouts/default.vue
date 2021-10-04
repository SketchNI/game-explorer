<template>
    <div class="h-screen w-full">
        <div class="flex items-top">
            <div class="w-80">
                <sidebar class="border-r border-black"/>
            </div>

            <div class="bg-gray-800 flex-grow main-wrapper">
                <main class="main" id="main">
                    <div class="main-wrap flex flex-col">
                        <Nuxt/>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from "~/layouts/sections/sidebar.vue";
import Footer from "~/layouts/sections/footer.vue";

export default Vue.extend({
    name: "Layout",
    components: {Footer, Sidebar}
})
</script>

<style scoped>
.main-wrapper {
    background: url('/diagmonds.png') top left repeat;
}

.main {
    @apply h-screen text-gray-100;
}

.main-wrap {
    @apply overflow-y-auto p-8 h-full;
}

.minmax {
    @apply text-white px-3 py-1 hover:bg-gray-600 text-xs cursor-pointer focus:outline-none;
    @apply transition duration-150 ease-in;
}

.close {
    @apply hover:bg-red-600 text-white;
    @apply transition duration-150 ease-in;
}
</style>
