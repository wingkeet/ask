# ask
Simple Node.js CLI library to display a list of scrollable choices and ask user for selection.

### Introduction
Ask is a Node.js module that offers an easy-to-use API to display a list of scrollable choices.
The end-user navigates the choices with the up arrow and down arrow keys, and presses the Enter
key for selection. Configurable options are shown below:
- 8-bit and 24-bit text terminal colors using ANSI escape sequences.
- Number of rows in the scrollable window.
- Selection pointer can be specified with a UTF-8 string.

### Prerequisites
- The file `ask.js` has zero external dependencies.

### Getting Started
Call the `ask` function with an array of choices followed by options.
```
const ask = require('./ask')

async function main() {
    const choices = [
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
    const answer = await ask(choices, { color: 'HotPink', maxWindow: 6, pointer: '😀' })
    console.log(choices[answer])
}

main()
```

The `ask` function can also be called without passing in the `options` argument.

### Text Terminal Color Support
Colors may be specified using:
- a Number (8-bit color; e.g. { color: 6 } for cyan), or
- a String (24-bit RGB color; see below for details)

For 8-bit color, refer to the [256-color lookup table](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)
on Wikipedia.

For 24-bit color, CSS named-colors, hex-colors, rgb-colors and hsl-colors are supported.
Examples are shown below:
- `{ color: 'CornflowerBlue' }`
- `{ color: '#fe10ca' }, { color: '#d2b' }`
- `{ color: 'rgb(188,0,95)' }, { color: 'rgb(0%,50%,100%)' }`
- `{ color: 'hsl(0,100%,50%)' }`

- All color values are case-insensitive.
- Spaces should not be used within the color values.
- Invalid color values are silently ignored.
- A list of CSS color names can be found at https://www.w3schools.com/cssref/css_colors.asp

### Additional Notes
- Type `npm start` or `node main.js` on the command line for a simple demo.

### Authors
* **Steve Leong** - *Initial work*

### License
This project is licensed under the MIT License - see the LICENSE file for details.
