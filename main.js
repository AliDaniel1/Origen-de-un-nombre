var nombre = document.getElementById("name");
var Resultado = document.getElementById("Result");
var btn = document.getElementById("btn");
var Cargando = document.getElementById("loading");

async function Obtener_Pais(valor){
    Resultado.style.display = "none";
    Cargando.style.display = "block";
    const respuesta = await fetch(`https://api.nationalize.io?name=${valor}`)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        Mostrar_Resultado(data)
    }).catch((err)=>{
        console.log(err)
        Resultado.innerHTML = "Debes introducir un nombre";
        Resultado.style.color = "#f00";
    }).finally(()=>{
        Cargando.style.display = "none"
        Resultado.style.display = "block"
    })
}

function Mostrar_Resultado(a){
    Resultado.innerHTML = `Nombre : ${a.name}`
    Resultado.innerHTML+= `<p>Pais: ${a.country[0].country_id}<p>`;
    Resultado.innerHTML+= `<p>Probabilidad: ${Number(a.country[0].probability).toFixed(8)}</p>`;
    Resultado.style.color = "#000"
}

btn.addEventListener("click" , (e)=>{
    e.preventDefault()
    Obtener_Pais(nombre.value)
})
document.addEventListener("keydown" , (e)=>{
    const tecla = e.keyCode;
    if(tecla == 13){
        e.preventDefault();
        Obtener_Pais(nombre.value);
    };
    })