<template>
    <div>
        <h1 class="text-4xl font-bold text-gray-200 flex items-center h-24">
            Settings
        </h1>
        <Border :alt="true" />

        <h2 class="text-2xl font-semibold text-gray-200 flex items-center">
            ROM Paths
        </h2>
        <Border :alt="true" />

        // content

        <Border :alt="true" />

        <h2 class="text-2xl font-semibold text-gray-200 flex items-center mt-6">
            Emulator Paths
        </h2>
        <Border :alt="true" />

        // content

        <Border :alt="true" />

        <h2 class="text-2xl font-semibold text-gray-200 flex items-center mt-6">
            Behaviour
        </h2>
        <Border :alt="true" />

        // content

        <Border :alt="true" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Border from '~/components/Border.vue'

export default Vue.extend({
    name: "Settings",
    components: { Border }
});
</script>

<style scoped>

</style>
