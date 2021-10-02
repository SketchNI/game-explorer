<template>
    <div class="sidebar relative">
        <div class="sidebar-top">
            <h1 class="text-3xl mb-4 text-center">
                <nuxt-link to="/">
                    <i class="fas fa-house-damage mr-2" />
                    <span class="font-bold">GAME</span><span class="font-thin">XPlorer</span>
                </nuxt-link>
            </h1>
            <div class="search-wrapper">
                <input type="search" id="search" name="query" placeholder="What are you looking for?"/>
            </div>

            <border />

            <div class="console-list">
                <ul class="console">
                    <li v-for="(v, k) in supported">
                        <nuxt-link class="link" exact exact-active-class="active" :to="`/platform/${k}`">
                            <i class="fas fa-gamepad mr-2" />
                            {{ v }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <Border />
            <nuxt-link class="link" exact exact-active-class="active" to="/settings">
                <i class="fas fa-cogs mr-2" />
                Settings
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Border from '~/components/Border.vue'
const config = require('../../config.json');

export default Vue.extend({
    name: "sidebar",
    components: { Border },
    data() {
        return {
            supported: [],
        }
    },

    created() {
        this.supported = config.supported;
    }
});
</script>

<style scoped>
.sidebar {
    @apply bg-gray-900 h-screen w-80 text-gray-300 shadow-lg px-4 py-8 overflow-y-auto;
}

#search {
    @apply rounded-full w-full px-3 py-2 bg-gray-700;
    @apply hover:bg-gray-600;
    @apply focus:bg-gray-600 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-75;
    @apply transition duration-150 ease-in;
}

#search::placeholder {
    @apply text-gray-400;
}

.link {
    @apply font-semibold w-full block px-3 py-2 rounded-lg hover:bg-gray-700;
    @apply transition duration-150 ease-in;
}

.link.active {
    @apply bg-purple-500 bg-opacity-75;
}
</style>
