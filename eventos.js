function validarFormulario() {
  let x = document.forms["formulario"]["nombre"].value && 
  document.forms["formulario"]["apellido"].value;
  if (x == "") {
    alert("debe poner su nombre y apellido");
    return false;
  } 
  else return (validarMail());
}

function validarMail() {
  let x = document.forms["formulario"]["mail"].value;
  if (x == ""){
    alert("debe poner su direccion de correo");
    return false;
  }
  else return (confirmacionEnvioDatos());
}
function confirmacionEnvioDatos() {
  if (confirm("se enviaran sus datos")) {
    alert ("sus datos fueron enviados!");
  }
}