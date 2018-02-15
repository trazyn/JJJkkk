
import { observable, action } from 'mobx';
import api from 'utils/api';

class Bestreviews {
    @observable loading = true;
    @observable list = [];

    @action async getList() {
        self.loading = true;

        /**
        self.list = [
            {
                cover: 'https://pics.dmm.co.jp/mono/movie/adult/ipz382/ipz382pl.jpg',
                title: 'Fifty Shades Freed',
                review: 'Nothing was even okay in this movie except the romantic scenes which drew my attention in this one. A complete wasted trilogy and a movie to skip this Valentines Day..',
                date: '2017-01-10',
                rate: 8.6,

                trailler: {
                    cover: 'https://img1.doubanio.com/img/trailer/medium/2403488067.jpg',
                    video: 'http://vt1.doubanio.com/201802091637/d02ee62b11e90dc2dfadc8a733ad5970/view/movie/M/302080456.mp4',
                },

                previews: [
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-1.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-2.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-3.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-4.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-5.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-6.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-7.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-8.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-9.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-10.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-11.jpg',
                    'https://pics.dmm.co.jp/digital/video/jufd00436/jufd00436jp-12.jpg'
                ],

                stars: [
                    {
                        name: 'Eloise Mumford',
                        image: 'https://i.imgur.com/2hcblPS.png',
                    },
                    {
                        name: 'Dakota Johnson',
                        image: 'https:/i.imgur.com/yQOEC1S.png',
                    },
                    {
                        name: 'Jamie Dornan',
                        image: 'https://i.imgur.com/eumtFb1.png',
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
                    {
                        name: 'Drama',
                        id: 'd',
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
         * */

        var response = await api.get('/list/best-reviews');

        self.list = response.data.list;
        self.loading = false;
    }
}

const self = new Bestreviews();
export default self;
