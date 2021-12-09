const firebaseConfig = {
    apiKey: "AIzaSyDBl7p7gk2LHy4tjyYwfWpwXtVCX8Fr56Q",
    authDomain: "ticketspot-974b8.firebaseapp.com",
    databaseURL: "https://ticketspot-974b8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ticketspot-974b8",
    storageBucket: "ticketspot-974b8.appspot.com",
    messagingSenderId: "798931976992",
    appId: "1:798931976992:web:8f53fabfda5b6ea1350d45",
    measurementId: "G-8F6740HEFS"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function showRegistration(){

    $(".content").css('opacity', 1);
    $(".content").css('visibility', "visible");
}

function hideRegistration() {

    $(".content").css('opacity', 0);
    $(".content").css('visibility', "hidden");
}

function register() {
    
    fname = $("#fnameInput").val();
    lname = $("#lnameInput").val();
    email = $("#emailInput").val();
    password = $("#passwordInput").val();

    //validate if the fields are empty
    if(fname.length < 1 || lname.length < 1 || email.length < 1 || password1.length < 1){
        alert('Fields cannot be empty!');
        return
    }

    //validate email and password
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Please enter correct values for email and password')
        return
        // Don't continue running the code
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {

      fname: fname,
      lname: lname,
      email : email
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

function login() {

    email = $("#emailForLogin").val();
    password = $("#passwordForLogin").val();

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Please enter correct values for email and password')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()
        

        loggedIn = true;
        alert('Logged In successfully!')
        window.location.replace("home.html");
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
        return
    })
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
}

function validate_password(password) {
    if (password < 8) {
        return false
    } else {
        return true
    }
}

function showPasswordReset(){
    $(".content2").css('opacity', 1);
    $(".content2").css('visibility', "visible");
}

function hidePasswordReset(){
    $(".content2").css('opacity', 0);
    $(".content2").css('visibility', "hidden");
}

function resetPassword(){

    emailreset = document.getElementById("reset-password-email").value;
    
    if (validate_email(emailreset) == false){
        alert("Please enter a valid email");
        return;
    }

    auth.sendPasswordResetEmail(emailreset).then(function(){

    })
    .catch(function(error){

        var error_code = error.code;
        var error_message = error.message;
    
        alert(error_message);
    })
}

//Logout function
function logout(){
    loggedIn = false;

    auth.signOut();

    window.location.replace("index.html");
}


function loadEvents(){

        //Retrieving Image
        firebase.database().ref("events/e1/image").on('value',function(snapshot){
            var srclink = snapshot.val();
            document.getElementById("e1-img").src = srclink;
        })

        //Retrieving Event Name
        firebase.database().ref("events/e1/ename").on('value',function(snapshot){
            var title = snapshot.val();
            document.getElementById("e1-title").innerText = title;
        })
        
        //Retrieving Image
        firebase.database().ref("events/e2/image").on('value',function(snapshot){
            var srclink = snapshot.val();
            document.getElementById("e2-img").src = srclink;
        })

        //Retrieving Event Name
        firebase.database().ref("events/e2/ename").on('value',function(snapshot){
            var title = snapshot.val();
            document.getElementById("e2-title").innerText = title;
        })

        //Retrieving Image
        firebase.database().ref("events/e3/image").on('value',function(snapshot){
            var srclink = snapshot.val();
            document.getElementById("e3-img").src = srclink;
        })

        //Retrieving Event Name
        firebase.database().ref("events/e3/ename").on('value',function(snapshot){
            var title = snapshot.val();
            document.getElementById("e3-title").innerText = title;
        })

         //Retrieving Image
         firebase.database().ref("events/e4/image").on('value',function(snapshot){
            var srclink = snapshot.val();
            document.getElementById("e4-img").src = srclink;
        })

        //Retrieving Event Name
        firebase.database().ref("events/e4/ename").on('value',function(snapshot){
            var title = snapshot.val();
            document.getElementById("e4-title").innerText = title;
        })
        
}
