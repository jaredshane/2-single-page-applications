console.log("hello");

function loadMessages(e) {
  var data = JSON.parse(e.target.responseText);
  console.log("data", data);
//for loop to fill dom
  var slackContent = "";
  for (var i = 0; i < data.messages.length; i++) {
    slackContent += `<div>
                      <date>${data.messages[i].date}</date>
                      <h3>${data.messages[i].sender}</h3>
                      <p>${data.messages[i].content}</p>
                    </div>`
  }

//assign that stuff to #slack
  document.getElementById("slack").innerHTML = slackContent;
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", loadMessages)
myRequest.open("GET", "https://slack-clone-jared.firebaseio.com/.json");
myRequest.send();
