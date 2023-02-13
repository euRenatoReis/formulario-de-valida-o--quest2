
const botaoenviar = document.getElementById('botaoenviar');

var campos = document.querySelectorAll('.campo');

var avisos = document.querySelectorAll('.aviso');


campos.forEach(input => {

   input.addEventListener('change', () => {

      if (campos.value !== "") {

         input.classList.remove('tudoerrado')
         input.classList.toggle("tudocerto")
         
        

         ocultarAvisos();
         return;
      }

   })

  

})


botaoenviar.addEventListener("click", (event) => {

   do {

      alertar();

   }
   while (campos.value === '');

   event.preventDefault();

});



function alertar() {

   campos.forEach(input => {

      if (input.value === '') {

         input.classList.add("tudoerrado");

      }

      avisos.forEach(Element => {

         if (input.value === '') {

            Element.classList.remove('oculto');
         }

      })
   })
}


function ocultarAvisos(){


   avisos.forEach(Element => {

      if (campos.value !== "") {

         Element.classList.add("oculto");
      }

   })
}






