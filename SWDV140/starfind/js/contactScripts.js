/*********************************************************************
***
*Original Author: Teryn Blacketter                                   
*Date Created:  09/16/2023                                     
*Version: 0.2                                               
*Date Last Modified: 10/13/2023                             
*Modified by: Teryn Blacketter                                         
*Modification log:                                  
***
        Version 0.0 - Created the file and implemented the basics for the form scripts, functions and event listener
        version 0.1 - Polished the form scripts and made sure all the basics were working, changed the submit button so .submit() would work
        version 0.2 - Added the regex validation for email and phone


******************************************************************** */
"use strict";

const $ = selector => document.querySelector(selector);

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
        const phone = $("#phone");

        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    
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

                if(email.value == "")
                {
                        msgs[msgs.length] = "Please enter an email address."; 
                        
                }
                else{
                        msgs[msgs.length] = "Please enter a valid email.";     
                }
        } 
        if (phone.value == "" || !phonePattern.test(phone)) {

                if(phone.value == ""){
                        msgs[msgs.length] = "Please enter a mobile phone number.";
                        
                }else{
                        msgs[msgs.length] = "Please enter a mobile phone number in the NNN-NNN-NNNN format";
                }    
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
    
    document.addEventListener("DOMContentLoaded", () => {
        $("#submitButton").addEventListener("click", processEntries);
        $("#reset_form").addEventListener("click", resetForm);  
        $("#first_name").focus();   
    });