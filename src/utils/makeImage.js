/**
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
 export default (src) => {
  const image = new Image()
  return new Promise((resolve, reject) => {
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    image.src = src
  })
}
