import path from 'path'
import fs from 'fs'

const dir = path.join('..', 'data')

const entries = fs.readdirSync(dir, {withFileTypes: true})
const a = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)

console.log(a)
