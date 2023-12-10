const draggables = document.querySelectorAll(".draggable");

const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    // console.log("dragstart");
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    // console.log("end");
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", () => {
    // console.log("drag over");
    // This will print every sec if you are dragging 7 not releasing it.
  });
});
