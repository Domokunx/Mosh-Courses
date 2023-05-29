const getCroppedImage = (imageURL: string) =>  {
    const index = imageURL.indexOf('media/') + 'media/'.length;
    return imageURL.slice(0, index) + 'crop/600/400/' + imageURL.slice(index);
}

export default getCroppedImage;