let someUrl = `https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0dwsntmSQw6BfB5NVpXI0AM7vmfAX7tCpovn73uDM2sa_a7GbMUgEafY0`;
let mySecondEverPromise = fetch(someUrl);

// // using .then() function
function rejectCallback(reject) {
    // if load data successful, this callback will not invoke at all
    console.log(`something went wrong!`);
}

function resolveCallback(resolve) {
    console.log(`Connected`);
    let jsonPromise = resolve.json();
    console.log(jsonPromise);
}

mySecondEverPromise.then(resolveCallback, rejectCallback);
console.log(`Conneting...`);

// using async function and await
// async function loadDataAsync() {
//     console.log(`Loading...`);
//     let rawData = await mySecondEverPromise;
//     let jsonData = rawData.json();
//     console.log(`Loaded`);
//     console.log(jsonData);
// }
// loadDataAsync();