//guardar el estado (columna activa)
let columnaActiva = 1

//seleccionamos columnas
const columnas = document.querySelectorAll(".columna")

//escuchamos el click
columnas.forEach((columna,indice) => {
    columna.addEventListener("click", function(){
        activarColumna(indice)
    })
})

function activarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}