<template>
    <button type="button" @click="launchGame" :class="`play-button`" v-if="!running">
        <i class="far fa-play-circle" />
        <span>Play</span>
    </button>
    <button type="button" @click="stopGame" :class="`stop-button`" v-else-if="running">
        <i class="far fa-stop-circle" />
        <span>Stop</span>
    </button>
</template>

<script>
import path from 'path'
import { spawn } from 'child_process';
import cores from '~/src/utils/resolver/cores'

export default {
    name: 'LaunchButton',

    props: ['game_name', 'grid', 'game_path', 'platform'],

    data() {
        return {
            running: false,
            psx: null,
        }
    },

    methods: {
        launchGame () {
            try {
                console.debug(`[GE::Info] Launching Retro-Arch running ${this.game_name}`)
                const config = require('./../config.json');
                const libretro_core = cores(this.platform);
                const process = spawn(
                    path.resolve(`${config.emulators.retroarch.path}/${config.emulators.retroarch.executable}`),
                    ['-L', libretro_core, this.game_path]);
                this.psx = process;
                console.log(process);
                this.running = !this.running;
            } catch (e) {
                console.log(e);
            }
        },

        stopGame() {
            console.debug(`[GE::Info] Shutting down Retro-Arch running ${this.game_name}`)
            this.psx.kill('SIGTERM');
            this.running = !this.running;
        }
    }
}
</script>

<style scoped>
.play-button {
    @apply flex items-center space-x-2 mt-2;
    @apply bg-green-500 text-white px-4 py-2 rounded-lg;
    @apply transition duration-150 ease-in focus:outline-none;
    @apply hover:bg-green-600 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900;
    @apply focus:ring-green-600 focus:ring-opacity-70;
}

.stop-button {
    @apply flex items-center space-x-2 mt-2;
    @apply bg-red-500 text-white px-4 py-2 rounded-lg;
    @apply transition duration-150 ease-in focus:outline-none;
    @apply hover:bg-red-600 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900;
    @apply focus:ring-red-600 focus:ring-opacity-70;
}
</style>
