const apiKey = 'jcZGeGMCLey8jUuI08tKEL3XPTb2RGDd4HxFsxc8tmSs7FBvgDKNFBWN';

async function getImg(apiKey) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=people`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': apiKey
        }
    })
    const json = await response.json();
    return json;
}

getImg().then(response => console.log(response))