let prevScrollpos = window.pageYOffset;
let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#btn-toggle");
const button1 = document.querySelector('#button1leer');
const button2 = document.querySelector('#button2leer');
const button3 = document.querySelector('#button3leer');
const button4 = document.querySelector('#button4leer');
const button5 = document.querySelector('#button5leer');
const button6 = document.querySelector('#button6leer');
const button7 = document.querySelector('#button7leer');
const button8 = document.querySelector('#button8leer');
const button9 = document.querySelector('#button9leer');
const button10 = document.querySelector('#button10leer');
const cont1 = document.querySelector('#cont-texto1');
const cont2 = document.querySelector('#cont-texto2');
const cont3 = document.querySelector('#cont-texto3');
const cont4 = document.querySelector('#cont-texto4');
const cont5 = document.querySelector('#cont-texto5');
const cont6 = document.querySelector('#cont-texto6');
const cont7 = document.querySelector('#cont-texto7');
const cont8 = document.querySelector('#cont-texto8');
const cont9 = document.querySelector('#cont-texto9');
const cont10 = document.querySelector('#cont-texto10');

const textos = [
  {
    text:"Cobertura solo video Capturamos la energía y el dinamismo de los eventos deportivos. Este servicio incluye un video en formato 16:9 de 3 minutos y un reel de 1 minuto, entregado el mismo día del evento. Perfecto para quienes buscan un resumen visual inmediato y de alta calidad. Cobertura solo fotos Enfocada en los momentos clave del evento, este servicio ofrece una selección de fotos que capturan los instantes más importantes, como los momentos de acción y los podios. Ambos servicios pueden combinarse o contratarse por separado, según tus necesidades."
  },
  {
    text:"Este servicio integral incluye tanto foto como video, con el objetivo de inmortalizar la emoción de la competencia en tres videos únicos y una galería de fotos editadas. Ofrecemos: Un reel entregado el mismo día del evento. Un video dinámico en formato 16:9 que captura los momentos más explosivos. Un video emotivo en formato 16:9 que refleja la intensidad emocional de la competencia. Los dos últimos videos se entregan entre 7 y 20 días después del evento, junto con una carpeta de 40 fotos editadas. Este servicio está diseñado para aquellos que buscan una cobertura audiovisual completa y de calidad."    
  },
  {
    text:"Este servicio está pensado para quienes buscan una sesión personalizada, ya sea en exteriores o interiores. Ideal para capturar momentos importantes con un enfoque profesional en locaciones a medida de tus necesidades."
  },
  {
    text:"Sesión grupal (solo fotos). Ofrecemos la oportunidad de realizar sesiones grupales donde cada integrante obtiene material profesional a un costo reducido. Este servicio incluye:	Una sesión de 4 a 6 horas compartidas entre los integrantes. 40 fotos editadas por persona. Una excelente opción para grupos que buscan obtener contenido visual de alta calidad sin sacrificar el toque artístico."
  },
  {
    text:"Cobertura solo video Capturamos la energía y el dinamismo de los eventos deportivos. Este servicio incluye un video en formato 16:9 de 3 minutos y un reel de 1 minuto, entregado el mismo día del evento. Perfecto para quienes buscan un resumen visual inmediato y de alta calidad. Cobertura solo fotos Enfocada en los momentos clave del evento, este servicio ofrece una selección de fotos que capturan los instantes más importantes, como los momentos de acción y los podios. Ambos servicios pueden combinarse o contratarse por separado, según tus necesidades."
  },
  {
    text:"Enfoque Creativo: En este encuentro, los participantes tendrán la oportunidad de centrarse en aspectos fotográficos o audiovisuales en sus propuestas, fomentando así la creatividad y la exploración en su área de interés, sin importar su nivel de habilidad."
  },
  {
    text:"Se elabora con coordinación previa para el uso de espacios como estacionamientos, depositos, fabricas o cualqueir tipo de locación que estes en necesidad. Planificamos el presupuesto tomando en cuenta la propuesta de cada clienta sujeta a los recursos de cada espacio."
  },
  {
    text:"Incluye 3 horas de sesión, 100 fotos editadas y un video resumen de la jornada."
  },
  {
    text:"La misma cobertura que en exteriores, pero con un costo adicional por el alquiler del estudio o locación."
  },
  {
    text:"Organizamos cursos, gestionamos estadias viajes y diferentes tipos de experiencias enrriquecedoras para el aprenizaje y el placer de viajar. Deja tu contacto y te enviaremos la información de los eventos que esten proximos a realizarse"
  }
  
];

button1.addEventListener("click", function(){
      if(button1.innerText == "Leer mas"){
        cont1.innerText = textos[0].text;
            button1.innerText = "Leer menos"
      }
      else{
        cont1.innerHTML = '';
        button1.innerText = "Leer mas"
      }
      
});
button2.addEventListener("click", function(){
  if(button2.innerText == "Leer mas"){
    cont2.innerText = textos[1].text;
    button2.innerText = "Leer menos"
  }
  else{
    cont2.innerHTML = '';
    button2.innerText = "Leer mas"
  }
  
});
button3.addEventListener("click", function(){
  if(button3.innerText == "Leer mas"){
    cont3.innerText = textos[2].text;
    button3.innerText = "Leer menos"
  }
  else{
    cont3.innerHTML = '';
    button3.innerText = "Leer mas"
  }
  
});
button4.addEventListener("click", function(){
  if(button4.innerText == "Leer mas"){
    cont4.innerText = textos[3].text;
        button4.innerText = "Leer menos"
  }
  else{
    cont4.innerHTML = '';
    button4.innerText = "Leer mas"
  }
  
});
button6.addEventListener("click", function(){
  if(button6.innerText == "Leer mas"){
    cont6.innerText = textos[5].text;
        button6.innerText = "Leer menos"
  }
  else{
    cont6.innerHTML = '';
    button6.innerText = "Leer mas"
  }
  
});
button7.addEventListener("click", function(){
  if(button7.innerText == "Leer mas"){
    cont7.innerText = textos[6].text;
        button7.innerText = "Leer menos"
  }
  else{
    cont7.innerHTML = '';
    button7.innerText = "Leer mas"
  }
  
});
button8.addEventListener("click", function(){
  if(button8.innerText == "Leer mas"){
    cont8.innerText = textos[7].text;
        button8.innerText = "Leer menos"
  }
  else{
    cont8.innerHTML = '';
    button8.innerText = "Leer mas"
  }
  
});
button9.addEventListener("click", function(){
  if(button9.innerText == "Leer mas"){
    cont9.innerText = textos[8].text;
        button9.innerText = "Leer menos"
  }
  else{
    cont9.innerHTML = '';
    button9.innerText = "Leer mas"
  }
  
});
button10.addEventListener("click", function(){
  if(button10.innerText == "Leer mas"){
    cont10.innerText = textos[9].text;
        button10.innerText = "Leer menos"
  }
  else{
    cont10.innerHTML = '';
    button10.innerText = "Leer mas"
  }
  
});


window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    menu.classList.remove("btn-togler-event");
  }
  prevScrollpos = currentScrollPos;
};

menu_bar.addEventListener("click", function () {
  menu.classList.toggle("btn-togler-event");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.toggle("btn-togler-event");
  })
);


