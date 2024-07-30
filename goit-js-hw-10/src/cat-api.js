import axios from 'axios';

export const fetchBreeds = apiKey => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');

  loader.style.display = 'block';
  breedSelect.style.display = 'none';
  error.style.display = 'none';

  return new Promise((resolve, reject) => {
    axios
      .get('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'x-api-key': apiKey,
        },
      })
      .then(response => {
        const breeds = response.data;
        breeds.forEach(breed => {
          const option = document.createElement('option');
          option.value = breed.id;
          option.text = breed.name;
          breedSelect.add(option);
        });
        loader.style.display = 'none';
        breedSelect.style.display = 'block';
        resolve(breeds);
      })
      .catch(err => {
        loader.style.display = 'none';
        error.style.display = 'block';
        reject(err);
      });
  });
};

export const fetchCatByBreed = (apiKey, breedId) => {
  const catInfo = document.querySelector('.cat-info');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');

  loader.style.display = 'block';
  catInfo.style.display = 'none';
  error.style.display = 'none';

  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
        headers: {
          'x-api-key': apiKey,
        },
      })
      .then(response => {
        const catData = response.data[0];
        const breedDetails = catData.breeds[0];

        const catImage = document.createElement('img');
        catImage.className = 'cat-image';
        catImage.alt = 'Cat Image';
        catImage.src = catData.url;

        catInfo.innerHTML = '';
        catInfo.appendChild(catImage);

        const catNameElement = document.createElement('p');
        catNameElement.className = 'cat-name';
        catNameElement.innerText = breedDetails.name;

        const catDescriptionElement = document.createElement('p');
        catDescriptionElement.className = 'cat-description';
        catDescriptionElement.innerText = breedDetails.description;

        const catTemperamentElement = document.createElement('p');
        catTemperamentElement.className = 'cat-temperament';
        catTemperamentElement.innerText = breedDetails.temperament;

        catInfo.appendChild(catNameElement);
        catInfo.appendChild(catDescriptionElement);
        catInfo.appendChild(catTemperamentElement);

        loader.style.display = 'none';
        catInfo.style.display = 'block';
        resolve(catData);
      })
      .catch(err => {
        loader.style.display = 'none';
        error.style.display = 'block';
        reject(err);
      });
  });
};
