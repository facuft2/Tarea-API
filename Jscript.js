
const getPaises = async () => {
    let url = 'https://restcountries.eu/rest/v2/name/'
    const response = await fetch(url+document.getElementById("pai").value);
    console.log(response);
    const data = await response.json();
    const html = data.map((pais) => (
         
        `
        <p1 class="text-justify d-flex justify-content-center fs-2 ">Nombre: ${pais.name}</p1>
        <h1>,</h1>
         <p2 class="text-justify d-flex justify-content-center fs-2 ">Capital: ${pais.capital}</p2>
         <h1>,</h1>
         <p3 class="text-justify d-flex justify-content-center fs-2 ">Poblacion total: ${pais.population}</p3>
         <h1>,</h1>
         <p4 class="text-justify d-flex justify-content-center fs-2 ">Continente: ${pais.region}</p4>
         
         <div class="position-absolute top-50 start-50 translate-middle">
      
         <img width="500" height="300" src='${pais.flag} ' class="rounded mx-auto d-block" >
         
         </div>
         `
    ));
    const div = document.querySelector(".container");
    console.log(html);
    div.innerHTML = html.join('');
    console.log(html.join(''));
}
