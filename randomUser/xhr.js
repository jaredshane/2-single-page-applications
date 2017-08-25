console.log("javascript")

//get the data with a button

  //add event listener to button
  document.getElementById('getUser').addEventListener("click", getUser)

  //function
  var user;

  function saveUser(e) {
    user = JSON.parse(e.target.responseText);
    console.log(user);

  }

  function getUser() {
    //create a request
    var userRequest = new XMLHttpRequest();
    userRequest.addEventListener("load", saveUser);
    userRequest.open("GET", "https://randomuser.me/api/?nat=us");
    userRequest.send();

  }



//display the data with a button
document.getElementById('displayUser').addEventListener("click", displayUser);

function displayUser () {
  console.log(user);

  //if my user is an idiot, stop them.
  if (!user) {
    alert('Push the other button, clown');
  } else {
  var stuffToDisplay = `<h3>${user.results[0].name.first}         ${user.results[0].name.last}</h3>
  <img src=${user.results[0].picture.large}>`
  document.getElementById('user').innerHTML = stuffToDisplay;
  }
}
