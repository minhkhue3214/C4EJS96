//1.1
// function promiseExecutor(resolveCallbackPreDefinedByJS, rejectCallbackPreDefinedByJS) {
//     setTimeout(() => { resolveCallbackPreDefinedByJS(`Promise is da best`); }, 5000);
// }
// the promiseExecutor is called automatically and immediately (by new Promise).
// let myFirstEverPromise = new Promise(promiseExecutor);
//1.2
// async function asyncCall() {
//     console.log(`calling`);
//     let result = await myFirstEverPromise;
//     console.log(result);
// }
// asyncCall();

// 1.3
// function promiseExecutor(resolveCallbackPreDefinedByJS, rejectCallbackPreDefinedByJS) {
//     setTimeout(() => { resolveCallbackPreDefinedByJS(`Promise is da best`); }, 5000);
// }
// let myFirstEverPromise = new Promise(promiseExecutor);
// function resolveCallback(result) {
//     alert(`YAY! ${result}`);
// }
// myFirstEverPromise.then(resolveCallback);