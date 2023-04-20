export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=V7tQtILizStMNpJ2N29rutdPskshvCMT&q=${ category }&limit=5`
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
}