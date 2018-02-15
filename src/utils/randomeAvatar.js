
const avatars = [
    'https://i.imgur.com/mxwJGIO.png',
    'https://i.imgur.com/DlSQQkz.png',
    'https://i.imgur.com/zklvc5p.png',
    'https://i.imgur.com/FsHYtvi.png',
    'https://i.imgur.com/F7ycLgC.png',
    'https://i.imgur.com/5vJHWi7.png',
];

export default () => {
    var index = Math.floor(Math.random() * avatars.length);

    return avatars[index];
};
