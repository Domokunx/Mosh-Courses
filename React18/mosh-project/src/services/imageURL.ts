const getCroppedImage = (imageURL: string) =>  {
    if (!imageURL) return '';
    const index = imageURL.indexOf('media/') + 'media/'.length;
    
    return imageURL.slice(0, index) + 'crop/600/400/' + imageURL.slice(index);
}

export default getCroppedImage;