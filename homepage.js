let cheerio = require('cheerio');
let request = require('request');


//add specific homepage e.g ?home=1
//add file for popular doujins
request('https://nhentai.net',(error, response, html) => {
  console.error('error:', error); 
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
  // Print the response status code if a response was received
  // console.log('body:', html);
  // Print the HTML for homepage.
  const $ = cheerio.load(html);
  let homePage = [];
 $('.gallery a').each((i, elem)=>{
  //  console.log($(elem).attr('href'))
    //   links
    let link = `https://nhentai.net${$(elem).attr('href')}`;
    //https://nhentai.net check later


    //initiates the object too
 homePage[i]= {'Link':link, 'Title': '','Thumbnail' : '','ThumbnailFull':'','BookID':''}
  });

 $('.gallery div').each((i, elem)=>{
    //   titles
    title = $(elem).text();

homePage[i].Title = title.split('\t').join(' ').split('\n').join(' ');
// test .split('\t').join('').split('\n').join(' '); and learn RegEx ffs
  });
  $('.lazyload').each((i, elem)=>{
    //thumbnails
    thumbnail = $(elem).attr('data-src');
homePage[i].Thumbnail = thumbnail;
  });
  $('.gallery a').each((i, elem)=>{
   homePage[i].BookID = `${$(elem).attr('href').split('/')[2]}`;
   homePage[i].ThumbnailFull = `${homePage[i].Link}1`;
  });
  console.log(homePage)
  return [error, response.statusCode, homePage];
});




