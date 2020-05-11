/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.map(
    (x) =>
      (content.innerHTML += "<h1>" + x.name + "</h1><h2>" + x.job + "</h2>")
  );
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let htmlCode = "";
  shopping.map((x) => (htmlCode += "<li>" + x + "</li>"));
  htmlCode = "<ul>" + htmlCode + "</ul>";
  document.querySelector("#content").innerHTML += htmlCode;
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let styleObject =
    ".myFavoritesBooksItem {width: 350px;margin: 15px;padding: 10px;min - width: 350px; height: 350px; display:in-line;} #myFavoritesBooksList{list-style: none;display: flex;flex - wrap: wrap;padding: 20px;width: calc(100 % - 41px);}";
  let style = document.createElement("style");
  style.innerHTML = styleObject;
  document.body.appendChild(style);

  let ulElement = document.createElement("ul");
  ulElement.id = "myFavoritesBooksList";
  document.body.appendChild(ulElement);
  for (i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
      let listItem = document.createElement("li");
      listItem.style.backgroundColor = "green";
      listItem.className = "myFavoritesBooksItem";
      let titleOfTheBook = document.createElement("p");
      titleOfTheBook.innerText = books[i].title;
      let imgOfTheBook = document.createElement("img");
      imgOfTheBook.src =
        "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg";
      imgOfTheBook.style.width = "40%";
      listItem.appendChild(titleOfTheBook);
      listItem.appendChild(imgOfTheBook);

      document.getElementById("myFavoritesBooksList").appendChild(listItem);
    }
    else {
      let listItem = document.createElement("li");
      listItem.style.backgroundColor = "red";
      listItem.className = "myFavoritesBooksItem";
      let titleOfTheBook = document.createElement("p");
      titleOfTheBook.innerText = books[i].title;
      let imgOfTheBook = document.createElement("img");
      imgOfTheBook.src =
        "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg";
      imgOfTheBook.style.width = "40%";
      listItem.appendChild(titleOfTheBook);
      listItem.appendChild(imgOfTheBook);

      document.getElementById("myFavoritesBooksList").appendChild(listItem);
    }
  }
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

exerciseThree(books);
