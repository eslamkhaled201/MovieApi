import { RgxPattens } from "./variables.js";
export class Validation {
    constructor() {
        this.RgxPattens = RgxPattens;
    }

    /** dynamic method for validate inputs with its Regular expration pattern  */
    IsValidInput(Pattern, inputElement) {
        if (Pattern.test($(inputElement).val())) {
            $(inputElement).next().css("display", "none");
            return true;
        } else {
            $(inputElement).next().css("display", "block");
            return false;
        }
    }

    /**  apply validation at each input with keyUp event */
    startValidation() {
           // get copy of IsvalidInput of class obj
        let ValidfunOfThis= this.IsValidInput; 
        $(".userInput").keyup(function (e) {
            // get input id to get its rgx pattern Key Name
            let RgxName = $(this).attr("id");
            const RgxPattern = RgxPattens.get(`${RgxName}`);
            let status = ValidfunOfThis(RgxPattern , this);
            $(this).attr("valid", `${status}`);
        });
    }

    /** sperate method to ckeck if reentered pass is equal 
     * the original pass or not
      */
    validateRePassInput(){
        let passInValue = $("#userPass").val();
        if ($(this).val() == passInValue) {
            $(this).next().css("display", "none");
            $(this).attr("valid", "true");
        } else {
            $(this).next().css("display", "block");
        }
    }
    
    /** method is called when clicking on submit btn 
     * to check all inputs valid or not */
    submitDataValidation() {
        let allInputsValid;
        let inputs = Array.from($("#contactform").find("input"));
        inputs.forEach(element => {
            allInputsValid = $(element).attr("valid");
        });
        if (allInputsValid == "true") {
            $("#contactform").fadeOut(400, () => {
                $(".success-feedBack")
                    .fadeIn(400)
                    .addClass("d-flex");
            })
        } else {
            alert("Enter valid Data");
        }
    }

}