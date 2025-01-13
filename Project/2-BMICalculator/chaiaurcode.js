const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value);
//This usecase will give you empty values


form.addEventListener('submit', function(e){
    e.preventDefault();
// Jo koi bhi from hum submit karte hai wo GET ya POST request ki form me jata hai
//To hume use yaha rokna hoga
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){

        results.innerHTML = `Please give a valid height : ${height}`;
    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;

    }  
});
