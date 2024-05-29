function $(e){
   return document.getElementById(e);
}

const estatura = $("estatura");
const peso = $("peso");

function imc(){
    const resultado = peso.value/(estatura.value **2);
    alert(`el IMC es de ${resultado}`)
    estatura.value = ""
}

// const imc = () =>{
//     const resultado = peso.value/(estatura.value**2);
//     alert(`el IMC es de ${resultado}`)
// }