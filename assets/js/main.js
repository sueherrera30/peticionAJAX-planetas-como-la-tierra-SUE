var contadorPlanetas = 0;

function getJSON(url) {
	return new Promise(function (resolve, reject) {
		/*pedimos data al server atraveés de un nuevo objeto  que se esta guardando en ajax*/
		var ajax = new XMLHttpRequest();
		/*nos indita el tipo de petición que le haremos a la url que le daremos,la va preparando, aun no la manda.*/
		ajax.open("GET", url);
		/*hacemos la petición al servidor*/
		ajax.send();
		/*pregunta cambio de estado del ajax*/
		ajax.onreadystatechange = function () {
			/*inicia condicional para validar promesa*/
			if (ajax.readyState == 4) {
				resolve(JSON.parse(ajax.responseText));
			}
		}
	})
}

/*------------------------------------------------------------*/
/* INFO SOMBRE LINEAS INFERIORES:
getJson("data....)---->llamamos a función que contiene promesa pasando como parametro la url de la funcion anterior */
/*acciones basadas en otras acciones ,obteneos info global (1ra linea), despues info especifica, obtenemos json de un planeta en particular y despues se loguea.*/

/*se define una función que se va a ejecutar hasta que se compruebe , y respete la asincronia */
/*cuando se pasa como parametro mensaje, el resultado de la promesa exitosa se va inicializar y ejecutar gracias a esta función*/
getJSON("data/earth-like-results.json")
	.then(function (mensaje){
		var listaPlanetas = mensaje.results;
		return getJSON(listaPlanetas.forEach(function (planeta) {
			getJSON(planeta)
				.then(function (resultadoPlaneta) {
					/*console.log(resultadoPlaneta);*/
					imprimirPlaneta(resultadoPlaneta);
				})
		}))
	});

/*-----------funcion que imprimira plantilal en html----------*/
/*<div class="row">
			<div class=" col m4 offset-m4">
				<div class="card teal darken-1">
					<div class="card-image">
						<img src="static/img/planeta1.jpg">
					</div>
					<div class="card-content">
					     <h5>kepler lala</h5>
						<p> descubierto en :</p>
						<p> distancia con telescopio:</p>
					</div>
				</div>
			</div>
		</div>*/

function imprimirPlaneta(resultadoPlaneta){
	contadorPlanetas++;
	/*guardamos en variables los datos de los planetas que nos dio nuestra funcion getJson*/
	var nombre = resultadoPlaneta.pl_name;
	var agno = resultadoPlaneta.pl_disc;
	var telescopio = resultadoPlaneta.pl_telescope;
	var contenedorPadre = document.getElementById("contenedorPlanetas");
	
	/*Creamos la estructura de la tarjeta que se muestra en html de forma dinamica */
	var row = document.createElement("div");
	row.className ="row";
	var columna = document.createElement("div");
	columna.className ="col m4 offset-m4";
	row.appendChild(columna);
	var card = document.createElement("div");
	card.className ="card teal darken-1";
	columna.appendChild(card);
	var contenedorImg = document.createElement("div");
	contenedorImg.className ="card-image";
	card.appendChild(contenedorImg);
	var imagen= document.createElement("img");
	imagen.src = "static/img/" + contadorPlanetas + ".jpg";
	
	contenedorImg.appendChild(imagen);
	var contenedorTexto = document.createElement("div");
	contenedorTexto.className ="card-content";
	card.appendChild(contenedorTexto);
	var nombreTxt = document.createElement("h5");
	var agnoTxt = document.createElement("p");
	var telescopioTxt = document.createElement("p");
	nombreTxt.innerText= nombre;
	agnoTxt.innerText= agno;
	telescopioTxt.innerText= telescopio;
	contenedorTexto.appendChild(nombreTxt);
	contenedorTexto.appendChild(agnoTxt);
	contenedorTexto.appendChild(telescopioTxt);
	contenedorPadre.appendChild(row);
}

  
