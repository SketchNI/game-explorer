<template>
    <div>
        <h1 class="text-4xl font-bold text-gray-200 flex items-center h-24">
            <img :src="roms.data.logo" alt="Nintendo 64 Logo" class="rounded w-24 mr-4">
            {{ roms.data.platform }}
        </h1>
        <border :alt="true"/>

        <div v-if="loading">
            <div class="my-48 text-center">
                <Loader class="h-16 w-16"/>
            </div>
        </div>

        <div v-else>
            <div class="flex items-center justify-end mb-4">
                <button @click="setView('Grid')" :class="`focus:outline-none view ${view === 'Grid' ? 'active' : ''}`">
                    <i class="fas fa-th"/> Grid
                </button>
                <button @click="setView('List')" :class="`focus:outline-none view ${view === 'List' ? 'active' : ''}`">
                    <i class="fas fa-th-list"/> List
                </button>
            </div>

            <div class="game-center w-full">
                <div v-if="roms.path.length > 0">
                    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" v-if="view === 'Grid'">
                        <div v-for="rom in roms.path" class="rom-card">
                            <GameCard :grid="true" :game_path="`${roms.data.path}/${rom}`" :game_name="filter(rom)"/>
                        </div>
                    </div>

                    <div class="flex flex-col space-y-4" v-if="view === 'List'">
                        <div v-for="rom in roms.path" class="rom-card">
                            <GameCard :grid="false" :game_path="`${roms.data.path}/${rom}`" :game_name="filter(rom)"/>
                        </div>
                    </div>
                </div>
                <div v-if="roms.path.length === 0">
                    <div class="bg-orange-500 rounded-lg bg-opacity-60 text-xl text-white shadow-lg px-6 py-4">
                        No ROMs found.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Loader from '../../components/Loader'
import platform from '~/src/utils/resolver/platform'
import GameCard from '../../components/GameCard'
import read from '~/src/utils/resolver/parse-rom'

export default Vue.extend({
    components: {
        GameCard,
        Loader
    },
    data () {
        return {
            loading: true,
            view: 'Grid',
            roms: []
        }
    },

    head () {
        return {
            title: `${this.roms.data.platform} - Game Explorer`
        }
    },

    created () {
        if (!localStorage.getItem('view')) {
            this.view = 'Grid'
            localStorage.setItem('view', 'Grid')
        }
        this.view = localStorage.getItem('view')
        this.collect(this.$route.params.name)

        read(this.$route.params.name, this.roms.path[0])
    },

    methods: {
        setView (view) {
            if (view === 'Grid' || view === 'List') {
                this.view = view
                localStorage.setItem('view', view)
            }
        },

        collect (p) {
            if (this.roms.path !== null) {
                this.roms = platform(p)
            } else {
                throw Error('Not Found')
            }
            this.loading = false

        },

        filter (name) {
            if (name.includes('(')) {
                let rom = name.split('(')[0]
                return rom.toLowerCase()
            }
            if (name.includes('.')) {
                let rom = name.split('.')[0]
                return rom.toLowerCase()
            }
        }
    }
})
</script>

<style scoped>
.view {
    @apply px-2 py-1 border mx-0 border-gray-600 text-gray-400;
}

.view:first-of-type {
    @apply rounded-l-lg;
}

.view:last-of-type {
    @apply rounded-r-lg;
}

.view.active {
    @apply bg-gray-600 text-gray-300;
}
</style>
