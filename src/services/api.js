export const fetchImages = async (request = '', page = 1) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${request}&page=${page}&key=36188192-df3cf63ec6f6149d9f5656270&image_type=photo&orientation=horizontal&per_page=12`,
    {
      method: 'GET',
    }
  );

  return await response.json();
};
