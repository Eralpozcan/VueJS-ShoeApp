const getImageUrl = (image) => {
  const imgUrl = new URL(image, import.meta.url).href
  return imgUrl
}

export {
  getImageUrl
}