<template>
    <div>
        <div v-if="loading">
            <Loader/>
        </div>
        <div v-else>
            <div v-if="!game_not_found">
                <div v-if="grid" class="game-card block p-4">
                    <div class="mb-4 -m-4 h-64 overflow-y-hidden rounded-t-lg">
                        <img :src="game.image_url" :alt="`${game.name} Box Art`" class="w-96 rounded-t-lg"/>
                    </div>

                    <div class="font-bold text-gray-400 text-xl pt-0">
                        {{ game.name }}
                    </div>

                    <div class="text-gray-500 bg-gray-900 h-24 overflow-y-auto">
                        {{ game.description }}
                    </div>

                    <LaunchButton :game_path="game_path" :game_name="game.name" :platform="game.console.slug"
                                  :grid="grid"/>

                    <Border/>

                    <div class="bg-gray-900 text-gray-400">
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

                <div v-else-if="!grid" class="game-card block">
                    <div class="grid grid-cols-5">
                        <div class="col-span-1">
                            <img :src="game.image_url" :alt="`${game.name} Box Art`" class="list-image rounded-l-lg">
                        </div>

                        <div class="col-span-4 p-4">
                            <div class="font-bold text-gray-400 text-xl">
                                {{ game.name }}
                            </div>

                            <div class="text-gray-500">
                                {{ game.description }}
                            </div>

                            <LaunchButton :game_path="game_path" :game_name="game.name" :platform="game.console.slug"
                                          :grid="grid"/>

                            <Border/>

                            <div class="text-gray-400">
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
                </div>
            </div>

            <div v-else-if="game_not_found" class="game-card">
                <div v-if="grid" class="p-4">
                    <div class="mb-4 -m-4 h-64 overflow-y-hidden rounded-t-lg">
                        <img src="/no_image.png" alt="No Box Art" class="w-96 rounded-t-lg">
                    </div>

                    <div class="font-bold text-gray-400 text-xl">
                        {{ game_name }}
                    </div>

                    <LaunchButton :game_path="game_path" :game_name="game.name" :platform="game.console.slug"
                                  :grid="grid"/>

                    <Border/>

                    <div class="text-gray-500">
                        No meta information available.
                    </div>
                </div>
                <div v-else>
                    <div class="grid grid-cols-5">
                        <div class="col-span-1">
                            <img src="/no_image.png" alt="No Box Art" class="w-72 rounded-l-lg">
                        </div>

                        <div class="col-span-4 py-4">
                            <div class="font-bold text-gray-400 text-xl">
                                {{ game_name }}
                            </div>

                            <LaunchButton :game_path="game_path" :game_name="game.name" :platform="game.console.slug"
                                      :grid="grid"/>

                            <Border/>

                            <div class="text-gray-500">
                                No meta information available.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Border from '~/components/Border.vue'
import Loader from '~/components/Loader.vue'
import LaunchButton from '~/components/LaunchButton'
import crypto from 'crypto'

export default {
    name: 'GameCard',
    components: {
        LaunchButton,
        Border,
        Loader
    },
    props: ['grid', 'game_name', 'game_path'],

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
            if (!localStorage.getItem(this.name_hash)) {
                this.$axios.get(`https://gameexplorer.sketchni.codes/api/game/${this.game_name}`).then(res => {
                    this.game = res.data
                    this.game.published = new Date(this.game.published).getFullYear()

                    this.writeToStorage(this.name_hash, this.game)

                    this.loading = false
                }).catch((e) => {
                    this.game_not_found = true
                    this.loading = false
                })
            } else {
                this.readFromStorage(this.name_hash)
                this.loading = false
            }
        },

        writeToStorage (hash, data) {
            localStorage.setItem(hash, JSON.stringify(data))
        },

        readFromStorage (hash) {
            this.game = JSON.parse(localStorage.getItem(hash))
        }
    },

    computed: {
        name_hash: function () {
            let hasher = crypto.createHash('sha1')
            hasher.update(this.game_name)
            return hasher.digest('hex')
        }
    }
}
</script>

<style scoped>
.game-card {
    @apply shadow-md bg-gray-900 rounded-lg border border-gray-900 cursor-pointer;
}

.game-card:hover {
    @apply ring ring-purple-500 ring-opacity-60;
    @apply transition duration-150 ease-in;
}
</style>
