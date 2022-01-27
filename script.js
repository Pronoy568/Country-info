fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => display(data))

function display(data) {
    for(let i = 0; i < data.length; i++) {

        const country = document.getElementById('country');
        const div = document.createElement('div');
        div.innerHTML = `<div style="background-color: #90e7e5;
                              margin:5px;width:220px;height:330px;padding:5px;
                              border:1px solid gray;border-radius:10px">
        <img style='width:200px;height:200px;margin:10px' src="${data[i].flags.svg}"/>
        <h2>${data[i].name.common}</h2>
        <h3>${data[i].capital}</h3>
        </div>`
        country.appendChild(div);

        div.addEventListener('click', function(){
            fetch(`https://restcountries.com/v3.1/name/${data[i].name.common}`)
            .then(response => response.json())
            .then(data => details(data[0]))

            country.style.display = 'none';
        })
 
        function details(data) {
            
            const details = document.getElementById('details');
            const div = document.createElement('div');
            div.innerHTML = `<div style="background-color: #d7d7d7;
                                  margin-left:50px;width:500px;height:700px;padding:5px;
                                  border:1px solid gray;border-radius:5px;
                                  text-align:center;">
                <img style='width:250px;height:250px;margin:10px' src="${data.flags.svg}"/>
                <h2>${data.name.common}</h2>
                <h3>Continents : ${data.continents}</h3>
                <h3>Population : ${data.population}</h3>
                <h3>Timezones : ${data.timezones}</h3>
                <img style='width:200px;height:200px;margin:10px' src="${data.coatOfArms.png}"/>
            </div>`
            details.appendChild(div);

        }
    }
}