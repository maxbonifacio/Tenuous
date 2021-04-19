//This file contains functions for manipulating individual notes.

const NOTE_NAMES = {"C": 0, 
                    "C#": 1, "Db": 1,
                    "D": 2, 
                    "D#": 3, "Eb": 3, 
                    "E": 4, 
                    "F": 5, 
                    "F#": 6, "Gb": 6, 
                    "G": 7,
                    "G#": 8, "Ab": 8,
                    "A": 9, 
                    "A#": 10, "Bb":10,
                    "B": 11};

function Note(name, octave) {
    if (checkNoteName(name)) {
        this.name = name;
        this.octave = parseInt(octave, 10);
        this.trueValue = ((this.octave + 2) * 12) + NOTE_NAMES[name];
    } else {
        throw "Invalid note name";
    }
}

Note.prototype.midi = function() {
    if (!(-3 < this.octave < 9)) {
        throw "Note does not exist in MIDI";
    } 
    return this.trueValue;
}

function checkNoteName(name) {
    return name in NOTE_NAMES;
}

//----- Exported Functions -----//
module.exports = Note;

//----- Exported Constants -----//
module.exports.NOTE_NAMES = NOTE_NAMES;




