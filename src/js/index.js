import '../css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
    width: '300px',
    position: 'left-top',
    distance: '60px',
    timeout: 1500
});

import { fetchCountries } from './fetchCountries';
import { buildCountriesMarkup, countryList } from './buildCountriesMarkup'

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
   
   
function onInputChange(event) {
    event.preventDefault();

    if (searchBox.value.trim() === "") {
        countryList.innerHTML = "";
    } else {
         fetchCountries(searchBox.value.trim())
        .then(country => {
         buildCountriesMarkup(country)  
        })
        .catch(() => {
        Notiflix.Notify.failure('Oops, there is no country with that name')
    })
     
    }  
}
   


