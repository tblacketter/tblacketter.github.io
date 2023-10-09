"use strict";

$(document).ready( () =>{

        $( ".progressBar" ).progressbar({
          max: 100
        });

        function incrementBar(){
            let val = $(".progressBar").progressbar("value");

            if(val !== $(".progressBar").progressbar("option","max")){
                $(".progressBar").progressbar("value", val + 1);
            }
        }

        function decrementBar(){
            let val = $(".progressBar").progressbar("value");

            if(val !== 0){
               $(".progressBar").progressbar("value", val - 1);
            }
        }

        $("#increase").click( () => {
            incrementBar();
        });
        $("#decrease").click( () =>{
            decrementBar();
        });

        $(".datepicker").datepicker();

        $("#tabs").tabs();
});