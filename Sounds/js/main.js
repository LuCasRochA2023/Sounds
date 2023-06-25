function play(idTagAudio){
    const elemento = document.querySelector(idTagAudio);

   if (elemento != null && elemento.localName === 'audio'){
      elemento.play();
   }else{
      console.log('elemento não encontrado!');
   }
}
const listaDeTeclas = document.querySelectorAll(".tecla");
for(var i=0; i<listaDeTeclas.length; i++){
   const tecla=listaDeTeclas[i];
   const instrumento=tecla.classList[1];
   const idAudio=`#som_${instrumento}`;

   tecla.onclick=function (){
      play(idAudio); 

      console.log(instrumento);
   }


}
