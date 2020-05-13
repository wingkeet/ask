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
    // Refer to the 256-color lookup table at
    // https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit
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
    answer = await ask(choices, { color: 77, maxWindow: 5, pointer: '💀' })
    console.log(choices[answer])

    console.log('end')
}

main()
