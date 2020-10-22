let score = [0,1];
var turn;
var team1 ={
    name:"Benin",
    runs:[],
    score:0

};
var team2 ={
    name:"Anguilla",
    runs:[],
    score:0

};
var team3 ={
    name:"Bermuda",
    runs:[],
    score:0

};
var team4 ={
    name:"Armenia",
    runs:[],
    score:0

};
 window.onload = ()=>{
     updateImage();
    updateName();
    updateWinner();
};
updateImage = ()=>{
    var img4 = document.createElement("img");
img4.src = "./assets/bermuda.jpg";
var src = document.getElementById("team4-img");
src.appendChild(img4);
  var img3 = document.createElement("img");
img3.src = "./assets/benin.png";
var src = document.getElementById("team3-img");
src.appendChild(img3);
 var img2 = document.createElement("img");
img2.src = "./assets/armenia.gif";
var src = document.getElementById("team2-img");
src.appendChild(img2);
  var img1 = document.createElement("img");
img1.src = "./assets/anguilla.png";
var src = document.getElementById("team1-img");
src.appendChild(img1);
 var img1_finals = document.createElement("img");
img1_finals.src = "./assets/benin.png";
var src = document.getElementById("team1-final-img");
src.appendChild(img1_finals);
var img2_finals = document.createElement("img");
img2_finals.src = "./assets/anguilla.png";
var src = document.getElementById("team2-final-img");
src.appendChild(img2_finals);
 
};
updateWinner = ()=>{
    document.getElementById('winner1').textContent =` ${team2.name} Winner`;
    document.getElementById('winner2').textContent =`${ team1.name} Winner`;
};

updateName = ()=>{
    //team1 name
    document.getElementById('team-1-name').textContent = team2.name;
    //team2 name
    document.getElementById('team-2-name').textContent = team4.name;
   
    //team3 name
    document.getElementById('team-3-name').textContent = team1.name;
    
    //team4 name
    document.getElementById('team-4-name').textContent = team3.name;
    //team1 finals name
   document.getElementById('team-1-name-finals').textContent = team1.name;
    //team2  finals name
    document.getElementById('team-2-name-finals').textContent = team2.name;
   
}