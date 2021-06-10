var firebaseConfig = {
      apiKey: "AIzaSyB-hKYvw8VaogXJvCch2cb6D1Mt4LrMsaY",
      authDomain: "kwitter-app-92f56.firebaseapp.com",
      databaseURL: "https://kwitter-app-92f56-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-92f56",
      storageBucket: "kwitter-app-92f56.appspot.com",
      messagingSenderId: "76210322261",
      appId: "1:76210322261:web:d6d0e533fc777e30190ddc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");
    function send() { msg = document.getElementById("msg").value; 
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); 
    document.getElementById("msg").value = ""; 
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


