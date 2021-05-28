/*---------------------------------------------------------------
To use this file, assign the DoujinLink variable to a valid link.
Then cd to this file in your terminal and type `node getDoujin.js`
there will be future updates to this repo in general
This file was intended to be integrated in another application
but will hopefully be somethin on its own
and pls dont hate me, idk RegEx either so soz for the crappy split
patterns
----------------------------------------------------------------*/
let DoujinLink = '';


const request= require("request");
const cheerio = require('cheerio');

let Doujin;
request(DoujinLink, (error, response, html)=>{
    console.error('error:', error); 
    // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);
    // Print the response status code if a response was received
    // console.log('body:', html);
    let $ = cheerio.load(html);
    let CategoriesAndCount = [];
    let CategoriesCount = [];
    let Categories = [];
    let Tags=[];
    let Counts = [];
    let TagAndCount = [];
    let TotalPages = '';
    let Artists = [];
    let ArtistCount = [];
    let ArtistAndCount= [];
    let Pages = [];
    let BookID = parseInt($('h3:first').text().split('#')[1]);
    let Link = `https://nhentai.net/${BookID}`
    let Title = $('h1:first').text().split('\t').join(' ').split('\n').join(' ').split(' '+' ').join(' ');
function getArtist(){ 
       $('div.tag-container.field-name:nth-child(4)').each((i,el)=>{
        k = cheerio.load(el);
        k('span.tags a.tag span.name').each((i,elem)=>{
                Artists[i] = k(elem).text();
        })
        

    })
    $ = cheerio.load(html);
    $('div.tag-container.field-name:nth-child(4)').each((i,el)=>{
        k = cheerio.load(el);
        k('span.tags a.tag span.count').each((i,elem)=>{
                ArtistCount[i] = k(elem).text();
        })

    })
    
for (let i = 0; i < Artists.length; i++) {
    ArtistAndCount[i] = {'Artist' : Artists[i],'Count' : ArtistCount[i]};
}
return ArtistAndCount;
}
function getTags(){
    $('div.tag-container.field-name:nth-child(3)').each((i,elem)=>{
    k = cheerio.load(elem)
    k('a.tag span.name').each((n,el)=>{
        Tags[n] = k(el).text();
    })
})
for (let index = 0; index < Tags.length; index++) {
  Tags[index] = Tags[index].split('\n\t\t\t\t\t\t\t\t\t\t').join(' ');
 
}
// console.log(Tags);

$ = cheerio.load(html)
$('div.tag-container.field-name:nth-child(3)').each((i,elem)=>{
k = cheerio.load(elem)
k('a.tag span.count').each((n,el)=>{
   Counts[n] = k(el).text();

})
})
// console.log(Counts);
for (let i = 0; i < Tags.length; i++) {
        TagAndCount[i] = {'Tag': Tags[i], 'Count' :Counts[i]};
}
// console.log(TagAndCount);
return TagAndCount;
}
function getTotalPages(){
    $ = cheerio.load(html);
    $('div.tag-container.field-name:nth-child(8)').each((i, elem)=>{
    k = cheerio.load(elem);
    k('span.tags a.tag span.name').each((i,elem)=>{
    TotalPages = k(elem).text().split('\t').join(' ').split('\n').join(' ')
});
}) 
return TotalPages;
}

function getCategory(){
    $ = cheerio.load(html);
    $('div.tag-container.field-name:nth-child(7)').each((i,el)=>{
        k = cheerio.load(el);
        k('span.tags a.tag span.count').each((i,elem)=>{
                CategoriesCount[i] = k(elem).text();
        })
        k('span.tags a.tag span.name').each((i,elem)=>{
            Categories[i] = k(elem).text();
    })
    for (let i = 0; i < Categories.length; i++) {
        CategoriesAndCount[i] = {'Category' :Categories[i], 'Count': CategoriesCount[i]};
    }
     
    })
    return CategoriesAndCount;
}
function getUploadTime(){
    let $ = cheerio.load(html);
    let uploadTime = {'ServerUploadDate':'', 'MonthDayYearHour':'', 'RegularTime':''};
    $('div.tag-container.field-name:last').each((i, elem)=>{
        k = cheerio.load(elem);
      uploadTime.ServerUploadDate =  k('span.tags time.nobold').attr('datetime');
    //   uploadTime.MonthDayYearHour =  k('span.tags time.nobold').attr('title').split(",");
      uploadTime.RegularTime =  k('span.tags time.nobold').text().split('\n\t\t\t\t\t\t\t\t\t').join(' ');
    });
        return uploadTime;
}
function getPages(){
    for (let index = 0; index < BookID; index++) {
          Pages[index] = `https://nhentai.net/g/${BookID}/${index+1}`  
    }
    return Pages;
}
Doujin = {
    'BookID' : BookID,
    'Link': Link,
    'Artists' : getArtist(),
    'Category' : getCategory(),
    'TotalPages' : getTotalPages(),
    'UploadTime' : getUploadTime(),
    'Tags' : getTags(),
    'Pages' : getPages()
}
console.log(Doujin);
return Doujin;
})
