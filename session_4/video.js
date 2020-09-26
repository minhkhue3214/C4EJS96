// let movies = {
//     title:'The dark night rises',
//     year: 2012,
//     rate:8.4
// }
// console.log(movies)
//R.1
// let movies = {
//     title:'The dark night rises',
//     year: 2012,
//     rate:8.4
// }
// console.log(movies.rate)
// console.log(movies.year)
// console.log(movies.title)
 
// let movies = {
//     title:'The dark night rises',
//     year: 2012,
//     rate:8.4
// }
// console.log(movies.rate)
// console.log(movies.year)
// console.log(movies.title)
// console.log(movies['rate']);
// console.log(movies['year']);
// console.log(movies['title']);
// console.log(movies.director)

// the result is : Underfined
//R.2
// let x =prompt('enter your favorite music')
// let movies = {
//     freetime:'Sport',
//     game:'lol',
//     band:'bts',
//     music:x,
    
// }
//  console.log(movies.freetime.toUpperCase())
//  console.log(movies.game.toUpperCase())
//  console.log(movies.band.toUpperCase())
//  console.log(movies.music.toUpperCase())

//R3
// let m =prompt('what do u want to know')
// let movies = {
//     freetime:'Sport',
//     game:'lol',
//     band:'bts',    
// }
// let x =(movies [m])
// if (x == null || x == undefined) {

//     alert('does not exits in our data');

// } else {

//     alert( x);
// }

//Update 1
// let movies = {
//     freetime:'Sport',
//     game:'lol',
//     band:'bts',
//     rate:4.5
//     }
// movies.rate= 8.7
// console.log(movies.rate)
// movies.rate=movies.rate + 0.5
// console.log(movies.rate)

//Update 2
// let w = prompt('what u want to update') 
// let movies = {
//       freetime:'Sport',
//       game:'lol',
//       band:'bts',
//       rate:4.5
//       }
// let x=prompt('what is the update')
//   movies[w]= x
// console.log(movies)

//create
// let m =prompt('what do u want to know')
// let movies = {
//     freetime:'Sport',
//     game:'lol',
//     band:'bts',    
// }
// let x =(movies [m])
// if (x == null || x == undefined) {

//     alert(m+'does not exits in our data we will add new');
//     let n=prompt('what u want add new')
//     movies[m]=n
// } else {
//     alert( x);
// }
//  console.log(movies)

//Array of object.1
// let movies=[ ];
// let movie1 ={
//   title:'dog',
//   year:2000,
//   rate:4.5,
// }

// let movie2 ={
//   title:'hyena',
//   year:2010,
//   rate:8.5,
// }

// let movie3 ={
//   title:'cat',
//   year:2001,
//   rate:5.5,
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)

//Array of object.2
// console.log(movies[0])
//Array of object.3
//console.log((movies[2]).title)

//Array of object.4
// let movies=[ ];
// let movie1 ={
//   title:'dog',
//   year:2000,
//   rate:4.5,
// }

// let movie2 ={
//   title:'hyena',
//   year:2010,
//   rate:8.5,
// }

// let movie3 ={
//   title:'cat',
//   year:2001,
//   rate:5.5,
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)

// for(let i=0;i<movies.length;i++)
//   {
//     console.log(movies[i])
//   }

//Array of object.6
// let movies=[ ];
// let movie1 ={
//   title:'dog',
//   year:2000,
//   rate:4.5,
// }

// let movie2 ={
//   title:'hyena',
//   year:2010,
//   rate:8.5,
// }

// let movie3 ={
//   title:'cat',
//   year:2001,
//   rate:5.5,
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)

// for(let i=0;i<movies.length;i++)
//   {
//     let x=(movies[i])
//     let y= x.rate + 0.7
//     console.log(y)
//   }

//Array of object.5
// let movies=[ ];
// let movie1 ={
//   title:'dog',
//   year:2000,
//   rate:4.5,
// }

// let movie2 ={
//   title:'hyena',
//   year:2010,
//   rate:8.5,
// }

// let movie3 ={
//   title:'cat',
//   year:2001,
//   rate:5.5,
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)

// for(let i=0;i<movies.length;i++)
//   {
//     let x=(movies[i])
    
//     console.log(x.title)
//     console.log('rate '+ x.rate)
//     console.log('year'+ x.year)   
//   }


// O_O_C_A
// movie={title:'AOV',
//        year:2000,
//        rate:10,
//        character :['dog','cat','fish']}
// console.log(movie.title)
// console.log('year: '+movie.year)
// console.log('rate: ' +movie.rate)
// console.log('casts :'+movie.character)

//O_O_C_A
// let x=prompt('add new cast to the movie')
// movie={title:'AOV',
//        year:2000,
//        rate:10,
//        character :['dog','cat','fish']}
// movie.character.push(x)
// console.log(movie.title)
// console.log('year: '+movie.year)
// console.log('rate: ' +movie.rate)
// console.log('casts :'+movie.character)

//OOA and()sai??
// let movies=[ ];
// let movie1={
//   title:'bird',
//   year:2000,
//   rate:8.5,
//   character:['bird1','bird2'],
// }

// let movie2={
//   title:'dog',
//   year:2010,
//   rate:7,
//   character:['dog1','dog2','dog3'],
// }

// let movie3={
//   title:'fish',
//   year:2011,
//   rate:3.5,
//   character:['fish1','fish2','fish3']
// }
 
// movies.push('movie1')
// movies.push('movie2')
// movies.push('movie3')
// console.log(movies)

// for(let i =0;i<movies.length;i++)
// {
//   let x= (movies[i])
//   console.log(x)
//   console.log(x.title)
//   console.log(x.year)
//   console.log(x.rate)
// }

// //OOA
// let movies=[ ];
// let movie1 ={
//   title:'dog',
//   year:2000,
//   rate:4.5,
//   character:['dog1','dog2']
// }

// let movie2 ={
//   title:'hyena',
//   year:2010,
//   rate:8.5,
//   character:['hyena1','hyena2']
// }

// let movie3 ={
//   title:'cat',
//   year:2001,
//   rate:5.5,
//     character:['cat1','cat2']
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)

// for(let i=0;i<movies.length;i++)
//   {
//     let x=(movies[i])
    
//     console.log(x.title)
//     console.log('rate :'+ x.rate)
//     console.log('year :'+ x.year)
//     console.log('casts :'+ x.character)
//   }




//Optiona:1
// Movies = [
//     (movie1 = {
//       popularity: 512.119,
//       vote_count: 460,
//       video: false,
//       poster_path:
//         "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//       id: 475557,
//       adult: false,
//       backdrop_path:
//         "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
//       original_language: "en",
//       original_title: "Joker",
//       genres: [80, 18, 53],
//       title: "Joker",
//       vote_average: 8.8,
//       overview:
//         "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//       release_date: "2019-10-04",
//     }),
//     (movie2 = {
//       popularity: 241.402,
//       vote_count: 598,
//       video: false,
//       poster_path:
//         "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
//       id: 429203,
//       adult: false,
//       backdrop_path:
//         "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
//       original_language: "en",
//       original_title: "The Old Man & the Gun",
//       genres: [35, 80, 18],
//       title: "The Old Man & the Gun",
//       vote_average: 6.3,
//       overview:
//         "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
//       release_date: "2018-09-28",
//     }),
//     {
//       popularity: 233.735,
//       vote_count: 4139,
//       video: false,
//       poster_path:
//         "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
//       id: 429617,
//       adult: false,
//       backdrop_path:
//         "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
//       original_language: "en",
//       original_title: "Spider-Man: Far from Home",
//       genres: [28, 12, 878],
//       title: "Spider-Man: Far from Home",
//       vote_average: 7.6,
//       overview:
//         "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
//       release_date: "2019-07-02",
//     },
//     (movie3 = {
//       popularity: 158.333,
//       vote_count: 323,
//       video: false,
//       poster_path:
//         "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
//       id: 522938,
//       adult: false,
//       backdrop_path:
//         "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
//       original_language: "en",
//       original_title: "Rambo: Last Blood",
//       genres: [28, 53],
//       title: "Rambo: Last Blood",
//       vote_average: 6.1,
//       overview:
//         "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
//       release_date: "2019-09-20",
//     }),
//   ];
//optiona:2

// console.log('Print or log the movie count in there');
// console.log(Movies.length);
// console.log('\nPrint or log out the data of the first movie');
// console.log(Movies[0]);
// console.log('\nPrint or log out the title, vote_average and genres of the first movie');
// console.log(Movies[0].title);
// console.log('vote_average: ' + Movies[0].vote_average);
// console.log('genres: ' + Movies[0].genres.join(' '));
// console.log('\nPrint or log out all the title, vote_average and genres of All movies');
// for (let i = 0; i <Movies.length; i++) {
//   console.log('--------------------');
//   console.log(Movies[i].title);
//   console.log('vote_average: ' +Movies[i].vote_average);
//   console.log('genres: ' +Movies[i].genres.join(' '));
// }

//optiona:4
// console.log('vote_average:');
// for (let x = 0; x < Movies.length; x++) {
//   console.log(`${Movies[x].title}: ${Movies[x].vote_average}`);
// }


// console.log('\nWrite a script user the mininum rate thet want and then print out ALL of the movie above that rate:');
// let askrate = prompt('Which mininum rate do you like?');
// for (let i = 0; i <Movies.length; i++) {
//   if (Movies[i].vote_average >= Number(askrate)) {
//     console.log(Movies[i].title);
//   }
// }


//optiona:3 Tham khao bai ban Dinh Cong
// let ask = prompt('What kind of movie do you like?\n28 - 18 - 12 - 35 - 80 - 53')
// for(let i = 0; i < Movies.length; i++){
//     for(let j = 0; j < Movies[i].genres.length; j++){
//         if(Movies[i].genres[j] == Number(askgenres)){
//             console.log(Movies[i].title);
//         }
//     }
// };
   
