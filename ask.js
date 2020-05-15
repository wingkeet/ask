'use strict'

const readline = require('readline')
const csscolors = require('./css-colors')

// Example: Convert 'F0F8FF' to { 0xF0, 0xF8, 0xFF }
function hex6ToRGB(color) {
    const match = color.match(/^#?([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(hex => parseInt(hex, 16))
    return {r, g, b}
}

// Example: Convert 'F22' to { 0xFF, 0x22, 0x22 }
function hex3ToRGB(color) {
    const match = color.match(/^#?([A-F0-9])([A-F0-9])([A-F0-9])$/i)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(hex => parseInt(hex + hex, 16))
    return {r, g, b}
}

// Example: Convert 'rgb(7,80,255)' to { 7, 80, 255 }
function rgbToRGB(color) {
    const match = color.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(dec => Number(dec))
    return {r, g, b}
}

function getNamedColors() {
    // https://javascript.info/keys-values-entries#transforming-objects
    return Object.fromEntries(
        Object.entries(csscolors).map(([name, color]) => [name, hex6ToRGB(color)])
    )
}

const CSS_COLORS = getNamedColors()

function hideCursor() {
    process.stderr.write('\x1b[?25l') // Hide terminal cursor
}

function showCursor() {
    process.stderr.write('\x1b[?25h') // Show terminal cursor
}

// Parse color string and return RGB triplet
// If there is any error, return 'undefined' 
function parseColor(color) {
    if (typeof color === 'number') return color
    if (typeof color !== 'string') return undefined

    color = color.toLowerCase()
    let rgb
    if (rgb = hex6ToRGB(color)) return rgb
    if (rgb = hex3ToRGB(color)) return rgb
    if (rgb = rgbToRGB(color)) return rgb
    return CSS_COLORS[color]
}

// Print string in 8-bit color or 24-bit color
function print(str, color) {
    switch (typeof color) {
        case 'number': // 8-bit color
            process.stdout.write(`\x1b[38;5;${color}m${str}\x1b[0m`)
            break
        case 'object': // 24-bit color
            const {r, g, b} = color
            process.stdout.write(`\x1b[38;2;${r};${g};${b}m${str}\x1b[0m`)
            break
        default:
            process.stdout.write(str)
            break
    }
}

function ask(choices, options) {
    return new Promise((resolve, reject) => {
        if (choices.length === 0) {
            reject(new Error("'choices' array must not be empty"))
            return
        }

        // Set default options
        const { color: colorTemp, maxWindow = 10, pointer = '>' } = options || {}
        const color = parseColor(colorTemp)

        hideCursor()
        readline.emitKeypressEvents(process.stdin)
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true)
        }

        const rl = readline.createInterface(process.stdin)
        const window = Math.min(maxWindow, choices.length)
        let top = 0 // top of window
        let sel = 0 // current selection relative to top

        // Display choices
        function showChoices() {
            readline.clearScreenDown(process.stdout)
            const spaces = ' '.repeat(pointer.length + 1)
            let str = choices.slice(top, top + window).map(choice => spaces + choice)
            str[sel] = pointer + str[sel].slice(pointer.length)
            str = str.join('\n')
            print(str, color)

            readline.cursorTo(process.stdout, 0)
            readline.moveCursor(process.stdout, 0, 1 - window)
        }

        // Callback function to handle key presses
        function keyPressCallback(str, key) {
            if (key.ctrl && key.name === 'c') {
                readline.clearScreenDown(process.stdout)
                showCursor()
                process.exit()
            }
            switch (key.name) {
                case 'up':
                    if (sel > 0) {
                        // No scrolling, just move the selection up
                        sel--
                        showChoices()
                    }
                    else if (top > 0) {
                        // Needs scrolling
                        top--
                        showChoices()
                    }
                    break
                case 'down':
                    if (sel < window - 1) {
                        // No scrolling, just move the selection down
                        sel++
                        showChoices()
                    }
                    else if (top + window < choices.length) {
                        // Needs scrolling
                        top++
                        showChoices()
                    }
                    break
                case 'return':
                case 'q':
                    readline.clearScreenDown(process.stdout)
                    process.stdin.off('keypress', keyPressCallback)
                    if (process.stdin.isTTY) {
                        process.stdin.setRawMode(false)
                    }
                    rl.close() // allows Node.js app to terminate properly
                    showCursor()
                    resolve(key.name === 'return' ? top + sel : -1)
                default:
                    break
            }
        }

        process.stdin.on('keypress', keyPressCallback)
        showChoices()
    })
}

module.exports = ask
