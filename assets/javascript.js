/* Definición de las preguntas */
		function Pregunta (letra,palabra,a,b,c,correcta){
			this.letra = letra;
			this.palabra = palabra;
			this.a = a;
			this.b = b;
			this.c = c;
			this.correcta = correcta;
			this.respuesta = 0;
			this.seleccion = "";
		}
		function cargarPreguntas(){
			preguntas = new Array();

			preguntas.push(new Pregunta("a",							// Letra
									"Es una filosofía de comunicación directa con el cliente y el colaborador: Tú decides el momento, el sitio y el canal.",													// Palabra
									"Apologize",						// Opción 1
									"Any Device, Any Time, Any Where",	// Opción 2
									"Assesment Center",					// Opción 3
									"b"));								// Correcta

			preguntas.push(new Pregunta("b",							// Letra
									"Tormenta/lluvia de ideas. Es una herramienta de creatividad e innovación que consiste en generar muchas ideas en equipo para un solucionar un problema, un nuevo reto/proyecto, etc. con el objetivo de analizarlas más tarde y escoger las mejores.",													// Palabra
									"Brainstorming",					// Opción 1
									"Back Office",						// Opción 2
									"Benchmarking",						// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("c",							// Letra
									"Técnica mediante la cual un vendedor identifica necesidades en el cliente para ofrecerle los productos adecuados. En Cetelem este concepto de venta se aplica para ampliar nuestra capacidad de comercialización en nuestros procesos de venta en contacto con el cliente o desde los procesos del marketing directo.",	// Palabra
									"Check list",						// Opción 1
									"Coaching",							// Opción 2
									"Cross-selling",					// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("d",							// Letra
									"Sistema Analítico de Datos de Negocio. Consta de un sistema para el almacenamiento,  análisis y confección de informes de cantidades masivas de datos y de mecanismos para su consulta y distribución  a las distintas unidades de negocio.",																// Palabra
									"DataWarehouse",					// Opción 1
									"DataAnalytics",					// Opción 2
									"Duplicate",						// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("e",							// Letra
									"Dar poder, dar autoridad a las personas en función de todo su talento y potencial. Delegar y el dejar claro la toma de decisiones son herramientas fundamentales. Es uno de nuestros 10 valores de la CulturaMeta.", // Palabra
									"E Learning",						// Opción 1
									"Engagement",						// Opción 2
									"Empowerment", 						// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("f",							// Letra
									"Seguidores de una persona y/o empresa en una red social.",	// Palabra
									"Followers",						// Opción 1
									"Front Office",						// Opción 2
									"Front Page",						// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("g",							// Letra
									"La diferencia entre 2 indicadores o situaciones, entre la situación actual y la deseada. El resultado puede ser positivo o negativo.",								// Palabra
									"Gap",								// Opción 1
									"Glitter",							// Opción 2
									"Ghost", 							// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("h",							// Letra
									"Precede a la palabra clave, es la manera de agrupar todos los mensajes sobre un tema en redes sociales como Twitter.",												// Palabra
									"Header",							// Opción 1
									"Hashtag",							// Opción 2
									"Handicap",							// Opción 3
									"b"));								// Correcta

			preguntas.push(new Pregunta("i",							// Letra
									"Término que sirve para denominar a todas aquellas Llamadas/contactos entrantes de los clientes.",																// Palabra
									"Inbound",							// Opción 1
									"Input",							// Opción 2
									"Involve", 							// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("k",							// Letra
									"Es una palabra japonesa que significa: Mejora continua. En Cetelem existe un departamento (ACE) que aplicando esta metodología nos ayuda a mejorar en nuestros procesos.",	// Palabra
									"Know",								// Opción 1
									"Kind",								// Opción 2
									"Kaizen", 							// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("l",							// Letra
									"Es la Metodología de formación basada en el \"Aprender haciendo\", aprender a través de la práctica, de vivir la teoría",											// Palabra
									"Learning by doing",	            // Opción 1
									"Leader",   						// Opción 2
									"Lentil", 							// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("m",							// Letra
									"Es una metodología de aprendizaje y desarrollo. Se asigna una persona con experiencia y conocimiento en las áreas a desarrollar que apoya, guía y ayuda a reflexionar a un colaborador", // Palabra
									"Mentee",							// Opción 1
									"Mentoring",						// Opción 2
									"Mermaid", 							// Opción 3
									"b"));								// Correcta

			preguntas.push(new Pregunta("n",							// Letra
									"Práctica de construir y utilizar una red de contactos profesional. Ayuda a compartir información, conocer las mejores prácticas y establecer relaciones de confianza y beneficio mutuo",	// Palabra
									"Next Step",						// Opción 1
									"Networking",						// Opción 2
									"Nephew",							// Opción 3
									"b"));								// Correcta

			preguntas.push(new Pregunta("o",							// Letra
									"Término que sirve para denominar a todas aquellas llamadas salientes generadas desde la empresa hacia los clientes",													// Palabra
									"Outbound",							// Opción 1
									"Oath",								// Opción 2
									"Outsourcing", 						// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("p",							// Letra
									"Es una sesión de trabajo, no una reunión y también puede llamársele Taller. Su objetivo es reunir a un grupo de personas (normalmente no pertenecientes al mismo equipo) para su participación activa sobre un tema concreto y donde se busca producir unas conclusiones / resultado concreto y definido",	// Palabra
									"Replay",							// Opción 1
									"Partner",							// Opción 2
									"Workshop", 						// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("q",							// Letra
									"Dentro de un Plan de Acción son aquellas acciones que tienen un alto impacto positivo y son relativamente fáciles de poner en marcha (fáciles a nivel de esfuerzo económico, de tiempo y/o recursos)",	// Palabra
									"Quick Wins",						// Opción 1
									"Qualitative",						// Opción 2
									"Quite", 							// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("r",							// Letra
									"En Cetelem es la actividad de financiación a clientes a través de prescriptores/comercios que son  pequeñas y medianas empresas",										// Palabra
									"Refund",							// Opción 1
									"Rebound",							// Opción 2
									"Retail", 							// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("s",							// Letra
									"Nombre que se le da a las distintas páginas de una presentación (realizada en Power Point o similar)",																// Palabra
									"Summary",							// Opción 1
									"Slide",							// Opción 2
									"System",							// Opción 3
									"b"));								// Correcta

			preguntas.push(new Pregunta("t",							// Letra
									"Es la metodología donde se identifican los momentos claves en la relación de Cetelem con el cliente y con el colaborador y que dejan huella. El objetivo es identificar las áreas a mejorar y las acciones a poner en marcha.", 																		// Palabra
									"Touch Point",						// Opción 1
									"Tableu de Bord",					// Opción 2
									"Team Leader",						// Opción 3
									"a"));								// Correcta

			preguntas.push(new Pregunta("u",							// Letra
									"Detectar una oportunidad de venta en una llamada de información o cambio de datos", // Palabra
									"Useful",							// Opción 1
									"Rebound",							// Opción 2
									"Unable", 							// Opción 3
									"b"));								// Correcta


			preguntas.push(new Pregunta("w",							// Letra
									"Predicar con el ejemplo.",			// Palabra
									"Wishdom",							// Opción 1
									"Workflow",							// Opción 2
									"Walk the Talk", 					// Opción 3
									"c"));								// Correcta

			preguntas.push(new Pregunta("z",							// Letra
									"Apellido del Director General de Cetelem (esta palabra no ha aparecido en la píldora pero ¡es muy importante que la conozcas!",										// Palabra
									"Zeitoun",							// Opción 1
									"Zip",								// Opción 2
									"Zidane", 							// Opción 3
									"a"));								// Correcta

			getCookiePreguntas();

			puntos = 0;
			respondidas = 0;
			for (var i = 0; i<preguntas.length; i++){
				if (preguntas[i].respuesta > 0){
					puntos += preguntas[i].respuesta;
				}
				respondidas += Math.abs(preguntas[i].respuesta);
			}
		} /* Fin de definición de las preguntas */

		/* Gestión de las Cookies */
		function setCookie(c_name,value,exdays){
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + ((exdays==null) ? -30 : exdays));
			var c_value=escape(value) + "; expires="+exdate.toUTCString();
			document.cookie=c_name + "=" + c_value;
		}
		function getCookie(c_name){
			var c_value = document.cookie;
			var c_start = c_value.indexOf(" " + c_name + "=");
			if (c_start == -1){
				c_start = c_value.indexOf(c_name + "=");
			}
			if (c_start == -1){
				c_value = null;
			}
			else{
				c_start = c_value.indexOf("=", c_start) + 1;
				var c_end = c_value.indexOf(";", c_start);
				if (c_end == -1){
					c_end = c_value.length;
				}
				c_value = unescape(c_value.substring(c_start,c_end));
			}
			return c_value;
		}

		function setCookiePreguntas(exdays){
			var respuesta = "";
			var seleccion = "";
			for (var i = 0; i<preguntas.length; i++){
				respuesta += preguntas[i].respuesta + ",";
				seleccion += preguntas[i].seleccion + ",";
			}
			setCookie("respuestas",respuesta.substring(0,respuesta.length-1),exdays);
			setCookie("seleccion",seleccion.substring(0,seleccion.length-1),exdays);
			setCookie("tiempo",tiempo,exdays);
			setCookie("email",email,exdays);
		}

		function getCookiePreguntas(){
			var cookie4 = getCookie("email");
			if (cookie4 != null){
				email = cookie4;
			}

			var cookie = getCookie("respuestas");
			if (cookie != null){
				var value = cookie.split(",");
				if(value.length == preguntas.length){
					for (i = 0; i<value.length; i++){
						preguntas[i].respuesta = value[i]*1;
					}
				}
			}
			var cookie2 = getCookie("seleccion");
			if (cookie2 != null){
				var value2 = cookie2.split(",");
				if(value2.length == preguntas.length){
					for (i = 0; i<value2.length; i++){
						preguntas[i].seleccion = value2[i];
					}
				}
			}
			var cookie3 = getCookie("tiempo");
			if (cookie3 != null){
				tiempo = cookie3*1;
			}
		}
		/* Fin de gestión de Cookies */

		function mostrarPregunta(letra){
			// Obtener la pregunta seleccionada
			var pregunta = null;
			for (var i = 0; i<preguntas.length; i++){
				if (preguntas[i].letra == letra){
					pregunta = preguntas[i];
				}
			}
			if (pregunta.respuesta == 0){
				var correcta = pregunta.a;
				if (pregunta.correcta == "b"){
					correcta = pregunta.b;
				} else if (pregunta.correcta == "c"){
					correcta = pregunta.c;
				}
				if (correcta.substr(0, 1).toUpperCase() == pregunta.letra.toUpperCase()){
					document.getElementById("letra_pregunta").value = "Comienza con la "+pregunta.letra.toUpperCase();
				}else{
					document.getElementById("letra_pregunta").value = "Contiene la "+pregunta.letra.toUpperCase();
				}

				$("#palabra_pregunta").html(pregunta.palabra);
//				document.getElementById("palabra_pregunta").value = pregunta.palabra;
				document.getElementById("a_pregunta").value = pregunta.a;
				document.getElementById("b_pregunta").value = pregunta.b;
				document.getElementById("c_pregunta").value = pregunta.c;
				document.getElementById("respuesta_pregunta").value = pregunta.letra;

				document.getElementById("body").style.visibility = "hidden";
				document.getElementById("marco_pregunta").style.visibility = "visible";
			}
		}

		function fondo(respuesta){
			if(respuesta == 0){
				if(navigator.userAgent.indexOf('Mozilla') != -1){
					return "background-color:blue";
				}
				return "background-position-x:6";
			}
			else if (respuesta == 1){
				if(navigator.userAgent.indexOf('Mozilla') != -1){
					return "background-color:green";
				}
				return "background-position-x:-36";
			}
			else if (respuesta == -1){
				if(navigator.userAgent.indexOf('Mozilla') != -1){
					return "background-color:red";
				}
				return "background-position-x:-77";
			}
		}

		function respuesta(letra){
			document.getElementById("a_pregunta").onclick = "";
			document.getElementById("b_pregunta").onclick = "";
			document.getElementById("c_pregunta").onclick = "";
			var j = 0;
			for (var i = 0; i<preguntas.length; i++){
				if (preguntas[i].letra == document.getElementById("respuesta_pregunta").value){
					pregunta = preguntas[i];
					j = i;
				}
			}
			preguntas[j].seleccion = letra;

			if (letra == pregunta.correcta){
				resultado = "¡Correcto!";
				document.getElementById(letra+"_pregunta").style.backgroundColor = "green";
				preguntas[j].respuesta = 1;
				document.getElementById(pregunta.letra).style.backgroundPositionX = -36;
				if(navigator.userAgent.indexOf('Mozilla') != -1){
					document.getElementById(pregunta.letra).style.backgroundColor = "green";
				}
			}else{
				resultado = "¡Debes repasar!";
				document.getElementById(pregunta.correcta+"_pregunta").style.backgroundColor = "green";
				document.getElementById(letra+"_pregunta").style.backgroundColor = "red";
				preguntas[j].respuesta = -1;
				document.getElementById(pregunta.letra).style.backgroundPositionX = -77;
				if(navigator.userAgent.indexOf('Mozilla') != -1){
					document.getElementById(pregunta.letra).style.backgroundColor = "red";
				}
			}

			$("#respuesta_pregunta").html(resultado);
			document.getElementById("respuesta_pregunta").style.visibility = "visible";

			puntos = 0;
			respondidas = 0;
			for (var i = 0; i<preguntas.length; i++){
				if (preguntas[i].respuesta > 0){
					puntos += preguntas[i].respuesta;
				}
				respondidas += Math.abs(preguntas[i].respuesta);
			}
			document.getElementById("puntos").value = puntos+" de "+respondidas;

			// Se almacena el estado en las cookies:
			var respuestas = "";
			var seleccion = "";
			var letras = "";
			for (var i = 0; i<preguntas.length; i++){
				respuestas += preguntas[i].respuesta + ",";
				seleccion += preguntas[i].seleccion + ",";
				letras += preguntas[i].letra + ",";
			}
			respuestas = respuestas.substr(0, respuestas.length-1);
			seleccion = seleccion.substr(0, seleccion.length-1);
			letras = letras.substr(0, letras.length-1);

			if(respondidas==preguntas.length) {
				reloj_cuenta = false;
				$.post("update.php",{
					id_usuario: id_usuario,
					letras: letras,
					respuestas: respuestas,
					seleccion: seleccion,
					tiempo: tiempo
				}).always(function(data2){
					console.log("Info devuelta por update.php: "+data2);
					if(data2==1){
						setCookiePreguntas(null);
					}
				});
				/*var tries = 1;
				$.post("finished.php",{
					puntos: puntos,
					respuestas: respuestas,
					seleccion: seleccion,
					tiempo: tiempo,
					email: email
				}).always(function(data){
					if(data=='11'){
						console.log("Los emails se enviaron correctamente. Borro cookies y almaceno los datos en la BD");
						setCookiePreguntas(null);
						$.post("update.php",{
							id_usuario: id_usuario,
							letras: letras,
							respuestas: respuestas,
							seleccion: seleccion,
							tiempo: tiempo
						}).always(function(data2){
							console.log("Info devuelta por update.php: "+data2);
							if(data2==1){
								setCookiePreguntas(null);
							}
						});
					} else {
						console.log("Los emails no se enviaron correctamente. Reintentando...");
						tries += 1;
						if (tries < 4){
							$.post("finished.php",{
								puntos: puntos,
								respuestas: respuestas,
								seleccion: seleccion,
								tiempo: tiempo,
								email: email
							});
						}
					}
				});*/
			} else {
				setCookiePreguntas(365);
				/*$.post("update.php",{
					id_usuario: id_usuario,
					letras: letras,
					respuestas: respuestas,
					seleccion: seleccion,
					tiempo: tiempo
				}).always(function(data){
					console.log("Info devuelta por update.php: "+data);
					if(data==1){
						setCookiePreguntas(null);
					}
				});*/

			}
			setTimeout(function (){
				document.getElementById("respuesta_pregunta").style.visibility = "hidden";
				document.getElementById("marco_pregunta").style.visibility = "hidden";
				document.getElementById("a_pregunta").style.backgroundColor = "#e7e4e4";
				document.getElementById("b_pregunta").style.backgroundColor = "#e7e4e4";
				document.getElementById("c_pregunta").style.backgroundColor = "#e7e4e4";
				document.getElementById("a_pregunta").onclick = function() { respuesta('a') };
				document.getElementById("b_pregunta").onclick = function() { respuesta('b') };
				document.getElementById("c_pregunta").onclick = function() { respuesta('c') };
				document.getElementById("body").style.visibility = "visible";
			}, 4000);

			if(respondidas==preguntas.length) {
				setTimeout(function (){
					var resultado = Math.round(puntos/preguntas.length*100);
					var html = "<h1 style=text-align:center;>¡Enhorabuena!</h1>"+
								"<h2>Ya has acabado esta formación: </h2>"+
								"  Número de preguntas: "+preguntas.length+"<br />"+
								"  Respuestas correctas: "+puntos+"<br />"+
								"  <strong>Resultado: "+resultado+"%</strong><br />"+
								"<br />";
					if (resultado >= 80 && resultado < 100){
						html += "¡GENIAL! Si quieres puedes volver a hacerlo hasta conseguir el 100%.";
					} else if (resultado >= 60 && resultado < 80) {
						html += "Lo has hecho bien, repasa de nuevo los módulos y vuelve por aquí después.";
					} else {
						html += "No has conseguido la puntuación mínima. Repasa y vuelve a hacerlo.";
					}
					$("#fin_texto").html(html);
					document.getElementById("body").style.visibility = "hidden";
					document.getElementById("fin_marco").style.display = "none";
					document.getElementById("fin_marco").style.visibility = "visible";
					$("#fin_marco").show("fade");
				}, 5000);
			}
		}

		function medidas(){
			width = $("body").width();
			height = $("body").height();
			centro_x = width/2;
			centro_y = 220;
		}

		function redimensionar(){
			medidas();

			var zoom_2 = zoom;
			if(navigator.userAgent.indexOf('Opera') != -1 ||
				navigator.userAgent.indexOf('Mozilla') != -1){
				zoom_2 = 1;
			}

			document.getElementById("body").style.left = centro_x - $("#body").width()/2*zoom_2/corrector;
			document.getElementById("body").style.top = centro_y - $("#body").height()/2;
			if(navigator.userAgent.indexOf('IE') != -1){
				document.getElementById("copyright").style.visibility = "hidden";
			} else {
				document.getElementById("copyright").style.left = centro_x - $("#body").width()/2*zoom_2/corrector;
				document.getElementById("copyright").style.top = centro_y + $("#body").height()/2*1.2;
				document.getElementById("copyright").style.visibility = "visible";
			}

			if (document.getElementById("body").style.left<1) {
				document.getElementById("body").style.marginLeft = 30;
				document.getElementById("copyright").style.marginLeft = 30;
			}
			if (document.getElementById("body").style.top<1) {
				document.getElementById("body").style.top = 10;
			}
		}

		function hideURLbar() {
			document.getElementById("zoom").style.zoom = 1;
			document.getElementById("marco_pregunta").style.zoom = 1;
			document.getElementById("fin_marco").style.zoom = 1;
			document.getElementById("letra_pregunta").style.fontSize = "2.500em";
			document.getElementById("palabra_pregunta").style.fontSize = "1.250em";
			document.getElementById("a_pregunta").style.fontSize = "1.250em";
			document.getElementById("b_pregunta").style.fontSize = "1.250em";
			document.getElementById("c_pregunta").style.fontSize = "1.250em";
			document.getElementById("respuesta_pregunta").style.fontSize = "1.500em";

			$("#marco_pregunta").width($(window).width()*0.9);
			$("#marco_pregunta").height($(window).height()*0.9);
//			document.getElementById("fin_texto").style.fontSize = "1.500em";
			if($("body").width()/$("body").height()<1){
				zoom = $("body").width()/$("#body").width()*corrector;
			} else {
				zoom = $("body").height()/$("#body").height()*0.9;
			}
			document.getElementById("zoom").style.zoom = zoom;
			if (navigator.userAgent.indexOf('iPhone') != -1){
				window.scrollTo(0, 1);
			}
			redimensionar();

			if($("body").width()/$("body").height()<1){
				zoom = $("body").width()/$("#marco_pregunta").width()*0.9;
			} else {
				zoom = $("body").height()/$("#marco_pregunta").height()*0.9;
			}
			document.getElementById("marco_pregunta").style.zoom = zoom;
			document.getElementById("letra_pregunta").style.fontSize = (2.500/zoom*1.5)+"em";
			document.getElementById("palabra_pregunta").style.fontSize = (1.250/zoom*1.5)+"em";
			document.getElementById("a_pregunta").style.fontSize = (1.250/zoom*1.5)+"em";
			document.getElementById("b_pregunta").style.fontSize = (1.250/zoom*1.5)+"em";
			document.getElementById("c_pregunta").style.fontSize = (1.250/zoom*1.5)+"em";
			document.getElementById("respuesta_pregunta").style.fontSize = (1.500/zoom*1.5)+"em";

			if($("body").width()/$("body").height()<1){
				zoom = $("body").width()/$("#fin_marco").width()*0.9;
			} else {
				zoom = $("body").height()/$("#fin_marco").height()*0.9;
			}
			document.getElementById("fin_marco").style.zoom = zoom;
			if (centro_x - 500*zoom > 0){
				desplazamiento = centro_x - 500*zoom;
			} else if (centro_x - 300*zoom > 0){
				desplazamiento = centro_x - 300*zoom;
			} else {
				desplazamiento = 0;
			}
			document.getElementById("fin_marco").style.left = 0;
		//	document.getElementById("fin_texto").style.fontSize = (1.500/zoom*1.5)+"em";
		}

		function pedirEmail(){
			/*document.getElementById("body").style.visibility = "hidden";
			document.getElementById("email_form").style.display = "none";
			document.getElementById("email_form").style.visibility = "visible";
			$("#email_form").show("fade");*/
			$("#email_form").remove();
			email = "dummy-user@dummy.dum"
			id_usuario = "3";
			reloj_cuenta = true;
		}

		function fijarEmail(){
			$("#error").html("");
			$.get("login.php?email="+$("#email").val()).always(function(data){
				console.log("Datos devueltos en login: "+data);
				if(data>-1){
					id_usuario = data;
					document.getElementById("body").style.visibility = "visible";
					reloj_cuenta = true;
					if(email != $("#email").val() && window.location!="http://www.alejandrofh.es/rosco/?test=1"){
						setCookiePreguntas(null);
						for (i=0;i<preguntas.length;i++){
							preguntas[i].respuesta = 0;
							preguntas[i].seleccion = "";
							document.getElementById(preguntas[i].letra).style.backgroundPositionX = 6;
							if(navigator.userAgent.indexOf('Mozilla') != -1){
								document.getElementById(preguntas[i].letra).style.backgroundColor = "blue";
							}
						}
					}
					email = $("#email").val();
					$("#email_form").remove();
					$("#email_form").hide("fade");
					hideURLbar();
					$.get("update.php?id_usuario="+id_usuario).always(function (data){
						console.log("GET update.php devuelve: "+data);
						if(data.length){
							seleccion = data.split(";")[1].split(",");
							tiempo = data.split(";")[0]*1;
							respuestas = data.split(";")[2].split(",");
							puntos = 0;
							for (i=0;i<preguntas.length;i++){
								preguntas[i].respuesta = respuestas[i]*1;
								preguntas[i].seleccion = seleccion[i];
								if (preguntas[i].respuesta == 1){
									document.getElementById(preguntas[i].letra).style.backgroundPositionX = -36;
									if(navigator.userAgent.indexOf('Mozilla') != -1){
										document.getElementById(preguntas[i].letra).style.backgroundColor = "green";
									}
									puntos += 1;
									respondidas += 1;
								} else if (preguntas[i].respuesta == -1) {
									document.getElementById(preguntas[i].letra).style.backgroundPositionX = -77;
									if(navigator.userAgent.indexOf('Mozilla') != -1){
										document.getElementById(preguntas[i].letra).style.backgroundColor = "red";
									}
									respondidas += 1;
								}
							}
							$("#puntos").val(puntos+" de "+respondidas);
						}
					});
				} else {
					$("#error").html("El email indicado no está autorizado para realizar esta formación");
					$("#error").show();
				}
			});
			return false;
		}

			var width, height, centro_x, centro_y;
			var preguntas;
			var puntos = 0;
			var respondidas = 0;
			var zoom = 1;
			var resize = false;
			var corrector = 1;
			var tiempo = 0;
			var reloj_cuenta = false;
			var email = null;
			var id_usuario = null;
			medidas();
			cargarPreguntas();
			if(window.location=="http://www.alejandrofh.es/rosco/?test=1"){
				for(i=1;i<preguntas.length;i++){
					var rand = Math.random();
					if(rand<=0.35){
						preguntas[i].seleccion = 'a';
					} else if(rand>0.35 && rand<=0.7) {
						preguntas[i].seleccion = 'b';
					} else {
						preguntas[i].seleccion = 'c';
					}
					if(preguntas[i].seleccion == preguntas[i].correcta){
						preguntas[i].respuesta = 1;
					} else {
						preguntas[i].respuesta = -1;
					}
				}
				setCookie("seleccion","",null);
				setCookie("respuestas","",null);
				setCookie("tiempo","",null);
			}
			window.onresize = function(){
				hideURLbar();
			};
			$(document).ready(function(){
					setTimeout(hideURLbar, 0);
					setInterval(function(){
						if(reloj_cuenta){
							tiempo += 1;
							setCookiePreguntas(365)
						}
						var horas = Math.floor(tiempo/3600);
						var minutos = Math.floor((tiempo - horas*3600)/60);
						var segundos = tiempo - horas*3600 - minutos*60;
						if (horas<10){
							horas = "0"+horas;
						}
						if (minutos<10){
							minutos = "0"+minutos;
						}
						if (segundos<10){
							segundos = "0"+segundos;
						}
						$('#tiempo').html(horas+":"+minutos+":"+segundos);
					}, 1000);
					pedirEmail();
					window.document.onunload = function () {
						reloj_cuenta = false;
						if(respondidas!=preguntas.length) {
							setCookiePreguntas(365);
						}
					}
			});
