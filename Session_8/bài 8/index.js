let btnAdd=document.getElementById('add');
async function getAPI() {
    const conn = await fetch('https://sheetdb.io/api/v1/8137gfrguxsg9');
    const data = await conn.json();
    const wishs =[];
    for( let item of data )
    {
    data.push(item.name)
    }
    update(wishs)
}


