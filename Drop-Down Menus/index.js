// // for dropdown
// const more = document.querySelector('.button')
// more.addEventListener('click', (e) => {
//     document.querySelector('.dropdown-content').classList.toggle('active')
// })

// for mobile
const navButtons = document.querySelectorAll("li");
const body = document.querySelector("#content");
document.querySelector("a").classList.add("active");

const displayController = (() => {
  const _clearPage = () => {
    while (body.firstElementChild) {
      body.firstElementChild.remove();
    }
  };

  const _updateActive = (e) => {
    const elems = document.querySelectorAll(".active");
    elems.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const drawContent = (e, tab) => {
    _updateActive(e);
    _clearPage();
    const fakeContent = document.createElement("p");
    fakeContent.textContent = `this page is the ${tab} page`;
    body.appendChild(fakeContent);
  };

  return { drawContent };
})();

navButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const link = e.target.hash;
    const active = document.querySelector(".active").hash;

    if (link === active) {
      return;
    }

    //obviously this is uncessary for our short example
    switch (link) {
      case "#home":
        displayController.drawContent(e, link);
        break;
      case "#poop":
        displayController.drawContent(e, link);
        break;
      case "#wizard":
        displayController.drawContent(e, link);
        break;
      case "#profile":
        displayController.drawContent(e, link);
        break;
      default:
        displayController.drawContent(e, link);
    }
  })
);
