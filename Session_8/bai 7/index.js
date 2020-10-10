async function load() {
    const connection = await fetch('http://quotes.rest/qod.json');
    const data = await connection.json();
    console.log(data)
    // let quote = data.contents.quotes[0].quote;
    // let author = data.contents.quotes[0].author;
    // document.getElementById('quotes').innerHTML = quote;
    // document.getElementById('author').innerHTML = author;
}
load();