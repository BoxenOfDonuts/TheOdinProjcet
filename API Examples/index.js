const img = document.querySelector('img');
const imgTitle = document.querySelector('p');
const apiKey = ""
const searchURL = 'https://api.giphy.com/v1/gifs/search';
const button = document.querySelector('button');
document.getElementsByClassName('search')[0].addEventListener('click', handleSearch );
document.querySelector('input').addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        handleSearch(e)
    }
})


function handleSearch(e) {
    const search = document.querySelector('input').value;
    let url = '';
    const params = new URLSearchParams({
        api_key: apiKey,
        q: search,
        limit: 25,
    })

    url = searchURL + '?' + params;

    fetchUrl(url);
}

async function fetchUrl(url) {
    try {
        const response = await fetch(url, {mode: "cors"});

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status}`)
        }

        const { data } = await response.json();
        if (data.length === 0) {
            throw new Error('No Images!')
        } else {
            const rand = Math.floor(Math.random() * data.length -1) 
            url = data[rand].images.original.url;
            console.log(data[rand])
            imgTitle.textContent = data[rand].title
        }
        img.src = url;
    } catch(error) {
        console.log("Error: " + error)
        img.src = "teapot.jpg"
    }
}

button.addEventListener('click', (e) => {
    let url = '';
    const params = new URLSearchParams({
        api_key: apiKey,
        q: 'cats',
        limit: 25,
    })

    url = searchURL + '?' + params;

    fetchUrl(url).catch(error => {
        console.log(".catch: " + error);
        img.src = "teapot.jpg";
    });
})

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}

function f() {
    wait()
    .then(val => {
        console.log(val)
    })
}

f()


// faster!!!

const getDetails = async () => {
    try {
        const j = fetch('https://api.github.com/users/BoxenOfDonuts');
        const h = fetch('https://api.github.com/users/wesbos');

        const [jj, hh] = await Promise.all([
            j,
            h,
        ])

        // destructure list, then the object
        // const [{login}, {login: wes}] = await Promise.all([
        //     jj.json(),
        //     hh.json(),
        // ])
        // console.log(login, wes)

        const [me, you] = await Promise.all([
            jj.json(),
            hh.json(),
        ])

        console.log(me.login, you.login)


    } catch(error) {
        console.log(error)
    }
}

getDetails();

function timeoutPromise(delay) {
	return new Promise( function(resolve,reject){
		setTimeout( function(){
			resolve( new Promise((resolve, reject) => {setTimeout( function() {resolve('poop')}, 1000)}));
		}, delay );
	} );
}

// const testyTest = async () => {
//     try {
//         // const a =  timeoutPromise(3000)
//         // const b =  timeoutPromise(3000)
        
//         // const c = await Promise.all([a,b])
//         // c.forEach(element => {
//         //     console.log(element)
//         // });


//         const e = fetch('https://api.github.com/users/BoxenOfDonuts');
//         const f = fetch('https://api.github.com/users/wesbos');

//         const values = await Promise.all([
//             e,
//             f,
//         ])
//         console.log(values)
        
        
//     } catch(e) {
//         console.log(e)
//     }
// }

// testyTest();

// // https://stackoverflow.com/questions/38427761/promise-all-with-nested-promise-all


// /// VERY BAD, immediately returns!!!
// const latePromise = async (delay) => {
//     const x =  await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve( "yay!" );
//         }, delay)
//     })

//     return x
// }

// /// VERY BAD, immediately returns!!!
// const test2 = () => {
//     const a = latePromise(5000);
//     console.log('bbb');
//     console.log(a)
// };

// test2();