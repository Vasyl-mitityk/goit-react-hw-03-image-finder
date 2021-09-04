const apiKey = '19851067-7c860a6e23d51e90a164e5364';

function fetchImages(searchQuery, page) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(({ hits }) => {
      return hits;
    });
}

export default fetchImages;
