(function () {
    "use strict";
  
    let forms = document.querySelectorAll('.php-email-form');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwj6GTKVhrlAzYa-Cdsww32F992OtH0FvgjyNc0bdVt9LJSvz8QIeIs-8bg3rB2pHv2/exec'
    const form = document.forms['google-sheet']
    const submitButton = document.getElementById('SubmitButton');
    forms.forEach( function(e) {
      e.addEventListener('submit', function(event) {
      
          submitButton.style.display = 'none';
          
        event.preventDefault();
  
        let thisForm = this;
  
          

          thisForm.querySelector('.form-messege').innerHTML = "Messaged Sending...";
  
        let formData = new FormData( thisForm );
  
          php_email_form_submit(thisForm, formData);
        
      });
    });
  
    function php_email_form_submit(thisForm, formData) {

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        if( response.ok ) {
          
          return response.text()
        } else {
          
        }
      })
      .then(data => {
          if (data.includes("success")) {
            
              thisForm.querySelector('.form-messege').classList.add('success');
              thisForm.querySelector('.form-messege').innerHTML = "Messaged Send...!";
              
              thisForm.reset(); 
              submitButton.style.display = 'block';
        } else {
        }
      })
      .catch((error) => {
      });
    }
  
    function displayError(thisForm, error) {
        thisForm.querySelector('.form-messege').classList.add('d-block');
        submitButton.style.display = 'block';
    }
  
  })();