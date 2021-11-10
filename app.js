const btn = document.querySelector("#button");
const inputNumber = document.querySelector("#input");
const clearBtn = document.querySelector("#clear-btn");
const jokesOutput = document.querySelector("#jokes-output");
const form = document.querySelector("#for-submit");





form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const xhr = new XMLHttpRequest()
    const input = inputNumber.value;
    xhr.open("GET",`https://api.icndb.com/jokes/random/${input}`,"true")
    xhr.onload = function(){
        if(input <= 0){
            alert("Define proper number of JOKeS!");
            return;
        } else {
        if(this.status == 200){
        const data = JSON.parse(this.responseText);
        let output = '';
        
        if(data.type === 'success'){
            let joke = data.value;

            joke.forEach(function(singleJoke){
            output +=`<li>${singleJoke.joke}</li>`;
            // console.log(singleJoke);
            
            }) 
        }else {
                output = '<li>There are some error</li>'
            }
            
            jokesOutput.innerHTML = output;
    }
}
}
    
    xhr.onerror = function(event){
        console.error('error')
    }
    xhr.send();
  

});
form.addEventListener("submit", function(event){
    input.value = "";
});
clearBtn.onclick = function(event){
    if(jokesOutput.innerHTML != ""){
        jokesOutput.innerHTML = "";
        
    } else {
        alert("Already empty!");
    }
};