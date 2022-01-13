const allPanels = document.querySelectorAll(".panel");
// Query selector can grab anything like and id, class, h1 or any thing
// Query selector all can select many items of the same class or tags and store them in an array
// console.log(allPanels);
// it will console all the items of class panel
// console.log(allPanels[3]);
// it will only console 4rth item of the array

// its an array and we are gonna use forEach loop for arrays

allPanels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  // here we're gonna remove active classes from all the panels through loop
  allPanels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
