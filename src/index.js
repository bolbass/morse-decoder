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

function decode(str) {
    let arr = [];
    let res = '';
    let element;
    let str10;
    let str2;
    const dash = '11';
    const dot = '10';
    if (str.length % 10 !== 0) return 0;
    for (let i = 0; i < str.length; i += 10) {
        element = '';
        str10 = str.slice(i, i + 10);
        if (str10 === '**********') {
            arr.push(' ');
            continue;
        }
        for (let j = 0; j < str10.length; j += 2) {
            str2 = str10.slice(j, j + 2);
            str2.includes(dot)?element += ".":str2.includes(dash)? element += "-" : element += "";
        }
        arr.push(element);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') { 
            res += arr[i];
            continue;
        }
        res += MORSE_TABLE[arr[i]];
    }
    return res;
}

module.exports = {
    decode
}