<template>
    <div :class="`border${alt ? '-alt' : ''}`" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "Border",

    props: {
        alt: {
            type: Boolean,
            default: false,
        }
    }
});
</script>

<style scoped>
.border {
    @apply border-0 bg-gradient-to-r h-px my-4 from-gray-900 to-gray-900 via-gray-700;
}

.border-alt {
    @apply border-0 bg-gradient-to-r h-px my-4 from-gray-800 to-gray-800 via-gray-600;
}
</style>
