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

    // Example 2 with all options specified
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
    console.log(`Where do you come from? (${choices.length})`)
    answer = await ask(choices, { color: 'HotPink', maxWindow: 6, pointer: '😀' })
    console.log(choices[answer])
}

main()
