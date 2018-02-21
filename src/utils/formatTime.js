
export default (time) => {
    var hours = Math.floor(time / 60);
    var minutes = time - hours * 60;

    return `${hours} HOUR ${minutes} MINS`;
};
