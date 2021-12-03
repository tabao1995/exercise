function validateForm() {
    let x = document.forms["myForm"]["fpass"].value;
    let y = document.forms["myForm"]["rePassword"].value;
    if (x !== y ) {
      alert("Re-password is incorrect");
      return false;
    }
  }