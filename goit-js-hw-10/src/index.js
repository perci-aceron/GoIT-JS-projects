import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const apiKey =
  'live_6h4QUxeTfC4qVpMQNe7IsH0bXSFGfs90JToDMxK4F4XoDf10nSigsOxUm0TBw1hS';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

breedSelect.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  fetchCatByBreed(apiKey, selectedBreedId);
});

fetchBreeds(apiKey)
  .then(() => {
    error.style.display = 'none';
  })
  .catch(err => {
    console.error('Error fetching breeds:', err);
    Notiflix.Notify.failure('Oops! Something went wrong fetching breeds.');
  })
  .finally(() => {
    loader.style.display = 'none';
  });
