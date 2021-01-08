let MenuNav = $(".header_sideNav");
let navItemsArray = Array.from($(".nav-item"));
let openNavBtn = $("#openBtn");
/** store all inputs rgx with inputs id  */
let RgxPattens = new Map();
RgxPattens
    .set("userEmail", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    .set("userPass", /^[a-zA-Z]{2,}[A-Za-z]{2,}[0-9]+$/)
    .set("userAge", /^[0-9]{0,1}[0-9]{1}$/)
    .set("userName", /^[a-zA-Z]+(\s)*[a-zA-Z0-9]*$/)
    .set("userPhone", /^(010|012|011|015)[0-9]{8}$/);

export{
    MenuNav,
    navItemsArray,
    openNavBtn,
    RgxPattens
}