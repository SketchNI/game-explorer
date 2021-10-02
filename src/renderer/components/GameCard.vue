<template>
    <div v-if="!game_not_found">
        <nuxt-link v-if="grid" :to="`/platform/${game.platform}/game/${game.id}`" class="game-card block">
            <div class="mb-4">
                <img :src="game.image_url" alt="Banjo-Kazooie Box Art" class="rounded-t-lg"/>
            </div>

            <div class="font-bold text-gray-300 text-2xl p-4 pt-0">
                {{ game.name }}
            </div>

            <div class="text-gray-500 px-4">
                {{ game.description }}
            </div>

            <Border/>

            <div class="p-4 pt-0">
                <span>
                    <span class="text-gray-500">Published in</span>
                    {{ game.published }}
                </span>

                <span>
                    <span class="text-gray-500">by</span>
                    {{ game.publisher.name }}
                </span>
            </div>
        </nuxt-link>

        <nuxt-link v-else-if="!grid" :to="`/platform/${game.platform}/game/${game.id}`" class="game-card block">
            <div class="flex items-center flex-row">
                <div class="mr-4">
                    <img :src="game.image_url" alt="Banjo-Kazooie Box Art" class="w-72 rounded-l-lg">
                </div>

                <div>
                    <div class="font-bold text-gray-300 text-2xl">
                        {{ game.name }}
                    </div>

                    <div class="text-gray-500">
                        {{ game.description }}
                    </div>

                    <Border/>

                    <div class="">
                        <span>
                            <span class="text-gray-500">Published in</span>
                            {{ game.published }}
                        </span>

                        <span>
                            <span class="text-gray-500">by</span>
                            {{ game.publisher.name }}
                        </span>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>

    <div v-else-if="game_not_found" class="game-card">
        <div v-if="grid">
            <div class="mb-4">
                <img src="/no_image.png" alt="No Box Art" class="rounded-l-lg">
            </div>

            <div class="font-bold text-gray-300 text-2xl p-4 pt-0">
                {{ game_name }}
            </div>

            <div class="text-gray-500 px-4">

            </div>

            <Border/>

            <div class="p-4 pt-0">
                <span>
                    <span class="text-gray-500">Published in</span>
                    N/A
                </span>

                <span>
                    <span class="text-gray-500">by</span>
                    N/A
                </span>
            </div>
        </div>
        <div v-else>
            <div class="flex items-center flex-row">
                <div class="mr-4">
                    <img src="/no_image.png" alt="No Box Art" class="w-72 rounded-l-lg">
                </div>

                <div>
                    <div class="font-bold text-gray-300 text-2xl p-4 pt-0">
                        {{ game_name }}
                    </div>

                    <div class="text-gray-500 px-4" />


                    <Border/>

                    <div class="p-4 pt-0">
                        <span>
                            <span class="text-gray-500">Published in</span>
                        N/A
                        </span>

                        <span>
                            <span class="text-gray-500">by</span>
                            N/A
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Border from '~/components/Border.vue'
import Loader from '~/components/Loader.vue'

export default Vue.extend({
    name: 'GameCard',
    components: {
        Border,
        Loader
    },
    props: ['grid', 'game_name'],

    data () {
        return {
            game_not_found: false,
            loading: true,
            game: {
                name: null,
                description: null,
                published: new Date(),
                image: null,
                created_at: null,
                updated_at: null,
                image_url: null,
                user: {
                    name: null,
                    email: null,
                    created_at: null,
                    updated_at: null,
                },
                publisher: {
                    name: null,
                },
                console: {
                    name: null,
                    slug: null,
                    released: null,
                }
            },
        }
    },

    created () {
        this.getGame()
    },

    methods: {
        getGame () {
            this.$axios.get(`http://localhost/api/game/${this.game_name}`).then(res => {
                this.game = res.data
                this.game.published = new Date(this.game.published).getFullYear()
                this.loading = false
            }).catch(() => {
                this.game_not_found = true
            })
        }
    },
})
</script>

<style scoped>
.game-card {
    @apply shadow-md bg-gray-900 rounded-lg border border-gray-900;
}

a:hover {
    @apply ring ring-purple-500 ring-opacity-60;
    @apply transition duration-150 ease-in;
}
</style>
