let btn = document.querySelector("button");

btn.addEventListener("click", active);

function active() {
  const isEmpty = str => !str.trim().length;
  let success = 0;
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let country = document.getElementById('country');
  let subject = document.getElementById('subject');

  if (isEmpty(name.value)) {
    name.style.border = "2px solid #FF0000";
  } else {
    success++;
    name.style.border = "2px solid #008000";
  }

  if (isEmpty(email.value)) {
    email.style.border = "2px solid #FF0000";
  } else {
    success++;
    email.style.border = "2px solid #008000";
  }

  if (isEmpty(country.value)) {

    country.style.border = "2px solid #FF0000";
  } else {
    success++;
    country.style.border = "2px solid #008000";
  }

  if (isEmpty(subject.value)) {
    subject.style.border = "2px solid #FF0000";
  } else {
    success++;
    subject.style.border = "2px solid #008000";
  }

  if (success == 4) {
    btn.classList.toggle("is_active");
    btn.removeEventListener("click", active);
    setTimeout(() => {
      name.disabled = true;
      email.disabled = true;
      country.disabled = true;
      subject.disabled = true;
    }, 300);
  }



  /*setTimeout(() => {
      
      if(!(isEmpty(name.value))){
          name.placeholder = name.value;
          name.style.border = "1px solid #FF0000"
      }
      name.value = '';

      if(!(isEmpty(email.value))){
          email.placeholder = email.value;
      }
      email.value = '';
      
      if(!(isEmpty(country.value))){
          country.placeholder = country.value;
      }
      country.value = '';
     
      if(!(isEmpty(subject.value))){
          subject.placeholder = subject.value;
      }
      subject.value = '';
      

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('country').value = '';
      document.getElementById('subject').value = '';
      
  }, 350);*/
}