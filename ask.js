'use strict'

const readline = require('readline')
try { var csscolors = require('./css-colors') } catch {} // css-colors.js is optional

function hideCursor() {
    process.stderr.write('\x1b[?25l') // Hide terminal cursor
}

function showCursor() {
    process.stderr.write('\x1b[?25h') // Show terminal cursor
}

// Parse color string and return RGB triplet
// If there is any error, return 'undefined'
// The ES2020 optional chaining operator (?.) requires Node.js >= 14.0.0
// https://v8.dev/features/optional-chaining
function parseColor(color) {
    if (typeof color === 'number') return color
    if (typeof color !== 'string') return undefined
    return csscolors?.parse(color)
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

function ask(choices, options = {}) {
    return new Promise((resolve, reject) => {
        if (choices.length === 0) {
            reject(new Error("'choices' array must not be empty"))
            return
        }

        // Set default options
        const { maxWindow = 10, pointer = '>' } = options
        const color = parseColor(options.color)

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
            const items = choices.slice(top, top + window).map(choice => spaces + choice)
            items[sel] = pointer + items[sel].slice(pointer.length)
            print(items.join('\n'), color)

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
                    readline.clearScreenDown(process.stdout)
                    process.stdin.off('keypress', keyPressCallback)
                    if (process.stdin.isTTY) {
                        process.stdin.setRawMode(false)
                    }
                    rl.close() // allows Node.js app to terminate properly
                    showCursor()
                    resolve(top + sel)
                    break
                default:
                    break
            }
        }

        process.stdin.on('keypress', keyPressCallback)
        showChoices()
    })
}

module.exports = ask
