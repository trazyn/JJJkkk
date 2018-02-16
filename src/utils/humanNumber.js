
export default (string = '') => {
    if (!string) {
        return;
    }

    if (+string < 100000) {
        return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    var count = (+string / 1000).toFixed(1);

    if (count.slice(-1) === '0') {
        return `${count.slice(0, count.length - 2)}K`;
    }

    return `${count}K`;
};
