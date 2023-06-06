import placeholder from '../assets/Screenshot_20230128_113743.png'

const getCroppedImage = (imageURL: string) =>  {
    if (!imageURL) return placeholder;
    const index = imageURL.indexOf('media/') + 'media/'.length;
    
    return imageURL.slice(0, index) + 'crop/600/400/' + imageURL.slice(index);
}

export default getCroppedImage;