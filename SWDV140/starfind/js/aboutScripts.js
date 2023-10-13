/*********************************************************************
***
*Original Author: Teryn Blacketter                                   
*Date Created:  09/16/2023                                     
*Version: 0.0                                               
*Date Last Modified: 9/17/2023                             
*Modified by: Teryn Blacketter                                         
*Modification log:                                  
***
        Version 0.0 - Created the file and wrote the basics for the newsletter form and faqs form
        version 0.1 - fixed errors with the faqs script in the event handler by adding the correct id tag #faqs a 


******************************************************************** */
"use strict";

const $ = selector => document.querySelector(selector);


//Functions for precessing the form
const displayErrorMsgs = msgs => {
        // create a new ul element
        const ul = document.createElement("ul");
        ul.classList.add("messages");
    
        // create a new li element for each error message, add to ul
        for (let msg of msgs) {
            const li = document.createElement("li");
            const text = document.createTextNode(msg);
            li.appendChild(text);
            ul.appendChild(li);
        }
    
        // if ul node isn't in document yet, add it
        const node = $("ul");
        if (node == null) {
            // get the form element 
            const form = $("form");
    
            // add ul to parent of form, before the form
            form.parentNode.insertBefore(ul, form);
        } else {
            // replace existing ul node
            node.parentNode.replaceChild(ul, node);
        }  
    }
    
    const processEntries = () => {
        // get form controls to check for validity

        const firstName = $("#first_name");
        const lastName = $("#last_name");
        const email = $("#email_address");
        const terms = $("#terms");

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    
        // create array for error messages
        const msgs = [];
    
        // check user entries for validity

        if(firstName.value == "")
        {
                msgs[msgs.length] = "Please enter your first name.";
        }
        if(lastName.value == ""){
                msgs[msgs.length] = "Please enter your last name.";
        }
        if (email.value == "" || !emailPattern.test(email)) {

            if(email.value == ""){
                msgs[msgs.length] = "Please enter an email address.";
            }else{
                msgs[msgs.length] = "Please enter a valid email address.";
            }
                
        } 
        if (!terms.checked) {
                msgs[msgs.length] = "Please accept the terms."; 
        } 

        // submit the form or notify user of errors
        if (msgs.length == 0) {  // no error messages
                $("form").submit(); 
        } else {
                displayErrorMsgs(msgs);
        }
    };
    
    const resetForm = () => {
        $("form").reset();
        
        // remove error messages
        $("ul").remove();
        
        $("#first_name").focus();
    };

    //functions for processing the faqs

    const toggle = evt => {
        const aElement = evt.currentTarget; // get the clicked a element 
        const h2Element = aElement.parentNode; // get the h2 node from the a nodes                
        const divElement = h2Element.nextElementSibling;     // get h2's sibling div
    
        //h2Element.classList.toggle("minus");
        if(h2Element.hasAttribute("class")){
            h2Element.removeAttribute("class");
        }
        else{
            h2Element.className = "minus";
        }
    
        //divElement.classList.toggle("open");
        if(divElement.hasAttribute("class")){
            divElement.removeAttribute("class");
        }
        else{
            divElement.className = "open";
        }
    
        evt.preventDefault();   // cancel default action of h2 tag's <a> tag
    };
    
    document.addEventListener("DOMContentLoaded", () => {

        const aElements = faqs.querySelectorAll("#faqs a")
        for (let aElement of aElements) {
                aElement.addEventListener("click", toggle);
        }

        $("#register").addEventListener("click", processEntries);
        $("#reset_form").addEventListener("click", resetForm);    
    });

