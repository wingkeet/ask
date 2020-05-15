'use strict'

const ask = require('./ask')

async function main() {
    let choices
    let answer

    // Example 1 with default options
    choices = [
        'にほん',
        '대한민국',
        'Česká republika',
        'España',
        'Россия',
        'România',
    ]
    console.log(`Where do you come from? (${choices.length})`)
    answer = await ask(choices)
    console.log(choices[answer])

    // Example 2 with all options specified.
    // Colors may be specified using:
    //   - a Number (8-bit color; e.g. { color: 6 } for cyan), or
    //   - a String (24-bit RGB color; see below for details)
    // For 8-bit color, refer to the lookup table at
    //   https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
    // For 24-bit color, CSS hex-color and rgb() values are supported.
    //   Examples: - { color: '#fe10cc' } or { color: '#d2b' }
    //             - { color: 'rgb(255,147,182)' }
    // Invalid colors values are silently ignored.
    choices = [
        'Ace Combat 7: Skies Unknown',
        "Assassin's Creed Odyssey",
        'Bastion',
        'Borderlands 3',
        'Call of Duty: Modern Warfare',
        'Devil May Cry 5',
        'Kingdom Hearts',
        'Rocket League',
        'Sekiro: Shadows Die Twice',
        'The Witcher 2',
        'Wolfenstein: Youngblood',
        'XCOM: Chimera Squad'
    ]
    console.log(`Which game do you want to play today? (${choices.length})`)
    answer = await ask(choices, { color: '#d2b', maxWindow: 5, pointer: '😀' })
    console.log(choices[answer])
}

main()
