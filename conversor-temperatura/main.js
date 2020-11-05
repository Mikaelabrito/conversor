//conversor Celsius

document.getElementById('temperatura-entrada').addEventListener('input', function(e){
    //carregando o valor inserido c
    
        let temperatura_entrada = parseFloat(e.target.value);
        let botaoKelvin = document.getElementById('verK');
        let saidaKelvin = document.getElementById('saida-kelvin');
        let botaoFahrenheit = document.getElementById('verF');
        let saidaFahrenheit = document.getElementById('saida-fahrenheit');
        let botaoRanquine = document.getElementById('verR');
        let saidaRanquine = document.getElementById('saida-ranquine');

        if (temperatura_entrada){
            document.getElementById('saida').style.display = "inline";

        botaoKelvin.addEventListener('click', ()=> { 
            saidaKelvin.innerHTML = (temperatura_entrada + 273.15).toFixed(2) + " K";
        })
        botaoFahrenheit.addEventListener('click', ()=> { 
            saidaFahrenheit.innerHTML = (((temperatura_entrada * 1.800) + 32)).toFixed(2) + " °F";
        })
        botaoRanquine.addEventListener('click', ()=> { 
            saidaRanquine.innerHTML = ((temperatura_entrada + 273.15) * (9/5)).toFixed(2) + " °R";
        })
        // temperatura em kelvin
        //document.getElementById('saida-kelvin').innerHTML = (temperatura_entrada + 273.15).toFixed(2) + " K";
        //temperatura em fahrenheit
        //document.getElementById('saida-fahrenheit').innerHTML = (((temperatura_entrada * 1.800) + 32)).toFixed(2) + " °F";
        //temperatura em ranquine
        //document.getElementById('saida-rankine').innerHTML = ((temperatura_entrada + 273.15) * (9/5)).toFixed(2) + " °R";
        //console.log(`${temperatura_entrada}`);
    } else {
        document.getElementById('saida').style.display = "none";
        saidaKelvin.innerHTML = " "
        saidaFahrenheit.innerHTML = " "
        saidaRanquine.innerHTML = " "
    }
});
