
// *** Crear un botón "cerrar" y añádir a cada elemento de la lista ***
// paso 1: tomar todos los elementos <li> (esto crea una lista de nodos)
const myNodelist = document.getElementsByTagName("LI");

// paso 2: iterar sobre la lista de nodos para acceder a cada <li>, uno por uno
for (let i = 0; i < myNodelist.length; i++) {

    // paso 3: crear un <span>
    const span = document.createElement("SPAN");
    
    // paso 4: creación de un nodo de texto con un carácter "x"
    const txt = document.createTextNode("\u00D7");

    // paso 5: asignar la clase "close" al <span> que creamos en el paso 3
    span.className = "close";

    // paso 6: colocar el texto en el <span> que creamos en el paso 3
    span.appendChild(txt);
    
    // paso 6: colocar el <span> en el <li> actual
    myNodelist[i].appendChild(span);
}

// *** Hacer clic en un botón de cierre para ocultar el elemento de la lista actual ***
// paso 1: tomar todo <span> con la clase "cerrar" (esto crea una lista de nodos)
const close = document.getElementsByClassName("close");


// paso 2: iterar sobre la lista de nodos para acceder a cada <span>, uno por uno
for (let i = 0; i < close.length; i++) {

    
    // paso 3: en un evento de "clic", se activa una acción (una función)
    close[i].onclick = () => {
 
        // paso 4: tomar el elemento padre del <span> actual (un <li>)
        const parentElement = close[i].parentElement;
        
        // paso 5: configurar el estilo de visualización como "ninguno" (CSS)
        parentElement.style.display = "none";
    }
}


// *** Agregar un símbolo "marcado" al hacer clic en un elemento de la lista ***
// paso 1: seleccionar <ul> (el contenedor de la lista)
const list = document.querySelector('ul');

// paso 2: agregar una acción de clic a cada <li> (etiquetas secundarias del contenedor)
list.addEventListener('click', e => e.target.tagName === "LI" && e.target.classList.toggle('checked'), false);

// *** Crear un nuevo elemento de lista al hacer clic en el botón "Agregar" ***
const newElement = () => {
    
    // paso 2: creación de un nuevo elemento <li>
    const li = document.createElement("li");
    
    // paso 3: toma cualquier valor que esté dentro del campo de entrada
    const inputValue = document.getElementById("myInput").value;

    // paso 4: crear un nodo de texto con el valor que acabamos de tomar
    const t = document.createTextNode(inputValue);

    // paso 5: colocar el valor en el <li> que creamos en el paso 1
    li.appendChild(t);

    // paso 6: ¿el usuario está haciendo clic en el botón "agregar" sin completar el campo de entrada?
    if (inputValue === '') {

    
    // paso 7.1: si es así, entonces activa una alerta
        alert("You must write something!");

    
    // paso 7.2: si no, tomando la lista (<ul>) y agregando el <li> del paso 1 (ese elemento también contiene el texto de entrada gracias al paso 4)
    } else {
        document.getElementById("myList").appendChild(li);
    }

    // paso 8: limpiar el campo de entrada
    document.getElementById("myInput").value = "";
    
    // paso 9: crear un <span>
    const span = document.createElement("SPAN");

    // paso 10: creación de un nodo de texto con un carácter "x"
    const txt = document.createTextNode("\u00D7");

    // paso 11: asignando la clase "close" al <span> que creamos en el paso 3
    span.className = "close";
    
    // paso 12: colocar el texto en el <span> que creamos en el paso 7
    span.appendChild(txt);

    // paso 13: colocar el <span> en el <li> actual
    li.appendChild(span);

    // paso 14: iterando sobre todo el <span> con la clase "close" ("close" es una lista de nodos que creamos en la línea 26)
    for (let i = 0; i < close.length; i++) {

        // paso 15.1: activar una acción (una función) en un evento de "clic" en cada <span>
        close[i].onclick = () => {

            // paso 15.2: tomar el elemento padre del <span> actual (un <li>)
            const parentElement = close[i].parentElement;
            
            // paso 15.3: establecer el estilo de visualización del elemento principal como "ninguno" (CSS)
            parentElement.style.display = "none";
        }
    }
}