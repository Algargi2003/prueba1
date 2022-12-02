
//Para hacer una cantidad indefinida de inputs para ingredientes y pasos, pedir la cantidad y entonces generar los inputs con ids etc...
function pintaInputsPrevios(){
    let contenedor = document.getElementById("contenedor-inputs");
    let texto;
    
    texto= `
    <input id="nombreReceta" type="text" placeholder="Nombre">
    <input id="descripcionReceta" type="text" placeholder="Descripcion Corta">
    <input id="tipoReceta" type="text" placeholder="Tipo">
    <input id="tiempoPreparacionReceta" type="text" placeholder="Tiempo prep.">
    <input id="tiempoCocinaReceta" type="text" placeholder="Tiempo cocina">
    <input id="personasReceta" type="text" placeholder="Personas">
    <br></br>


    <input id="cantidadIngredientes" type="text" placeholder="Cantidad ingredientes">
    <input id="cantidadPasos" type="text" placeholder="Cantidad Pasos">
    <button id="botonEnviarPrevios" class="btn btn-success">Next</button>
    `;
    contenedor.innerHTML = texto;
    //listeners();
}
function listeners(){
    
}
function guardaDatos(){
    let nom = document.getElementById("nombreReceta");
    // let desc = document.getElementById("descripcionReceta").value;
    // let tipo = document.getElementById("tipoReceta").value;
    // let tiempoPrep = document.getElementById("tiempoPreparacionReceta").value;
    // let tiempoCoccion = document.getElementById("tiempoCocinaReceta").value;
    // let pers = document.getElementById("personaReceta").value;
    console.log(nom.value);
}
function pintaInputsIngredientes(){
    let contenedor = document.getElementById("contenedor-inputs");
    let texto;
    //todos los inputs
    texto= `
    <input id="cantidadIngredientes" type="text" placeholder="Cantidad ingredientes">
    <input id="cantidadPasos" type="text" placeholder="Cantidad Pasos">
    
    `;
    contenedor.innerHTML = texto;
}

window.onload = () => {
    let cont=0;
    listaRecetas.forEach(e=> {
        cont++;
    })
    console.log(cont+1+" será el id del insertado")

    pintaInputsPrevios();
    let botonPrev = document.getElementById("botonEnviarPrevios");
    botonPrev.onclick=()=>{
        pintaInputsIngredientes();
        guardaDatos();
    };
};