const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');


buttons.forEach((eve)=>{
    eve.addEventListener("click",function(button){
        if(button.target.id === 'grey'){
            body.style.backgroundColor = button.target.id;
        }
         if(button.target.id === 'white'){
            body.style.backgroundColor = button.target.id;
        }
         if(button.target.id === 'blue'){
            body.style.backgroundColor = button.target.id;
        }
         if(button.target.id === 'yellow'){
            body.style.backgroundColor = button.target.id;
        }
           if(button.target.id === 'purple'){
            body.style.backgroundColor = button.target.id;
        }

    });
});