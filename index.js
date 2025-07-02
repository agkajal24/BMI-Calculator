const form = document.querySelector('form');
form.addEventListener('submit', function(val){
    val.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML=`please give valid height ${height}`; 
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML=`please give valid weight ${weight}`; 
    }
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6)
        {
            result.innerHTML=`<span>Under Weight = ${bmi}</span>`;
        }
        else if(bmi>18.6 && bmi<24.9)
        {
            result.innerHTML=`<span>Normal Range = ${bmi}</span>`;
        }
        else{
            result.innerHTML=`<span>Over Weight = ${bmi}</span>`;
        }
    }
});