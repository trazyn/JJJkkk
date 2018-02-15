
import { observable, action } from 'mobx';

class Bestreviews {
    @observable loading = true;
    @observable list = [];

    @action getList() {
        self.loading = true;

        self.list = [
            {
                cover: 'https://i.pinimg.com/564x/3a/ac/12/3aac12d19fc8765d7a08c0f5e96f9bef.jpg',
                title: 'Fifty Shades Freed',
                review: 'Nothing was even okay in this movie except the romantic scenes which drew my attention in this one. A complete wasted trilogy and a movie to skip this Valentines Day..',
                date: '2017-01-10',
                rate: 8.6,

                trailler: {
                    cover: 'https://img1.doubanio.com/img/trailer/medium/2403488067.jpg',
                    video: 'http://vt1.doubanio.com/201802091637/d02ee62b11e90dc2dfadc8a733ad5970/view/movie/M/302080456.mp4',
                },

                previews: [
                    'https://img1.doubanio.com/view/photo/sqxs/public/p2423714748.webp',
                    'https://img3.doubanio.com/view/photo/sqxs/public/p2455525075.webp',
                    'https://img3.doubanio.com/view/photo/sqxs/public/p2423711785.webp',
                    'https://img3.doubanio.com/view/photo/sqxs/public/p2509551261.webp',
                    'https://img3.doubanio.com/view/photo/sqxs/public/p2455525163.webp',
                    'https://img3.doubanio.com/view/photo/sqxs/public/p2454322160.webp',
                ],

                cast: [
                    {
                        name: 'Eloise Mumford',
                        image: 'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33277.webp',
                    },
                    {
                        name: 'Dakota Johnson',
                        image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416311200.32.webp',
                    },
                    {
                        name: 'Jamie Dornan',
                        image: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p25695.webp',
                    },
                ],

                tags: [
                    {
                        name: 'Drama',
                        id: 'd',
                    },
                    {
                        name: 'Romance',
                        id: 'r',
                    },
                    {
                        name: 'Thriller',
                        id: 't',
                    },
                ],

                reviews: [
                    {
                        content: 'It\'s unfortunate that those living within the BDSM lifestyle have had to explain the misrepresentation of their lifestyle. Even more so during the emergence of the Fifty Shades Trilogy that misrepresents why someone would be interested in the world. Alas, it became a major phenomenon, a profitable film series and now we come to the conclusion of Fifty Shades Freed and all of my concerns of this franchise come to light.',
                        username: 'Dragomir Vasiliu',
                        date: '2018-02-01',
                    },
                    {
                        content: 'Nothing was even okay in this movie except the romantic scenes which drew my attention in this one. A complete wasted trilogy and a movie to skip this Valentines Day..',
                        username: 'pranayjalvi',
                        date: '2018-02-03',
                    },
                    {
                        content: `I've seen it yesterday , and ...come on. 2 hours for a 6/10 *. Weak . I;m very disapointed about this movie. But you can give it a try, if you're a fan. The soundtrack is ok, the acting somehow fine, but the producer didn't his job like I was expected. The caracthers was cute,funny sometimes and lookng good each other. But... the story is not what I expected.`,
                        username: 'garethvk',
                        date: '2018-01-11',
                    },
                ],
            },
        ];

        self.loading = false;
    }
}

const self = new Bestreviews();
export default self;
