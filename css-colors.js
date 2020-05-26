'use strict'

// These CSS color names and their values were obtained from
// https://www.w3schools.com/cssref/css_colors.asp

const NAMED_COLORS = {
    AliceBlue               : 'F0F8FF',
    AntiqueWhite            : 'FAEBD7',
    Aqua                    : '00FFFF',
    Aquamarine              : '7FFFD4',
    Azure                   : 'F0FFFF',
    Beige                   : 'F5F5DC',
    Bisque                  : 'FFE4C4',
    Black                   : '000000',
    BlanchedAlmond          : 'FFEBCD',
    Blue                    : '0000FF',
    BlueViolet              : '8A2BE2',
    Brown                   : 'A52A2A',
    BurlyWood               : 'DEB887',
    CadetBlue               : '5F9EA0',
    Chartreuse              : '7FFF00',
    Chocolate               : 'D2691E',
    Coral                   : 'FF7F50',
    CornflowerBlue          : '6495ED',
    Cornsilk                : 'FFF8DC',
    Crimson                 : 'DC143C',
    Cyan                    : '00FFFF',
    DarkBlue                : '00008B',
    DarkCyan                : '008B8B',
    DarkGoldenRod           : 'B8860B',
    DarkGray                : 'A9A9A9',
    DarkGrey                : 'A9A9A9',
    DarkGreen               : '006400',
    DarkKhaki               : 'BDB76B',
    DarkMagenta             : '8B008B',
    DarkOliveGreen          : '556B2F',
    DarkOrange              : 'FF8C00',
    DarkOrchid              : '9932CC',
    DarkRed                 : '8B0000',
    DarkSalmon              : 'E9967A',
    DarkSeaGreen            : '8FBC8F',
    DarkSlateBlue           : '483D8B',
    DarkSlateGray           : '2F4F4F',
    DarkSlateGrey           : '2F4F4F',
    DarkTurquoise           : '00CED1',
    DarkViolet              : '9400D3',
    DeepPink                : 'FF1493',
    DeepSkyBlue             : '00BFFF',
    DimGray                 : '696969',
    DimGrey                 : '696969',
    DodgerBlue              : '1E90FF',
    FireBrick               : 'B22222',
    FloralWhite             : 'FFFAF0',
    ForestGreen             : '228B22',
    Fuchsia                 : 'FF00FF',
    Gainsboro               : 'DCDCDC',
    GhostWhite              : 'F8F8FF',
    Gold                    : 'FFD700',
    GoldenRod               : 'DAA520',
    Gray                    : '808080',
    Grey                    : '808080',
    Green                   : '008000',
    GreenYellow             : 'ADFF2F',
    HoneyDew                : 'F0FFF0',
    HotPink                 : 'FF69B4',
    IndianRed               : 'CD5C5C',
    Indigo                  : '4B0082',
    Ivory                   : 'FFFFF0',
    Khaki                   : 'F0E68C',
    Lavender                : 'E6E6FA',
    LavenderBlush           : 'FFF0F5',
    LawnGreen               : '7CFC00',
    LemonChiffon            : 'FFFACD',
    LightBlue               : 'ADD8E6',
    LightCoral              : 'F08080',
    LightCyan               : 'E0FFFF',
    LightGoldenRodYellow    : 'FAFAD2',
    LightGray               : 'D3D3D3',
    LightGrey               : 'D3D3D3',
    LightGreen              : '90EE90',
    LightPink               : 'FFB6C1',
    LightSalmon             : 'FFA07A',
    LightSeaGreen           : '20B2AA',
    LightSkyBlue            : '87CEFA',
    LightSlateGray          : '778899',
    LightSlateGrey          : '778899',
    LightSteelBlue          : 'B0C4DE',
    LightYellow             : 'FFFFE0',
    Lime                    : '00FF00',
    LimeGreen               : '32CD32',
    Linen                   : 'FAF0E6',
    Magenta                 : 'FF00FF',
    Maroon                  : '800000',
    MediumAquaMarine        : '66CDAA',
    MediumBlue              : '0000CD',
    MediumOrchid            : 'BA55D3',
    MediumPurple            : '9370DB',
    MediumSeaGreen          : '3CB371',
    MediumSlateBlue         : '7B68EE',
    MediumSpringGreen       : '00FA9A',
    MediumTurquoise         : '48D1CC',
    MediumVioletRed         : 'C71585',
    MidnightBlue            : '191970',
    MintCream               : 'F5FFFA',
    MistyRose               : 'FFE4E1',
    Moccasin                : 'FFE4B5',
    NavajoWhite             : 'FFDEAD',
    Navy                    : '000080',
    OldLace                 : 'FDF5E6',
    Olive                   : '808000',
    OliveDrab               : '6B8E23',
    Orange                  : 'FFA500',
    OrangeRed               : 'FF4500',
    Orchid                  : 'DA70D6',
    PaleGoldenRod           : 'EEE8AA',
    PaleGreen               : '98FB98',
    PaleTurquoise           : 'AFEEEE',
    PaleVioletRed           : 'DB7093',
    PapayaWhip              : 'FFEFD5',
    PeachPuff               : 'FFDAB9',
    Peru                    : 'CD853F',
    Pink                    : 'FFC0CB',
    Plum                    : 'DDA0DD',
    PowderBlue              : 'B0E0E6',
    Purple                  : '800080',
    RebeccaPurple           : '663399',
    Red                     : 'FF0000',
    RosyBrown               : 'BC8F8F',
    RoyalBlue               : '4169E1',
    SaddleBrown             : '8B4513',
    Salmon                  : 'FA8072',
    SandyBrown              : 'F4A460',
    SeaGreen                : '2E8B57',
    SeaShell                : 'FFF5EE',
    Sienna                  : 'A0522D',
    Silver                  : 'C0C0C0',
    SkyBlue                 : '87CEEB',
    SlateBlue               : '6A5ACD',
    SlateGray               : '708090',
    SlateGrey               : '708090',
    Snow                    : 'FFFAFA',
    SpringGreen             : '00FF7F',
    SteelBlue               : '4682B4',
    Tan                     : 'D2B48C',
    Teal                    : '008080',
    Thistle                 : 'D8BFD8',
    Tomato                  : 'FF6347',
    Turquoise               : '40E0D0',
    Violet                  : 'EE82EE',
    Wheat                   : 'F5DEB3',
    White                   : 'FFFFFF',
    WhiteSmoke              : 'F5F5F5',
    Yellow                  : 'FFFF00',
    YellowGreen             : '9ACD32',
}

// Example: '#F0F8FF' => { 0xF0, 0xF8, 0xFF }
function hex6ToRGB(color) {
    const match = color.match(/^#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/i)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(hex => parseInt(hex, 16))
    return {r, g, b}
}

// Example: '#F22' => { 0xFF, 0x22, 0x22 }
function hex3ToRGB(color) {
    const match = color.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(hex => parseInt(hex + hex, 16))
    return {r, g, b}
}

// Example: 'rgb(7,80,255)' => { 7, 80, 255 }
function rgbiToRGB(color) {
    const match = color.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(int => Number(int))
    return {r, g, b}
}

// Example: 'rgb(0%,50%,100%)' => { 0, 128, 255 }
function rgbpToRGB(color) {
    const match = color.match(/^rgb\((\d{1,3})%,(\d{1,3})%,(\d{1,3})%\)$/)
    if (!match) return undefined
    const [r, g, b] = match.slice(1, 4).map(percentage => Math.round(percentage / 100 * 255))
    return {r, g, b}
}

// https://drafts.csswg.org/css-color-3/#hsl-color
// Example: 'hsl(0,100%,50%)' => { 255, 0, 0 }
function hslToRGB(color) {
    const match = color.match(/^hsl\((-?\d{1,3}),(\d{1,3})%,(\d{1,3})%\)$/)
    if (!match) return undefined
    const angle = ((match[1] % 360) + 360) % 360 // normalize angle to [0,360)
    const H = angle / 360    // range [0,1)
    const S = match[2] / 100 // range [0,1]
    const L = match[3] / 100 // range [0,1]
    function hueToRGB(h) {
        if (h < 0) h++
        if (h > 1) h--
        if (h * 6 < 1) return m1 + (m2 - m1) * h * 6
        if (h * 2 < 1) return m2
        if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6
        return m1
    }
    const m2 = L <= 0.5 ? L * (S + 1) : L + S - L * S
    const m1 = L * 2 - m2
    const r = Math.round(hueToRGB(H + 1 / 3) * 255)
    const g = Math.round(hueToRGB(H) * 255)
    const b = Math.round(hueToRGB(H - 1 / 3) * 255)
    return {r, g, b}
}

function getNamedColors() {
    // Example: 'F0F8FF' => { 0xF0, 0xF8, 0xFF }
    function hex6ToRGBSafe(hex) {
        hex = parseInt(hex, 16)
        return {
            r: (hex >> 16) & 0xff,
            g: (hex >> 8) & 0xff,
            b: hex & 0xff
        }
    }
    // https://v8.dev/features/object-fromentries
    return Object.fromEntries(
        Object.entries(NAMED_COLORS).map(([name, hex6]) => [name.toLowerCase(), hex6ToRGBSafe(hex6)])
    )
}

const _NAMED_COLORS = getNamedColors()

// Parse color string and return RGB triplet
// If there is any error, return 'undefined'
function parse(color) {
    if (typeof color !== 'string') return undefined
    color = color.toLowerCase()
    let rgb

    if (color.startsWith('#')) {
        if (rgb = hex6ToRGB(color)) return rgb
        if (rgb = hex3ToRGB(color)) return rgb
        return undefined
    }
    else if (color.startsWith('rgb')) {
        if (rgb = rgbiToRGB(color)) return rgb
        if (rgb = rgbpToRGB(color)) return rgb
        return undefined
    }
    else if (color.startsWith('hsl')) {
        if (rgb = hslToRGB(color)) return rgb
        return undefined
    }
    else {
        return _NAMED_COLORS[color]
    }
}

module.exports = { parse, NAMED_COLORS }
