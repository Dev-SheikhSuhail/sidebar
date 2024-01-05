const toggleBtn = document.querySelector(".sidebar-toggle-btn");
const closeBtn = document.querySelector(".close-btn");
//Selects the sidebar element.
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  //Either shows or hides the sidebar by adding or removing the "show-sidebar" class to/from the sidebar.
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  //Directly hides the sidebar by removing the "show-sidebar" class from the sidebar.
  sidebar.classList.remove("show-sidebar");
});
