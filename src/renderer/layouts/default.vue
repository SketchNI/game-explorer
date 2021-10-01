<template>
    <div class="h-screen w-full">
        <div class="flex items-top">
            <sidebar class="border-r border-black"/>

            <main class="main" id="main">
                <div class="main-wrap flex flex-col">
                    <Nuxt/>
                </div>
            </main>
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
.main {
    @apply bg-gray-800 h-screen w-full -mb-48 text-gray-100;
}

.main-wrap {
    @apply overflow-y-scroll p-8 h-full;
}
</style>
