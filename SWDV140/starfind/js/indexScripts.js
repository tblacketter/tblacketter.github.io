/*********************************************************************
***
*Original Author: Teryn Blacketter                                   
*Date Created:  08/30/2023                                     
*Version: 0.0                                               
*Date Last Modified: 9/3/2023                             
*Modified by: Teryn Blacketter                                         
*Modification log:                                  
***
        Version 0.0 - Created the file
        version 0.1 - Created 3 functions generate, createStars, hideContent and wrote the scripts for each.


******************************************************************** */
"use strict";

//Gathers user input for number of stars, hides the opening text, sends data to createStar function
function generate(){
    
    document.getElementById("mainBanner").style.display = "none";
    let numStars = 0;

    do{
        numStars = parseInt(prompt("Enter the number of stars you would like to generate (1-12)", 1));
    }
    while(numStars > 12 || numStars < 1)
    
    createStars(numStars);
}

//Future function to create the stars on the star map
function createStars(numStars){
    alert(`You have chosen ${numStars} stars`);
    document.getElementById("starBanner").style.display = "block";
}

//Hides the prompts for a better view of the starmap
function hideContent(){
    document.getElementById("starBanner").style.display = "none";
}