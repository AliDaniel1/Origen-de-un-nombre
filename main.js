var nombre = document.getElementById("name");
var Resultado = document.getElementById("Result");
var btn = document.getElementById("btn");

async function Obtener_Pais(valor){
    await fetch(`https://api.nationalize.io?name=${valor}`)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        Mostrar_Resultado(data)
    })
}

function Mostrar_Resultado(a){
    Resultado.innerHTML = `Pais:${a.country[0].country_id}`;
    Resultado.innerHTML+= `<p>Probabilidad:${a.country[0].probability}</p>`
}

btn.addEventListener("click" , (e)=>{
    e.preventDefault()
    Obtener_Pais(nombre.value)
})
document.addEventListener("keydown" , (e)=>{
    const tecla = e.keyCode;
    if(tecla==13){
        e.preventDefault()
        Obtener_Pais(nombre.value)
    };
    })