var hours = process.argv[2];
var minutes = process.argv[3];

var arabToRoman = {
    0: '-',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L'
};

function isInt(n) {
    return Number(n) == n && n % 1 === 0;
}

function isHours(hours) {
    if (isInt(hours) && hours >= 0 && hours <= 24) {
        return true;
    }
    console.log('incorrect data in argv2 hours');
    return false;
}

function isMinutes(minutes) {
    if (isInt(minutes) && minutes >= 0 && minutes <= 59) {
        return true;
    }
    console.log('incorrect data in argv3 minutes');
    return false;
}

function toRoman(number) {
    if (number in arabToRoman) {
        return arabToRoman[number];
    } else {
        return arabToRoman[number[0] * 10] + arabToRoman[number[1]];
    }
}

var aciiRoman = {
    'I': [
            ' ###### ',
            '   ##   ',
            '   ##   ',
            '   ##   ',
            ' ###### ',
        ],
    'V': [
            ' ##   ## ',
            ' ##   ## ',
            '  ## ##  ',
            '   ###   ',
            '    #    ',
        ],
    'X': [
            ' ##  ## ',
            '  ####  ',
            '   ##   ',
            '  ####  ',
            ' ##  ## ',
        ],
    'L': [
            ' ##     ',
            ' ##     ',
            ' ##     ',
            ' ##     ',
            ' ###### ',
        ],
    ':': [
            '   ##   ',
            '   ##   ',
            '        ',
            '   ##   ',
            '   ##   ',
        ],
    '-': [
            '        ',
            '        ',
            ' ###### ',
            '        ',
            '        ',
        ]
};

function renderAciiRome(timeInRome) {
    var symbolsArray = timeInRome.split(''),
        acii, i, j;
    for (i = 0; i < 5; i++) {
        acii = '';
            for (j = 0; j < symbolsArray.length; j++) {
                acii += aciiRoman[symbolsArray[j]][i];
            }
        console.log(acii);
    }
}

if (isHours(hours) && isMinutes(minutes)) {
    renderAciiRome(toRoman(hours) + ':' + toRoman(minutes));
}
