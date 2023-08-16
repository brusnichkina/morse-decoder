const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
let result = '';
    for (let i = 0; i < expr.length; i+=10) {
    let letter = expr.slice(i, i + 10);
    if (letter === '**********')  {
    result += ' '; continue
    }
       let space = '';
       for (let s = 0; s < 10; s+=2) {
       let morse = letter.slice(s, s + 2);
           if (morse === '10') {
           space += '.';
           }
           else if (morse === '11') {
           space += '-';
           }}
           result += MORSE_TABLE[space];
    }
    return result
}

module.exports = {
    decode
}