function firstWord(str) {
    if (str === '') {
        return '';
    }

    const firstSpaceIndex = str.indexOf(' ');

    if (firstSpaceIndex === -1) {
        return str.trim();
    }

    return str.slice(0, firstSpaceIndex).trim();
}