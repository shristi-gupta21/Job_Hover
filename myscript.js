var  nameV, unameV, emailV, phnV, passV,cpassV;
 
function readFom() {
    nameV = document.getElementById("name").value;
    unameV = document.getElementById("uname").value;
    emailV = document.getElementById("email").value;
    phnV = document.getElementById("phone").value;
    passV = document.getElementById("password").value;
    cpassV = document.getElementById("confirm-password").value;
    console.log(nameV, unameV, emailV, phnV,passV,confirm-password);
  }

  document.getElementById("inserts").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("account/" + unameV)
      .set({
        Name: nameV,
        Username: unameV,
        email: emailV,
        phone_no: phnV,
        password : passV,
        confirm_password : cpassV,
      });
    alert("Data Inserted");
    document.getElementById("name").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
  };
  
  document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("account/" + unameV)
      .on("value", function (snap) {
        document.getElementById("name").value = snap.val().Name;
    document.getElementById("uname").value = snap.val().Username;
    document.getElementById("email").value = snap.val().email;
    document.getElementById("phone").value = snap.val().phone_no;
    document.getElementById("password").value = snap.val().password;
    document.getElementById("confirm-password").value = snap.val().confirm_password;

      });
  };
  
