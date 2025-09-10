// Toggle  mobile menu

const menuToggle =document. getElementById("menu-toggle ");

const navLinks =document. getElementById("nav-links");

menuToggle. addventListener("click, () => {

 navLinks. classList. toggle("show");

});

// Simple contact form validation

 const contactForm =document.getElementById("contact-form");

const formstatus =document. GetElementById(" form-status ");

contactForm. addventListener("submit", (e)    

=> {

 e. preventDefault();

const name =document. getElementById("name"). value. trim();

const email =document.getElementById 

("email"). value. trin();

const message =document. getElementById("message").value. trin();

if (name && email && message) {

   formstatus. textcontent="✅ Message sent successfully!";

    formstatus. style. color="green";

    contactForm. reset();

} else {

     formstatus. textcontent ="❎ please fill in all fields.";

     formstatus. style. color ="red";

}

});