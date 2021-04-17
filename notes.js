//This file contains functions for manipulating individual notes.
const MIDDLE_A = 440;
const NOTE_NAMES = {"A": 1, 
                    "A#": 2, "Bb":2,
                    "B": 3, 
                    "C": 4, 
                    "C#": 5, "Db": 5,
                    "D": 6, 
                    "D#": 7, "Eb": 7, 
                    "E": 8, 
                    "F": 9, 
                    "F#": 10, "Gb": 10, 
                    "G": 11,
                    "G#": 12, "Ab": 12};


function Note(name, octave) {
    if (checkNoteName(name)) {
        this.name = name;
        this.octave = octave;
    } else {
        throw "Invalid note name error";
    }
};

function checkNoteName(name) {
    return name in NOTE_NAMES;
};

