const apiKey = 'jcZGeGMCLey8jUuI08tKEL3XPTb2RGDd4HxFsxc8tmSs7FBvgDKNFBWN';
//apikey

const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');

async function getImg() {
    let url = 'https://api.pexels.com/v1/search?query=' + searchEl.value
    const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': apiKey

            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            getPhotos(data.photos)
            console.log(data)
        }).catch((err) => {
            console.log('Error Occured At:' + err.message);
        })
}

function getPhotos(photos) {
    photos.map(photo => {
        const openEl = document.querySelector('.open');
        const img = document.createElement('img');
        img.src = photo.src.original
        openEl.appendChild(img)
    })
}


//event handler
formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.preventDefault();


        getImg()
    })
    //console.log(searchImage)