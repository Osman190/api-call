let objCountries;
var container = document.createElement('div');

var ul = document.createElement('ul')
let body = document.querySelector('body');




fetch('https://restcountries.eu/rest/v2/all')
  .then(response => {
    return response.json();
  })

  .then(countries => {
    countries.forEach(country => {
      let li = document.createElement('li');
      li.innerHTML = country.name;
      ul.appendChild(li);
      container.innerHTML += `<li> *Country: ${country.name}</li>`;
      // console.log(country.name);
    });
    container.appendChild(ul);
    body.appendChild(container);
  })
