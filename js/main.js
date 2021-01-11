import { openNavBtn, navItemsArray, MenuNav } from "./variables.js";
import { Movie } from "./movieClass.js";
import { Validation } from "./validationClass.js";


let newVAr = =5;
let movie = new Movie();
movie.getMoviesByCategory("now_playing")

$("a[movieCategory]").click(function () {
    let category = $(this).attr("movieCategory");
    movie.getMoviesByCategory(category);
})

$("#searchByWordIn").keyup(function (e) {
    movie.searchMovies(e.target.value, "byWord");
});

$("#searchByLetterIn").keyup(function (e) {
    movie.searchMovies(e.target.value);
});

/* function smooth scroll to conatct section */ 
$("a[href ='#contact']").click(function () {
    let targetId =$(this).attr("href");
    let targetOffsetTop = $(`${targetId}`).offset().top;
    $("html , body").animate({scrollTop : targetOffsetTop}, 1000);  
});

/* open  navigation Menu functionality */
let navListWidht = $(".sideNav_inner").outerWidth();
$(MenuNav).css("left", `${-navListWidht}px`);

$(openNavBtn).click(() => {
    $(".openBtnIcon").toggleClass('closeShape');
    let sideNavLeft = $(MenuNav).css("left")
    if (sideNavLeft != "0px") {
        $(MenuNav).animate({ left: `${0}px` }, 500, () => {
            /** animating nav items */
            let delay = 3;
            navItemsArray.forEach((element,) => {
                $(element).css({
                    "animation-name": `animateTop`,
                    "animation-delay": `0.${delay++}s`
                })
            });
        });
    } else {
        $(MenuNav).animate({ left: `${-navListWidht}px` }, 500, () => {
            navItemsArray.forEach((element) => {
                $(element).css({
                    "top": "100%",
                    "animation-delay": `0s`,
                    "animation-name": `none`,
                });
            })
        });
    }
});

/** validating contact inputs  */
let validation =  new Validation();

/** method to validate all inputs that has class userInput */
validation.startValidation();

$("#userRePass").keyup(function () {
    validation.validateRePassInput.call(this);
});

$("#submitContact").click(function (e) {
    e.preventDefault();
    validation.submitDataValidation();
})
    


