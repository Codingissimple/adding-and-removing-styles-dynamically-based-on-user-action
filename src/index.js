// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello, world!";

// Bind a mouseover event to the paragraph
newParagraph.addEventListener("mouseover", () => {
  newParagraph.style.color = "blue";
  newParagraph.style.backgroundColor = "green";
});

// Bind a mouseout event to the paragraph
newParagraph.addEventListener("mouseout", () => {
  newParagraph.style.color = ""; // Remove the color style
  newParagraph.style.backgroundColor = ""; // Remove the background color style
});

// Append the paragraph to the page
document.body.appendChild(newParagraph);
