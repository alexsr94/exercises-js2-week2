/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let aType = document.querySelectorAll("a");
console.log(aType);
let firstDivElement = document.querySelectorAll("div")[0];
console.log(firstDivElement);
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document.getElementById("bgrChangeBtn").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#011334";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var para = document.createElement("p");
var node = document.createTextNode(
  "We need lots of bikes and bike accessories! If you have an old bike you don't use, bring it to one of our dropoff events. Or come attend one of our fundraisers."
);
para.appendChild(node);
var element = document.getElementById("mainArticles");
document.getElementById("addTextBtn").addEventListener("click", function () {
  element.appendChild(para);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.


*/
document.getElementById("largerLinksBtn").addEventListener("click", largeLinks);
function largeLinks() {
  document.querySelectorAll("a").forEach(function (x) {
    x.style.fontSize = "2em";
  });
}
