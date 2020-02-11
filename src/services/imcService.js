  /* FUNCOES UTILIZADAS NO PROGRAMA, EXPORTADAS P ONDE SAO USADAS*/
  
  const imcQualitativeEvaluation = (result) => {
        // eslint-disable-next-line
        let text = '';
        if(result.includes(',')){result.replace(',', '.');}
        console.log(result, ' qualitative');
        if(result <= 18.5) {
        return text = "Peso corporal baixo";
        
        }else if(result > 18.5 && result < 25){
        return text = "Peso corporal normal";
        }
        else if(result >= 25 && result < 29.9){
        return text = "Peso corporal excessivo";
        }
        else if(result >= 30 && result < 35){
        return text = "Obesidade moderada";
        }
        else if(result >= 35 && result < 40){
        return text = "Obesidade grave";
        }
        else if(result >= 40 && result < 50){
        return text = "Obesidade mórbida";
        }
        else if(result > 50){
        return text = "Superobesidade";
        }
              
        }
  

  const imcCalculator = (h, w) => {
        let _result;
        console.log(typeof h, typeof w);
        const squareHeight = h * h;
        _result = w / squareHeight;
        _result = _result.toFixed(1);
        console.log(_result, ' result no imcCalculator');
        return _result;
  }


const imcService = {
        imcQualitativeEvaluation: imcQualitativeEvaluation, 
        imcCalculator: imcCalculator,
        
}





export default imcService;