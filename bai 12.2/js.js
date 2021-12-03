  function validateForm() {
      let k = document.forms["myForm"]["fname"].value;
      let x = document.forms["myForm"]["fpass"].value;
      let y = document.forms["myForm"]["rePassword"].value;
      if (k == '' && y == '' && x == '')
        { alert ("Please Fill ALL");
        return false;
      }
      if(x !== y ) {
      alert("Re-password is incorrect");
      return false;}
    }