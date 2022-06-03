window.onload = function() {
    emailjs.init("tpwoKXfz6PV_yP3vO");
    document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_bndxzhl";
      const templateID = "template_ks0orb7";

      // send the email here
      emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          
        }
      );
    });
}