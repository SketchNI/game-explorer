import * as fs from 'fs'

const conf = require('../../../config.json')

let forbidden_extensions = [
    'cht', // Emulator Cheat Files
    'ips', // International Patching System (ROM Patcher)
    'zst', // ZSnes/ZMZ Save File
    'srm', // SNES Save RAM
    'cue', // CD/DVD Track Layout
];

let forbidden_files = [
    'ppu.bin' // Power Processing Unit
];

export default function platform (platform) {
    let files = fs.readdirSync(conf[platform].path);
    let roms = [];
    for(let i = 0; i < files.length; i++) {
        if ( !in_array(files[i], forbidden_files)) {
            let size = files[i].split('.').length;
            if ( !in_array(files[i].split('.')[size - 1], forbidden_extensions) ) {
                roms.push(files[i]);
            }
        }
    }

    return (conf[platform].path !== null ? {
        data: conf[platform],
        path: roms,
    } : null);
}

function in_array(needle, haystack) {
    const length = haystack.length
    for(let i = 0; i < length; i++) {
        if(typeof haystack[i] == 'object') {
            if(array_compare(haystack[i], needle)) return true;
        } else {
            if(haystack[i] === needle) return true;
        }
    }
    return false;
}

function array_compare(a1, a2) {
    if (a1.length !== a2.length) return false;
    const length = a2.length
    for (let i = 0; i < length; i++) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
}
