function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let tNCCheckBox = document.getElementById("tNCCheckBox").checked; //.checked is used with checkBox

  if (fieldNamesTouched["firstName"]) {
    if (firstName === "") {
      document.getElementById("firstNameInvalid").style.display = "block";
      document.getElementById("firstNameValid").style.display = "none";
    } else {
      document.getElementById("firstNameValid").style.display = "block";
      document.getElementById("firstNameInvalid").style.display = "none";
    }
  }

  if (fieldNamesTouched["lastName"]) {
    if (lastName === "") {
      document.getElementById("lastNameInvalid").style.display = "block";
      document.getElementById("lastNameValid").style.display = "none";
    } else {
      document.getElementById("lastNameValid").style.display = "block";
      document.getElementById("lastNameInvalid").style.display = "none";
    }
  }

  if (fieldNamesTouched["email"]) {
    if (
      email === "" ||
      !email.includes("@") ||
      email.startsWith("@") ||
      !email.includes(".") ||
      email.slice(email.lastIndexOf(".")).length < 3
    ) {
      document.getElementById("emailInvalid").style.display = "block";
      document.getElementById("emailValid").style.display = "none";
    } else {
      document.getElementById("emailValid").style.display = "block";
      document.getElementById("emailInvalid").style.display = "none";
    }
  }

  if (fieldNamesTouched["phoneNumber"]) {
    if (
      phoneNumber === "" ||
      phoneNumber.length != 10 ||
      Number(phoneNumber[0]) < 6
    ) {
      document.getElementById("phoneInvalid").style.display = "block";
      document.getElementById("phoneValid").style.display = "none";
    } else {
      document.getElementById("phoneValid").style.display = "block";
      document.getElementById("phoneInvalid").style.display = "none";
    }
  }

  if (fieldNamesTouched["zipCode"]) {
    if (zipCode === "" || zipCode.length != 6) {
      document.getElementById("zipInvalid").style.display = "block";
      document.getElementById("zipValid").style.display = "none";
    } else {
      document.getElementById("zipValid").style.display = "block";
      document.getElementById("zipInvalid").style.display = "none";
    }
  }

  if (!tNCCheckBox) {
    document.getElementById("tNCInvalid").style.display = "block";
  } else {
    document.getElementById("tNCInvalid").style.display = "none";
  }

  if (state === "") {
    document.getElementById("stateInvalid").style.display = "block";
    document.getElementById("stateValid").style.display = "none";
  } else {
    document.getElementById("stateValid").style.display = "block";
    document.getElementById("stateInvalid").style.display = "none";
  }
}

let fieldNamesTouched = {
  firstName: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  zipCode: false,
};
function setTouched(fieldName) {
  fieldNamesTouched[fieldName] = true;
  validate();
}
