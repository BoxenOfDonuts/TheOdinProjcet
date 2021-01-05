const img = document.querySelector('img');
const apiKey = ""
const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`;
const button = document.querySelector('button');
document.getElementsByClassName('search')[0].addEventListener('click', handleSearch );
document.querySelector('input').addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        handleSearch(e)
    }
})


function handleSearch(e) {
    const search = document.querySelector('input').value;
    const searchURL = 'https://api.giphy.com/v1/gifs/search';
    let url = '';
    const params = new URLSearchParams({
        api_key: apiKey,
        q: search,
        limit: 25,
    })

    url = searchURL + '?' + params;

    fetchUrl(url);
}

function fetchUrl(url) {
    fetch(url, {mode: "cors"})
    .then((r) => {
        if (!r.ok || !r.status === 200) {
            throw new Error('Network Response Not Okay!!')
        }
        return r.json()
    })
    .then((r) => {
        console.log((r.data))
        let url = ''
        if (Array.isArray(r.data) && Array.from(r.data).length === 0) {
            throw new Error('No Images!')
        } else if (Array.isArray(r.data)) {
            const rand = Math.floor(Math.random() * (Array.from(r.data).length -1)) 
            url = r.data[rand].images.original.url;
        } else {
            url = r.data.images.original.url
        }
        img.src = url;
        
    })
    .catch(error => {
        console.log(error)
        img.src = "teapot.jpg"
    })
}

button.addEventListener('click', (e) => {
    fetchUrl(URL)
})