const ipUrl = 'https://api.ipify.org/?format=json';
const url = 'http://ip-api.com/json/';
const root = document.querySelector('.root');
const searchBtn = document.querySelector('.search');
async function request(uri) {
	const response = await fetch(uri);
    const data = await response.json();
    return data;
}
class Person{
    async render(root) {
        const { ip } = await request(ipUrl);
        const { city, country, regionName, timezone } = await request(`${url}${ip}`);
        const continent = timezone.split('/');
        const cityELement = document.createElement('p');
        const countryELement = document.createElement('p');
        const regionELement = document.createElement('p');
        const continentELement = document.createElement('p');
        cityELement.innerText = `City: ${city}`;
        countryELement.innerText = `Country: ${country}`;
        regionELement.innerText = `Region: ${regionName}`;
        continentELement.innerText = `Continent: ${continent[0]}`;
        root.append(cityELement, countryELement, regionELement, continentELement);
    }
}
const person = new Person();
searchBtn.addEventListener('click', () => {
    person.render(root);
})