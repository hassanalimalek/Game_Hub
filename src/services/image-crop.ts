function getCroppedImage(url: string) {
  if (!url) return null;
  const mediaIndex = url.indexOf('media/') + 'media/'.length;
  const updatedUrl =
    url.slice(0, mediaIndex) + 'crop/600/400/' + url.slice(mediaIndex);
  return updatedUrl;
}

export default getCroppedImage;
