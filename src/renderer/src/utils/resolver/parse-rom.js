import fs from 'fs'
import path from 'path'
import conf from '~/config.json'

/* Mega Drive/Genesis ROM Header format
 * - Values in brackets are how many bytes are allocated to that data.
 * Console Name (16)
 * Copyright Information (16)
 * Domestic Name (48)
 * Overseas Name (48)
 * Serial Number (2, 12)
 * Checksum (2)
 * I/O Support (16)
 * ROM Start Address (4)
 * ROM End Address (4)
 * Start of Backup RAM (4)
 * End of Backup RAM (4)
 * "RA" for save ram (2)
 * 0xF820 for save ram on odd bytes (2)
 * SRAM start address - normally 0x200001 (4)
 * SRAM end address - start + 2*sram_size (4)
 * Modem Support (24)
 * Memo (40)
 * Country Support (16)
 */

export default function read (platform, rom) {
    const reader = new FileReader()
    console.log(path.resolve(`${conf[platform].path}/${rom}`)) // full path to rom
    reader.onload = function (e) {
        console.log(e.target.result, reader.result, 'reader result')
    }

    //reader.readAsBinaryString(path.resolve(`${conf[platform].path}/${rom}`));
}
