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
    // For 24-bit color, CSS named-colors, hex-colors and rgb-colors are supported.
    //   Examples: - { color: 'CornflowerBlue' }
    //             - { color: '#fe10ca' }, { color: '#d2b' }
    //             - { color: 'rgb(188,0,95)' }
    // Named-colors and hex-colors are case insensitive.
    // Spaces should not be used within the color values.
    // Invalid color values are silently ignored.
    choices = [
        'Ace Combat 7: Skies Unknown',
        "Assassin's Creed Odyssey",
        'BATTLETECH',
        'Borderlands 3',
        'Cyberpunk 2077',
        'Devil May Cry 5',
        "Empire of Sin",
        'Kingdom Hearts',
        'Mark of the Ninja',
        'Oxygen Not Included',
        'Rocket League',
        'Sekiro: Shadows Die Twice',
        'The Witcher 3: Wild Hunt',
        'Wolfenstein: Youngblood',
        'XCOM: Chimera Squad'
    ]
    console.log(`Which game do you want to play today? (${choices.length})`)
    answer = await ask(choices, { color: 'HotPink', maxWindow: 6, pointer: '😀' })
    console.log(choices[answer])
}

main()
