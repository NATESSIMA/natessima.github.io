document.querySelector("#b-ordenar").addEventListener("mouseleave", ()=>
    console.log("Leave"));

document.querySelector("#b-ordenar").onclick =
console.log("Pulsado");

document.querySelector("#b-ordenar").onmouseover= ()=>console.log("Over");
function doAction(){
    console.log("Focus in")
}
ocument.querySelector("#b-ordenar").addEventListener("focusin", doAction);

document.querySelector("#b-ordenar").onclick =(Event)=>{
    const asc= document.querySelector('#r-asc').checked;
    const descc= document.querySelector('#r-desc').checked; 
    peliculasFiltradas.sort(p1,p2);
    {
        if (asc===true){
            return parseInt(p1.Runtime - parseInt(p2.Runtime));
        }else if(desc===true) {
            return parseInt(p2.Runtime)- parseInt(p2.Runtime)
        }
    }}


    peliculasFiltradas.map(generateCard);

