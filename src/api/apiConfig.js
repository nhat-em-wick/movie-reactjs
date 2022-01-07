const apiConfig = {
  baseUrl : "https://api.themoviedb.org/3/",
  apiKey: 'b95ca8f233e02d6aae60ff3df50d4e89',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig