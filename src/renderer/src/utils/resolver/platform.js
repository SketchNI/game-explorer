import * as fs from 'fs'

const conf = require('../../../config.json')

export default function platform (platform) {
    return (conf[platform].path !== null ? {
        data: conf[platform],
        path: fs.readdirSync(conf[platform].path)
    } : null);
}
