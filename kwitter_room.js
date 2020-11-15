username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username+" !";
function logout(){
      window.location="index.html";
}
function addroom(){
      Room_name=document.getElementById("room_name").value;
      localStorage.setItem("Room_name",Room_name);
      window.location="kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
