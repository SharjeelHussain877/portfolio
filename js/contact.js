emailjs.init("8Cwvsof5QtYu4nIGq");

function isEmptyFields(name, mail, sub, ms) {
  if (name === "" || mail === "" || sub === "" || ms === "") {
    swal(
      "Please Fill All Required Fields",
      "Ensure all fields are filled.",
      "warning"
    );
    return false;
  } else {
    return true;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let loader = document.getElementById("loadme");

function loaderToggler() {
  loader.classList.toggle("hidden");
  console.log(loader.classList.toggle("show"));
}

function sendForm() {
  let user_name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (!isEmptyFields(user_name, email, subject, message)) {
    return;
  }

  if (!isValidEmail(email)) {
    swal("Invalid Email", "Please enter a valid email address.", "warning");
    return;
  }

  let templateParams = {
    to_name: "Sharjeel Hussain",
    from_email: email,
    from_name: user_name,
    subject,
    message: message,
  };

  document.getElementById("fh5co-page").style.display = "none";
  loaderToggler();

  emailjs.send("service_h3v51k5", "template_1nwrqv3", templateParams).then(
    function (response) {
      loaderToggler();
      document.getElementById("fh5co-page").style.display = "block";
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      loaderToggler();
      console.log("FAILED...", error);
    }
  );

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  sendForm();
});
