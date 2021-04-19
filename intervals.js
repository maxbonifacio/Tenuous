const Note = require('./note.js');

const INTERVAL_NAMES = {1: "m2",
                        2: "M2",
                        3: "m3",
                        4: "M3",
                        5: "P4",
                        6: "d5",
                        7: "P5",
                        8: "m6",
                        9: "M6",
                        10: "m7",
                        11: "M7",
                        12: "P8",
                        13: "m9",
                        14: "M9",
                        15: "m10",
                        16: "M10",
                        17: "P11",
                        18: "D12",
                        19: "P12",
                        20: "m13",
                        21: "M13",
                        22: "m14",
                        23: "M14",
                        24: "P15"};

function intervalValue(firstNote, secondNote) { 
    return Math.abs(firstNote.trueValue - secondNote.trueValue);
} 

function intervalName(firstNote, secondNote) {
    return INTERVAL_NAMES[intervalValue(firstNote, secondNote)];
}

module.exports.intervalValue = intervalValue;
module.exports.intervalName = intervalName;
module.exports.INTERVAL_NAMES = INTERVAL_NAMES;