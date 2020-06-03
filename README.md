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

### Additional Notes
- Type `node main.js` on the command line for a simple demo.

### Authors
* **Steve Leong** - *Initial work*

### License
This project is licensed under the MIT License - see the LICENSE file for details.
