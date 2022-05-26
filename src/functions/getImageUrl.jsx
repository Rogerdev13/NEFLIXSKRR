import imgHolder from '../no-image-found.jpg'

export function getImageUrl(path , width){
    return path ?  `https://image.tmdb.org/t/p/w${width}/${path}` : imgHolder;
}