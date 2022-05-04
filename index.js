function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;

  if (firstName === "") {
    document.getElementById("firstNameInvalid").style.display = "block";
    document.getElementById("firstNameValid").style.display = "none";
  } else {
    document.getElementById("firstNameValid").style.display = "block";
    document.getElementById("firstNameInvalid").style.display = "none";
  }

  if (lastName === "") {
    document.getElementById("lastNameInvalid").style.display = "block";
    document.getElementById("lastNameValid").style.display = "none";
  } else {
    document.getElementById("lastNameValid").style.display = "block";
    document.getElementById("lastNameInvalid").style.display = "none";
  }

  if (email === "" || !email.includes('@') || email.startsWith('@') || !email.includes('.') || email.slice(email.lastIndexOf('.')).length < 3) {
    document.getElementById("emailInvalid").style.display = "block";
    document.getElementById("emailValid").style.display = "none";
  } else {
    document.getElementById("emailValid").style.display = "block";
    document.getElementById("emailInvalid").style.display = "none";
  }

  if (phoneNumber === "") {
    document.getElementById("phoneInvalid").style.display = "block";
    document.getElementById("phoneValid").style.display = "none";
  } else {
    document.getElementById("phoneValid").style.display = "block";
    document.getElementById("phoneInvalid").style.display = "none";
  }


}
