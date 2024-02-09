const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "0": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "2": () => handleMouseDown(keys[2]),
    "3": () => handleMouseDown(keys[3]),
    "4": () => handleMouseDown(keys[4]),
    "5": () => handleMouseDown(keys[5]),
    "6": () => handleMouseDown(keys[6]),
    "7": () => handleMouseDown(keys[7]),
    "8": () => handleMouseDown(keys[8]),
    "9": () => handleMouseDown(keys[9]),
    "q": () => handleMouseDown(keys[10]),
    "w": () => handleMouseDown(keys[11]),
    "e": () => handleMouseDown(keys[12]),
    "r": () => handleMouseDown(keys[13]),
    "t": () => handleMouseDown(keys[14]),
    "a": () => handleMouseDown(keys[15]),
    "s": () => handleMouseDown(keys[16]),
    "d": () => handleMouseDown(keys[17]),
    "f": () => handleMouseDown(keys[18]),
    "g": () => handleMouseDown(keys[19]),
    "z": () => handleMouseDown(keys[20]),
    "x": () => handleMouseDown(keys[21]),
    "c": () => handleMouseDown(keys[22]),
    "v": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "0": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "2": () => handleMouseUp(keys[2]),
    "3": () => handleMouseUp(keys[3]),
    "4": () => handleMouseUp(keys[4]),
    "5": () => handleMouseUp(keys[5]),
    "6": () => handleMouseUp(keys[6]),
    "7": () => handleMouseUp(keys[7]),
    "8": () => handleMouseUp(keys[8]),
    "9": () => handleMouseUp(keys[9]),
    "q": () => handleMouseUp(keys[10]),
    "w": () => handleMouseUp(keys[11]),
    "e": () => handleMouseUp(keys[12]),
    "r": () => handleMouseUp(keys[13]),
    "t": () => handleMouseUp(keys[14]),
    "a": () => handleMouseUp(keys[15]),
    "s": () => handleMouseUp(keys[16]),
    "d": () => handleMouseUp(keys[17]),
    "f": () => handleMouseUp(keys[18]),
    "g": () => handleMouseUp(keys[19]),
    "z": () => handleMouseUp(keys[20]),
    "x": () => handleMouseUp(keys[21]),
    "c": () => handleMouseUp(keys[22]),
    "v": () => handleMouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});