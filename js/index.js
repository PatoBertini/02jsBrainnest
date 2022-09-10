let screen = document.getElementById("screen"); // screen calculator
const anchor = document.querySelectorAll("#anchor a");

for (const iterator of anchor) {
  iterator.addEventListener("click", function (e) {
    e.preventDefault();// we preven the default event to avoid refreshing the page
    // console.log(e.target); // -> return a element with data-key
    // console.log(e.target.dataset)//->return object, with property key

    if (e.target.dataset.key == "equal") {
      // console.log(screen);//-> return element div with numbers
      // console.log(screen.textContent); // -> return screen text
      screen.textContent = eval(screen.textContent); // -> Eval allows to execute a chain of code
      console.log(screen.textContent); // log result of operation
    } else if (e.target.dataset.key == "clear") {
      screen.textContent = ""; // dataset.key clear == c, so we empty string
    } else {
      screen.textContent = screen.textContent + e.target.dataset.key; // add your button inputo + the data-key of the target .
      console.log(screen.textContent);
    }
  });
}

// Data atribute allows to save data in html elements
