const scriptURL = 'https://script.google.com/macros/s/AKfycbxYGdu84qxMJgzyMWiybul_nDyBIb_1Nt1f0VLvUTpEAFn8RmRcr-NUe4bK12prtIuM/exec'
  const form = document.forms['submit-to-google-sheet'];

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Messege Submit Succesfully";
        setTimeout(function() {
          msg.innerHTML = "";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })