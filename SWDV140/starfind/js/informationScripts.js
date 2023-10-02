/*********************************************************************
***
*Original Author: Teryn Blacketter                                   
*Date Created:  09/29/2023                                    
*Version: 0.1                                               
*Date Last Modified: 10/01/2023                             
*Modified by: Teryn Blacketter                                         
*Modification log:                                  
***
        Version 0.0 - Created the file and added the scripts for the slideshow
        version 0.1 - Added the scripts for the sources drop down menu


******************************************************************** */

"use strict";

$(document).ready( () => {
    let nextSlide = $("#star_slideshow img:first-child");
        
    // start slide show
    setInterval( () => {   
        $("#caption").fadeIn(1000);
        $("#slide").fadeIn(2000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#star_slideshow img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(2000);                    
                $("#caption").text(nextCaption).fadeIn(1000);
            });    // end fadeOut()
    },
    5000);         // end setInterval()


    $("#sources h2").click( evt => {
        const h2 = evt.currentTarget;

        $(h2).toggleClass("minus");

        if ($(h2).attr("class") != "minus") {
			$(h2).next().fadeOut(1000);
		}
		else {
			$(h2).next().fadeIn(1000);
		}

        evt.preventDefault();
    });

});