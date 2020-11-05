//conversor Celsius

document.getElementById('temperatura-entrada').addEventListener('input', function(e){
    //carregando o valor inserido c
    
        let temperatura_entrada = parseFloat(e.target.value);
        let botaoKelvin = document.getElementById('verK');

        if (temperatura_entrada){
            document.getElementById('saida').style.display = "inline";

        
        // temperatura em kelvin
        //document.getElementById('saida-kelvin').innerHTML = (temperatura_entrada + 273.15).toFixed(2) + " K";
        //temperatura em fahrenheit
        document.getElementById('saida-fahrenheit').innerHTML = (((temperatura_entrada * 1.800) + 32)).toFixed(2) + " °F";
        //temperatura em ranquine
        document.getElementById('saida-rankine').innerHTML = ((temperatura_entrada + 273.15) * (9/5)).toFixed(2) + " °R";
        //console.log(`${temperatura_entrada}`);
    } else {
        //document.getElementById('saida').style.display = "none";
        
    }
    botaoKelvin.addEventListener('click', ()=> { 
        if (temperatura_entrada){
            document.getElementById('saida-kelvin').innerHTML = " ";
        }else{
            //document.getElementById('saida-kelvin').innerHTML = " ";
            document.getElementById('saida-kelvin').innerHTML = (temperatura_entrada + 273.15).toFixed(2) + " K";
        }
    })
});
