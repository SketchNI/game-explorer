<template>
    <nuxt-link v-if="grid" :to="`/platform/${game.platform}/game/${game.id}`" class="game-card">
        <div class="mb-4">
            <img :src="game.img" alt="Banjo-Kazooie Box Art" class="rounded-t-lg">
        </div>

        <div class="font-bold text-gray-300 text-2xl">
            {{ game.name }}
        </div>

        <div class="text-gray-500 my-2">
            Banjo-Kazooie is the first game in the Banjo-Kazooie series. It was developed by Rare, Ltd. and released in
            1998 for the Nintendo 64.
        </div>

        <Border/>

        <div class="pb-4">
            <span>
                <span class="text-gray-500">Published in</span>
                {{ game.year }}
            </span>

            <span>
                <span class="text-gray-500">by</span>
                {{ game.publisher }}
            </span>
        </div>
    </nuxt-link>

    <nuxt-link v-else-if="!grid" :to="`/platform/${game.platform}/game/${game.id}`" class="game-card">
        <div class="flex items-center">
            <div class="mr-4">
                <img :src="game.img" alt="Banjo-Kazooie Box Art" class="h-44 rounded-l-lg">
            </div>
            <div>
                <div class="font-bold text-gray-300 text-2xl">
                    {{ game.name }}
                </div>

                <div class="text-gray-500 my-2">
                    Banjo-Kazooie is the first game in the Banjo-Kazooie series. It was developed by Rare, Ltd. and
                    released in
                    1998 for the Nintendo 64.
                </div>

                <Border/>

                <div class="">
                    <span>
                        <span class="text-gray-500">Published in</span>
                        {{ game.year }}
                    </span>

                    <span>
                        <span class="text-gray-500">by</span>
                        {{ game.publisher }}
                    </span>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import Border from '~/components/Border.vue'

export default Vue.extend({
    name: 'GameCard',
    components: { Border },
    props: ['game', 'grid']
})
</script>

<style scoped>
.game-card {
    @apply shadow-md space-y-4 space-x-4 bg-gray-900 rounded-lg border border-gray-900;
}

a:hover {
    @apply ring ring-purple-500 ring-opacity-60;
    @apply transition duration-150 ease-in;
}
</style>
