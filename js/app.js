const $accordion =  document.querySelectorAll('#accordion')
let $titulo = '',$flecha,$parrafo

// $titulos.forEach(titulo => {
//     console.log(titulo.children[0])
// });

$accordion.forEach((element)=>{
    // console.log(element.children[0].children[0])
    element.addEventListener('click',abrirArrow)
})



function abrirArrow(e){
    idArrow = e.target.id
   
    if(idArrow === 'arrow'){
      
        if($titulo && $parrafo && $flecha) addClass($titulo,$flecha,$parrafo) 
    
        $titulo = e.target.parentElement
        $flecha = e.target
        $parrafo = e.target.parentElement.parentElement.children[1]
        addClass($titulo,$flecha,$parrafo) 
    }
}   

function addClass(titulo,flecha,parrafo){
    titulo.classList.toggle('tituloColor')
    flecha.classList.toggle('arrowRotary')
    parrafo.classList.toggle('parrafoMostrar')
}
