# nhentai crap
***lets you retrieve data from nhentai (webscraping using cheerio)***

the getDoujin.js file outputs data in this format:
``` 
{
  BookID: 114431,
  Link: 'https://nhentai.net/114431',
  Title: '(Reitaisai 11) [Sora Osen Nantai Neko (Wazakita)] Kemono no Katachi | Beast Form (CENSORED III) (Touhou Project) [English] {Sharpie Translations}',
  Artists: [ { Artist: 'wazakita', Count: '55' } ],
  Category: [ { Category: 'doujinshi', Count: '228K' } ],
  TotalPages: '17',
  UploadTime: {
    ServerUploadDate: '2014-08-21T09:39:21.019812+00:00',
    MonthDayYearHour: '',
    RegularTime: '5 years, 8 months ago'
  },
  Tags: [
    { Tag: 'group', Count: '72K' },
    { Tag: 'lolicon', Count: '69K' },
    { Tag: 'nakadashi', Count: '42K' },
    { Tag: 'bondage', Count: '34K' },
    { Tag: 'full color', Count: '33K' },
    { Tag: 'incest', Count: '28K' },
    { Tag: 'impregnation', Count: '15K' },
    { Tag: 'tentacles', Count: '13K' },
    { Tag: 'bestiality', Count: '3K' },
    { Tag: 'daughter', Count: '2K' },
    { Tag: 'incomplete', Count: '2K' },
    { Tag: 'wolf girl', Count: '960' },
    { Tag: 'wolf', Count: '93' }
  ],
  Pages: [
    'https://nhentai.net/g/114431/1',
    ...
    'https://nhentai.net/g/114431/17'
  ]
}
```
the homepage.js file outputs data in this format: 
```
[
  {
    Link: 'https://nhentai.net/g/360506/',
    Title: 'Annoying Sister 2',
    Thumbnail: 'https://t.nhentai.net/galleries/1919274/thumb.jpg',
    ThumbnailFull: 'https://nhentai.net/g/360506/1',
    BookID: '360506'
  },
  {
    Link: 'https://nhentai.net/g/360544/',
    Title: '[Mannen Dokodoko Dondodoko (Tottotonero Tarou.)] Mei-chan Fuuzoku Manga | Rosa-chan Brothel Manga (Pokémon Black 2 and White 2) [English] [Gondis]',
    Thumbnail: 'https://t.nhentai.net/galleries/1919555/thumb.jpg',
    ThumbnailFull: 'https://nhentai.net/g/360544/1',
    BookID: '360544'
  },
  ...
  ]
```
