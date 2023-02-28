const apiKey = 'jcZGeGMCLey8jUuI08tKEL3XPTb2RGDd4HxFsxc8tmSs7FBvgDKNFBWN';

async function getImg(apiKey) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=people`, {
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
        })
}
getImg()

function getPhotos(photos) {
    photos.map(photo => {
        const openEl = document.querySelector('.open');
        const img = document.createElement('img')
        img.src = photo.src.large
        openEl.appendChild(img)
    })
}

// getImg().then(response => console.log(response.photos)).catch(err => {
//     console.log('errors occured at:' + err.message)
// })