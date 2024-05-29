function $(e){
    return document.getElementById(e);
}

const ladoA= $("ladoA");
const ladoB= $("ladoB");
const ladoC= $("ladoC");
const resultado = $("resultado")

function areaTotal(){
    if(ladoA.value > 0 && ladoB.value > 0 && ladoC.value > 0 && ladoA.value > ladoC.value){
    const base_triangulo = ladoA.value - ladoB.value;
    const area_triangulo = (ladoB.value * base_triangulo)/2;
    const area_rectangulo = ladoB.value * ladoC.value
    resultado.textContent = (`el area del terreno es ${area_triangulo + area_rectangulo} metros`)
    }else{
        resultado.textContent = "valores no validos";
    }

}