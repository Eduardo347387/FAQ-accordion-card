
const $accordion =  document.querySelectorAll('.accordion')
let $titulo = '',$flecha,$parrafo

$accordion.forEach((element)=>{
    // console.log(element.children[0].children[0])
    element.addEventListener('click',abrirArrow)
})



function abrirArrow(e){
    clase = e.target.classList[0]
  
    if(clase === 'arrow'){
        isAccordionActive()
        $titulo = e.target.parentElement
        $flecha = e.target
        $parrafo = e.target.parentElement.parentElement.children[1]
        addClass($titulo,$flecha,$parrafo) 
    }
    if(clase === 'subTitulo'){
        isAccordionActive()
        $titulo =e.target
        $flecha = e.target.children[0]
        $parrafo = e.target.parentElement.children[1] 
        addClass($titulo,$flecha,$parrafo) 
    }
   
}   

function isAccordionActive(){
    if($titulo && $parrafo && $flecha) addClass($titulo,$flecha,$parrafo) 
}

function addClass(titulo,flecha,parrafo){
    titulo.classList.toggle('tituloColor')
    flecha.classList.toggle('arrowRotary')
    parrafo.classList.toggle('parrafoMostrar')
}

