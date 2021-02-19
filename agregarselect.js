var city = document.getElementsByName('city')[0]
city.style.display = "none";

var x = document.createElement("SELECT");
x.setAttribute("id", "mySelect");
x.classList.add("form-control");
x.setAttribute( "onchange", "cambiarCiudad()" );

var option = document.createElement("option");
option.text = "NombreDeCiudad";
option.value = "NombreDeCiudad";
x.add(option);


city.after(x)

function cambiarCiudad(){
  city.value = document.getElementById('mySelect').value
}
