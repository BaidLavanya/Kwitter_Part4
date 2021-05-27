var firebaseConfig = {
  apiKey: "AIzaSyC7aysAwT97QRQ95on1PwG2PZfi_yWTaBo",
  authDomain: "kwitterproject-a889f.firebaseapp.com",
  databaseURL: "https://kwitterproject-a889f-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-a889f",
  storageBucket: "kwitterproject-a889f.appspot.com",
  messagingSenderId: "493777204464",
  appId: "1:493777204464:web:c91b0e43e01d90c39f7e35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("User Name");
    room_name=localStorage.getItem("Room Name");

    function send(){
          message = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message : message,
                like : 0
          });
          document.getElementById("message").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
