<template>
    <div class="sidebar relative">
        <div class="sidebar-top">
            <h1 class="text-3xl mb-4 text-center">
                <nuxt-link to="/">
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
                        <nuxt-link class="link" exact exact-active-class="active" :to="`/platform/${k}`">{{ v }}</nuxt-link>
                    </li>
<!--                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/nes">NES</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/snes">SNES</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/sms">Sega Master System</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/smd">Sega Mega Drive/Genesis</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/dreamcast">Dreamcast</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/platform">Nintendo 64</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/gamecube">Gamecube</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/ps1">Playstation 1</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/ps2">Playstation 2</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/nds">Nintendo DS</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/n3ds">Nintendo 3DS</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/switch">Nintendo Switch</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/wii">Nintendo Wii</nuxt-link></li>
                    <li><nuxt-link class="link" exact exact-active-class="active" to="/platform/wiiu">Nintendo WiiU</nuxt-link></li>-->
                </ul>
            </div>
        </div>

        <div class="absolute left-4 right-4 mb-8 bottom-0 top-auto sidebar-footer">
            <nuxt-link to="/settings">Settings</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
const config = require('../../config.json');

export default Vue.extend({
    name: "sidebar",

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
    @apply bg-gray-900 h-screen w-2/12 text-gray-200 shadow-lg px-4 py-8;
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
