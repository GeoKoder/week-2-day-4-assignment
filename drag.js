const list = document.getElementById("draggable-list");
let draggedItem = null;

// Handle the start of a drag
list.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("list-item")) {
    draggedItem = e.target;
    setTimeout(() => e.target.classList.add("dragging"), 0);
  }
});

// Handle dragover
list.addEventListener("dragover", (e) => {
  e.preventDefault();

  const targetItem = e.target.closest(".list-item");

  if (!targetItem || targetItem === draggedItem) {
    return;
  }

  // Remove previous indicator
  list.querySelectorAll(".drop-target").forEach((item) => {
    item.classList.remove("drop-target");
  });

  // Show indicator
  targetItem.classList.add("drop-target");
});

// Handle the drop 
list.addEventListener("drop", (e) => {
  e.preventDefault();

  const targetItem = e.target.closest(".list-item");

  if (!targetItem || targetItem === draggedItem) {
    return;
  }

  const bounding = targetItem.getBoundingClientRect();

  const offset = e.clientY - bounding.top;

  if (offset > bounding.height / 2) {
    list.insertBefore(draggedItem, targetItem.nextSibling);
  } else {
    list.insertBefore(draggedItem, targetItem);
  }
});

// Handle the end of a drag
list.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("list-item")) {
    e.target.classList.remove("dragging");

    list.querySelectorAll(".drop-target").forEach((item) => {
      item.classList.remove("drop-target");
    });

    draggedItem = null;
  }
});
