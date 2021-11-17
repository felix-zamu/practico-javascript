const salariosCol= colombia.map(
    function(personita){
        return personita.salary;

    }
)

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA-salaryB;
    }
)

function esPar(numerito) {
    return(numerito % 2 ===0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );

    const promedioLista =sumaLista / lista.length;
return promedioLista;

}


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lenght)) {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;   


    } else {
        const personitaMitad =lista[mitad];
        return personitaMitad;


    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

const spliceStart = (salariosColSorted.length *0.9);
const spliceCount = salariosColSorted.length -spliceStart;

const salariosColTop10 =salariosColSorted.splice( spliceStart, spliceCount, );

const medianaGeneralTop10Col = medianaSalarios(salariosColTop10)

console.log (
medianaGeneralCol,
medianaGeneralTop10Col


);