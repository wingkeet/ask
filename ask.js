'use strict'

const readline = require('readline')

function hideCursor() {
    process.stderr.write('\x1b[?25l') // Hide terminal cursor
}

function showCursor() {
    process.stderr.write('\x1b[?25h') // Show terminal cursor
}

// Print string in 8-bit color or 24-bit color
// Colors can be specified using:
//   - a Number (8-bit color; e.g. 6 for cyan) or
//   - a String (24-bit RGB color; e.g. '255,147,182' for pink).
// For 8-bit color, refer to the lookup table at
// https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
function paint(str, color) {
    switch (typeof color) {
        case 'number':
            process.stdout.write(`\x1b[38;5;${color}m${str}\x1b[0m`)
            break
        case 'string':
            const match = color.match(/^(\d{1,3}),(\d{1,3}),(\d{1,3})$/)
            if (match) {
                const [, r, g, b] = match
                process.stdout.write(`\x1b[38;2;${r};${g};${b}m${str}\x1b[0m`)
            }
            else {
                process.stdout.write(str)
            }
            break
        default:
            process.stdout.write(str)
            break
    }
}

function ask(choices, options) {
    return new Promise((resolve, reject) => {
        // Set default options
        const { color, maxWindow = 10, pointer = '>' } = options || {}

        hideCursor()
        readline.emitKeypressEvents(process.stdin)
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true)
        }

        const rl = readline.createInterface(process.stdin)
        const window = Math.min(maxWindow, choices.length)
        let top = 0
        let sel = 0 // current selection relative to top

        // Display list of choices
        const showChoices = () => {
            readline.clearScreenDown(process.stdout)
            const spaces = ' '.repeat(pointer.length + 1)
            let str = choices.slice(top, top + window).map(choice => spaces + choice)
            str[sel] = pointer + str[sel].slice(pointer.length)
            str = str.join('\n')
            paint(str, color)

            readline.cursorTo(process.stdout, 0)
            readline.moveCursor(process.stdout, 0, 1 - window)
        }

        // Callback function to handle key presses
        const keyPressCallback = (str, key) => {
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
