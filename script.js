function changeText() {
    const paragraph = document.getElementById("description");
    paragraph.textContent = "The text has been updated using JavaScript!";
  }
  
  function changeStyle() {
    const heading = document.getElementById("main-heading");
    heading.style.color = "tomato";
    heading.style.fontSize = "2.5rem";
  }
  
  function toggleBox() {
    const existingBox = document.getElementById("box");
    if (existingBox) {
      existingBox.remove();
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.textContent = "I’m a new box!";
      newBox.style.backgroundColor = "#f0f0f0";
      newBox.style.padding = "1rem";
      newBox.style.marginTop = "1rem";
      document.body.appendChild(newBox);
    }
  }
  