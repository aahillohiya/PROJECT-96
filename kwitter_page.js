var firebaseConfig = {
    apiKey: "AIzaSyAe-8KJCgVdqcGRyTpC-8KE2179kR3Ile4",
    authDomain: "lets-chat-31490.firebaseapp.com",
    databaseURL: "https://lets-chat-31490-default-rtdb.firebaseio.com",
    projectId: "lets-chat-31490",
    storageBucket: "lets-chat-31490.appspot.com",
    messagingSenderId: "451640322379",
    appId: "1:451640322379:web:b1f80a935231bc050660ce"
  };

firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("USERNAME");

ROOM_NAME = localStorage.getItem("ROOM_NAME");

function send() {
    msg = document.getElementById("msg").value ;
    firebase.database().ref(ROOM_NAME).push({
    name: username,
    message: msg,
    like:0
    });
    document.getElementById("msg").innerHTML = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
