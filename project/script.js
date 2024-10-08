// NAME
let checkName = () => {
  if ($("#name").val() == "") $("#nameError").html("Empty");
  else $("#nameError").html("");
};

// EMAIL
let checkEmail = () => {
  if ($("#email").val() == "") $("#emailError").html("Empty");
  else $("#emailError").html("");
};

// NUMBER
let checkNumber = () => {
  if ($("#number").val() == "") $("#numberError").html("Empty");
  else $("#numberError").html("");
};

// BIRTH
let checkBirth = () => {
  if ($("#birth").val() == "") $("#birthError").html("Empty");
  else $("#birthError").html("");
};

// MALE
let checkMale = () => {
  if ($("#male").val() == "") $("#maleError").html("Empty");
  else $("#maleError").html("");
};

// FEMALE
let checkFemale = () => {
  if ($("#female").val() == "") $("#femaleError").html("Empty");
  else $("#femaleError").html("");
};

// OTHER
let checkOther = () => {
  if ($("#other").val() == "") $("#otherError").html("Empty");
  else $("#otherError").html("");
};

// FLAT
let checkFlat = () => {
  if ($("#flat").val() == "") $("#flatError").html("Empty");
  else $("#flatError").html("");
};

// DISTRICT
let checkDistrict = () => {
  if ($("#district").val() == "") $("#districtError").html("Empty");
  else $("#districtError").html("");
};

// CITY
let checkCity = () => {
  if ($("#city").val() == "") $("#cityError").html("Empty");
  else $("#cityError").html("");
};

// COUNTRY
let checkCountry = () => {
  if ($("#country").val() == "") $("#countryError").html("Empty");
  else $("#countryError").html("");
};

// REGION
let checkRegion = () => {
  if ($("#region").val() == "") $("#regionError").html("Empty");
  else $("#regionError").html("");
};

// CODE
let checkCode = () => {
  if ($("#region").val() == "") $("#regionError").html("Empty");
  else $("#regionError").html("");
};

// //check passowrd
let checkPassword = () => {
  let pass = $("#password").val();
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (!regex.test(pass)) {
    $("#passwordError").html(
      "Password must have Alphabat, special characters, number"
    );
  } else $("#passwordError").html("");
};

// check Confirm passowrd
let checkConfirmPassword = () => {
  if ($("#confirmPassword").val() != $("#password").val())
    $("#confirmPasswordError").html(
      "Confirm Password Must be same as Password"
    );
  else $("#confirmPasswordError").html("");
};








