import ImageResizer from 'react-native-image-resizer';
function checkSizeImageChat(element) {
  if (!element?.size) {
    return false;
  }
  return element.size / 1024 / 1024 <= 8;
}

const createResizedImage = image => {
  return new Promise((resole  ,  reject)=> {
    ImageResizer.createResizedImage(image.path, 1000, 1000, 'JPEG', 100, 0)
    .then(response => {
      if (checkSizeImageChat(response)) {
        convert = {
          ...response,
          mime: image?.mime,
          type: image?.mime,
          uri:
            Platform.OS === 'ios' ? '/private' + response.path : response.uri,
          path:
            Platform.OS === 'ios' ? '/private' + response.path : response.uri,
        };
        resole(convert)
      }
    })
    .catch(err => {
      console.log(err);
      reject({})
    });
  });
};
export default createResizedImage;
