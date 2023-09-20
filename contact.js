document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Sua mensagem foi enviada com sucesso!";
        form.reset();
      } else {
        response.json().then(data => {
          if (data && data.errors) {
            status.innerHTML = data.errors.map(error => error.message).join(", ");
          } else {
            status.innerHTML = "Não foi possível enviar a sua solicitação.";
          }
        });
      }
    }).catch(error => {
      status.innerHTML = "Não foi possível enviar a sua solicitação.";
    });
  }

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  console.log("oi");
});
