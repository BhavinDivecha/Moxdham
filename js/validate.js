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
  
        let action = thisForm.getAttribute('action');
          let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
          

          thisForm.querySelector('.form-messege').innerHTML = "Messaged Sending...";
        
        if( ! action ) {
          displayError(thisForm, 'The form action property is not set!')
          return;
        }
          thisForm.querySelector('.form-messege').classList.remove('d-block');
  
        let formData = new FormData( thisForm );
  
        if ( recaptcha ) {
          if(typeof grecaptcha !== "undefined" ) {
            grecaptcha.ready(function() {
              try {
                grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                })
              } catch(error) {
              }
            });
          } else {
          }
        } else {
          php_email_form_submit(thisForm, action, formData);
        }
      });
    });
  
    function php_email_form_submit(thisForm, action, formData) {

        thisForm.querySelector('.form-messege').classList.remove('error');
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        if( response.ok ) {
          
          return response.text()
        } else {
          
          throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
        }
      })
      .then(data => {
          if (data.includes("success")) {
            
              thisForm.querySelector('.form-messege').classList.remove('error');
              thisForm.querySelector('.form-messege').classList.add('success');
              thisForm.querySelector('.form-messege').classList.add('d-block');
              thisForm.querySelector('.form-messege').innerHTML = "Messaged Send...!";
              
              thisForm.reset(); 
              submitButton.style.display = 'block';
        } else {
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
        }
      })
      .catch((error) => {
      });
    }
  
    function displayError(thisForm, error) {
      thisForm.querySelector('.form-messege').innerHTML = "Send Failed...";
        thisForm.querySelector('.form-messege').classList.add('d-block');
        submitButton.style.display = 'block';
    }
  
  })();