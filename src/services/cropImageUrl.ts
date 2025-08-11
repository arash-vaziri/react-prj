import NoImage from '../assets/no-image-placeholder.webp';


const cropImageUrl = (url : string) : string => {

    if (!url) return NoImage;

    const key = 'media/';
    const index = url.indexOf(key) + key.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);

}

export default cropImageUrl;