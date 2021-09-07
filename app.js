// select all variables 

const inputForm = document.getElementById('message-form');

let message = document.getElementById('message');

// const submit = document.getElementById('submit');

const output = document.querySelector('.message-content');

const feedback = document.querySelector('.feedback');
const editvalue = document.getElementById('editvalue');

const clearAllmessage = document.getElementById('clearAllMessage');


inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if ( message.value ==='') {
        
        feedbackS('active','please enter a value to pass'); 
        setTIMeout();
    }
    else{
    //   show the output and clear input FormData
    output.textContent = message.value;
    feedbackS('active','value updated');

    setTIMeout();

    message.value ='';




    }
    

});




function feedbackS (fc,text) {
    feedback.classList.add(fc);
    feedback.textContent =text;
}
function feedbackRE (f) {
    feedback.classList.remove(f);
}


// edit value 




function setTIMeout () {
    setTimeout(() => {
        feedbackRE('active'); 
    }, 2000);
}

editvalue.addEventListener('click', () => {
    if ( output.innerText === ''){
        feedbackS('active','No value We Found to Edit');
        setTIMeout();
    }
    else{
        message.value = output.innerText;
    
        feedbackS('active','Edit The Value');
        setTIMeout();

    }
});


clearAllmessage.addEventListener('click', () => {
    message.value = '';
    output.innerHTML = '';

    feedbackS('active', 'Clear all message');
    setTIMeout();
});