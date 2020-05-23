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
    //             - { color: 'rgb(188,0,95)' }, { color: 'rgb(0%,50%,100%)' }
    // All color values are case-insensitive.
    // Spaces should not be used within the color values.
    // Invalid color values are silently ignored.
    // A list of CSS color names can be found at
    //   https://www.w3schools.com/cssref/css_colors.asp
    choices = [
        'Abkhazia',
        'Afghanistan',
        'Aland Islands',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Ascension',
        'Australia',
        'Austria',
        'Azerbaijan',
    ]
    console.log(`Countries that begin with 'A': (${choices.length})`)
    answer = await ask(choices, { color: 'HotPink', maxWindow: 6, pointer: '😀' })
    console.log(choices[answer])
}

main()
