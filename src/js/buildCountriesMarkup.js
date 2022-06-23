import Notiflix from 'notiflix';
Notiflix.Notify.init({
width: '300px',
position: 'left-top',
distance: '60px',
timeout: 1500
});

export const countryList = document.querySelector('.country-list')

export const buildCountriesMarkup = country => {
    
    if (country.length > 10) {
       Notiflix.Notify.info("Too many matches found. Please enter a more specific name")
   }
    
    else if (country.length > 1 && country.length < 10) {
        const markup = country.map(({ flags, name }) =>
        `<li class="country-list__item">
        <img 
        src="${flags.svg}" 
        alt="Flag of ${name.official}"
        width="30"
        height="30"
        class="flag-img" >
        <p class="country-list__name">${name.official}</p>
      </li>`).join('');
    
        countryList.innerHTML = markup;
    }
        
    else if (country.length = 1) {
        const { flags, name, capital, languages, population} = country[0];

        const markup = `<div class="country">
        <img src="${flags.svg}" alt="Flag of ${name.official}" width="30" height="30" class="flag-img">
      <p class="country__name">${name.official}</p>
      </div>
      <ul class="country__description">
        <li class="description-item">
          <p class="description-title"> Capital: <span class="description-text">${capital}</span></p>
        </li>
        <li class="description-item">
          <p class="description-title"> Population: <span class="description-text">${population}</span></p>
        </li>
        <li class="description-item">
          <p class="description-title"> Languages: <span class="description-text">${Object.values(languages)}</span></p>
        </li>
      </ul>`
        countryList.innerHTML = markup;
    } 
    
}