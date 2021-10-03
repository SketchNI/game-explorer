import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'
import config from '../../../config.json'

export default function cores (platform) {
    switch (platform) {
    case 'n64':
        console.debug("[GE::Debug] Hit n64 in cores() function.")
        return n64();
    }

    throw new Error('No cores exist for this platform.');
}

function n64 () {
    let config = require('../../../config.json');
    let ra = config.emulators.retroarch;
    switch (os.platform()) {
    case 'win32':
        console.debug("[GE::Debug] Hit n64::win32 in cores() function.")
        if (fs.existsSync(path.resolve(`${ra.cores}/mupen64plus_next_libretro.dll`))) {
            return `${ra.cores}/mupen64plus_next_libretro.dll`;
        }

        if (fs.existsSync(path.resolve(`${ra.cores}/parallel_n64_libretro.dll`))) {
            return `${ra.cores}/parallel_n64_libretro.dll`;
        }

        break;
    case 'darwin':
        break;
    case 'linux':
        break;
    }

    throw new Error('No cores exist for this platform.');
}
