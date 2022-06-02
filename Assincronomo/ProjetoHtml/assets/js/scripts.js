const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const getCats = async() => {
    try{
        const data = await fetch(BASE_URL);
        const json = await DOMMatrixReadOnly.json();
        return json.webpurl;
    }catch (e){
        console.log (e.message);
    }
};
const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();
};
loadImg();

const btn = document.getElementById('changeCat');
btn.addEventListener('click', loadImg);