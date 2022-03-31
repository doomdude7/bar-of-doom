// Age Gate functions (check if the user is 18+ before giving access to the website)
const yesBtn = document.getElementById("age-gate-btn-yes");
const noBtn = document.getElementById("age-gate-btn-no");
const popup = document.querySelector(".pop-up");
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("ageConsent")) {
    popup.style.opacity = "1";
  } else {
    popup.style.display = "none";
  }
});
yesBtn.addEventListener("click", () => {
  const ageConsent = true;
  localStorage.setItem("ageConsent", ageConsent);
  popup.style.display = "none";
});
noBtn.addEventListener("click", () => {
  window.location.href = "https://en.wikipedia.org/wiki/Legal_drinking_age";
});

// Custom Cursor check if user has previously selected cursor

document.addEventListener("DOMContentLoaded", () => {
  let customCursor = localStorage.getItem("customCursor");
  let sharinganCursor = localStorage.getItem("sharingan");
  if (localStorage.getItem("customCursor")) {
    // console.log(customCursor);
    cursor.id = `${customCursor}`;
  }
  if (localStorage.getItem("sharingan")) {
    // console.log(sharinganCursor);
    document.body.style.cursor = "url(./images/sharingan.png), auto";
    cursor.style.border = "5px solid rgba(121, 9, 23, 1)";
  }
});

//cursor effects
let cursor = document.querySelector(".cursor");

document.onmousemove = function (e) {
  cursor.style.left = e.pageX - 25 + "px";
  cursor.style.top = e.pageY - 25 + "px";
};
// pick different cursor buddy -- curor container page
const cursorTriggerBtn = document.getElementById("cursor-trigger-btn");
const cursorContainer = document.querySelector(".cursor-container");
cursorContainer.style.display = "none";
cursorTriggerBtn.addEventListener("click", () => {
  if (cursorContainer.style.display == "none") {
    const easterEgg = document.getElementById("easter-egg");
    cursorContainer.style.display = "flex";
    easterEgg.style.display = "none";
    // selectCursorBuddy();
  } else {
    cursorContainer.style.display = "none";
    cursor.style.pointerEvents = "auto";
    cursor.style.zIndex = "1";
  }
});
function selectCursorBuddy() {
  // cursorContainer.style.display = "flex";
  cursorContainer.innerHTML = `
  <button class="close-cursor-container">X</button>
  <div class="cursor-option-box cursor-option-box-1"><h2 id="cursor-option-header">Option 1:</h2> <button class="selected-cursor-option selected-cursor-option-1">Select</button></div>
  <div class="cursor-option-box cursor-option-box-2"><h2 id="cursor-option-header">Option 2:</h2> <button class="selected-cursor-option selected-cursor-option-2">Select</button></div>
  <div class="cursor-option-box cursor-option-box-3"><h2 id="cursor-option-header">Option 3:</h2> <button class="selected-cursor-option selected-cursor-option-3">Select</button></div>
  <div class="cursor-option-box cursor-option-box-4"><h2 id="cursor-option-header">Option 4:</h2> <button class="selected-cursor-option selected-cursor-option-4">Select</button></div>
  <div class="cursor-option-box cursor-option-box-5"><h2 id="cursor-option-header">Option 5:</h2> <button class="selected-cursor-option selected-cursor-option-5">Select</button></div>
  <div class="cursor-option-box cursor-option-box-6"><h2 id="cursor-option-header">Option 6:</h2> <button class="selected-cursor-option selected-cursor-option-6">Select</button></div>
  <div class="cursor-option-box cursor-option-box-7"><h2 id="cursor-option-header">Option 7:</h2> <button class="selected-cursor-option selected-cursor-option-7">Select</button></div>
  <div class="cursor-option-box cursor-option-box-8"><h2 id="cursor-option-header">Option 8:</h2> <button class="selected-cursor-option selected-cursor-option-8">Select</button></div>
  <div class="cursor-option-box cursor-option-box-9"><h2 id="cursor-option-header">Option 9:</h2> <button class="selected-cursor-option selected-cursor-option-9">Select</button></div>
  <div class="cursor-option-box cursor-option-box-10"><h2 id="cursor-option-header">Option 10:</h2> <button class="selected-cursor-option selected-cursor-option-10">Select</button></div>
  <div class="cursor-option-box cursor-option-box-11"><h2 id="cursor-option-header">Default:</h2> <button class="selected-cursor-option selected-cursor-option-11">Select</button></div>
  <div class="cursor-option-box cursor-option-box-12" id="easter-egg"><h2 id="cursor-option-header">Curse</h2> <button class="selected-cursor-option selected-cursor-option-12">----</button></div>
  `;
  const doomImg = document.querySelector(".doom-img");
  const easterEgg = document.getElementById("easter-egg");
  const closeCursorContainer = document.querySelector(
    ".close-cursor-container"
  );
  closeCursorContainer.addEventListener("click", () => {
    cursorContainer.style.display = "none";
    cursor.style.pointerEvents = "auto";
    cursor.style.zIndex = "1";
    easterEgg.style.display = "none";
  });
  closeCursorContainer.addEventListener("mouseover", () => {
    cursor.style.pointerEvents = "none";
  });
  closeCursorContainer.addEventListener("mouseout", () => {
    cursor.style.pointerEvents = "all";
  });
  const selectButton1 = document.querySelector(".selected-cursor-option-1");
  selectButton1.addEventListener("click", () => {
    cursor.id = "cursor_1";
    localStorage.setItem("customCursor", "cursor_1");
  });
  const selectButton2 = document.querySelector(".selected-cursor-option-2");
  selectButton2.addEventListener("click", () => {
    cursor.id = "cursor_2";
    localStorage.setItem("customCursor", "cursor_2");
  });
  const selectButton3 = document.querySelector(".selected-cursor-option-3");
  selectButton3.addEventListener("click", () => {
    cursor.id = "cursor_3";
    localStorage.setItem("customCursor", "cursor_3");
  });
  const selectButton4 = document.querySelector(".selected-cursor-option-4");
  selectButton4.addEventListener("click", () => {
    cursor.id = "cursor_4";
    localStorage.setItem("customCursor", "cursor_4");
  });
  const selectButton5 = document.querySelector(".selected-cursor-option-5");
  selectButton5.addEventListener("click", () => {
    cursor.id = "cursor_5";
    localStorage.setItem("customCursor", "cursor_5");
  });
  const selectButton6 = document.querySelector(".selected-cursor-option-6");
  selectButton6.addEventListener("click", () => {
    cursor.id = "cursor_6";
    localStorage.setItem("customCursor", "cursor_6");
  });
  const selectButton7 = document.querySelector(".selected-cursor-option-7");
  selectButton7.addEventListener("click", () => {
    cursor.id = "cursor_7";
    localStorage.setItem("customCursor", "cursor_7");
  });
  const selectButton8 = document.querySelector(".selected-cursor-option-8");
  selectButton8.addEventListener("click", () => {
    cursor.id = "cursor_8";
    localStorage.setItem("customCursor", "cursor_8");
  });
  const selectButton9 = document.querySelector(".selected-cursor-option-9");
  selectButton9.addEventListener("click", () => {
    cursor.id = "cursor_9";
    localStorage.setItem("customCursor", "cursor_9");
  });
  const selectButton10 = document.querySelector(".selected-cursor-option-10");
  selectButton10.addEventListener("click", () => {
    cursor.id = "cursor_10";
    localStorage.setItem("customCursor", "cursor_10");
  });
  // DEFAULT -- selectbutton 11
  const selectButton11 = document.querySelector(".selected-cursor-option-11");

  selectButton11.addEventListener("click", () => {
    cursor.id = "cursor";
    localStorage.setItem("customCursor", "cursor");
    document.body.style.cursor = "url(./images/cursor.png), auto";
    localStorage.removeItem("sharingan");
    cursor.style.border = "5px solid aquamarine";
  });
  const selectButton12 = document.querySelector(".selected-cursor-option-12");
  selectButton12.addEventListener("click", () => {
    document.body.style.cursor = "url(./images/sharingan.png), auto";
    cursor.style.border = "5px solid rgba(121, 9, 23, 1)";
    localStorage.setItem("sharingan", "true");
  });
  doomImg.addEventListener("mouseenter", () => {
    easterEgg.style.display = "flex";
  });
}
selectCursorBuddy();
//initial fetch api
const auth = "1";
const ingredientsContainer = document.querySelector(".ingredients-container");
const ingredientsPage = document.querySelector(".ingredients-page");
async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    Authorization: auth,
    headers: { Accept: "application/json" },
  });
  const data = await dataFetch.json();
  return data;
}
// loop to get 8 random cocktails
function randomCocktailLoop() {
  let i = 1;
  while (i <= 8) {
    i++;
    randomCocktailConnection();
  }
}
randomCocktailLoop();

// ingredients container
// pick a base section
const baseTitles = ["vodka", "rum", "scotch", "whiskey", "champagne", "beer"];
let baseName;
baseTitles.forEach((baseTitle) => {
  const base = baseTitle;
  // console.log(base);
  baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${base}`;
  imgUrl = `https://www.thecocktaildb.com/images/ingredients/${base}-Medium.png`;
  fetchBaseTitles(baseUrl, imgUrl);
  // console.log(baseUrl);
});
//fetch baseTitles
async function fetchBaseTitles(baseUrl, imgUrl) {
  const fetchBaseUrl = await fetch(baseUrl, {
    method: "GET",
    Authorization: auth,
    headers: { Accept: "application/json" },
  });
  const fetchImgUrl = await fetch(imgUrl, {
    method: "GET",
    Authorization: auth,
    headers: { Accept: "application/json" },
  });
  const dataImg = await fetchImgUrl;
  // console.log(dataImg);
  const dataBase = await fetchBaseUrl.json();
  dataBase.ingredients.forEach((e) => {
    // console.log(e);
    const dataBaseName = e.strIngredient;
    // console.log(dataBaseName);
    let baseDiv = document.querySelector(".bases");
    const baseContainer = document.createElement("div");
    baseContainer.classList.add("base-container");
    baseContainer.classList.add(`${dataBaseName}`);
    baseContainer.innerHTML = `
    <h2 id="base-container-title" class="base-container-title">${dataBaseName}</h2>
    <img id="base-container-img" class="base-container-img ${dataBaseName}" src=${dataImg.url} alt="alcohol pic"></img>
    `;
    baseDiv.appendChild(baseContainer);
    const baseImageKey = document.querySelector(`.${dataBaseName}`);
    baseImageKey.addEventListener("click", Query);
    async function Query() {
      ClearSplide();
      const query = dataBaseName;
      await ingredientCocktailsConnection(query);
      window.location.href = "#selectedCocktails";
    }

    //gsap animation of base alcohols
    baseTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "Power2.easeIn" },
    });
    baseTimeline.fromTo(
      ".base-container-img",
      { y: 500, opacity: 0.2 },
      { y: 0, stagger: 0.25, opacity: 1, duration: 1.5 }
    );
    // baseTimeline.fromTo(
    //   ".base-container-title",
    //   { y: 400, opacity: 0 },
    //   { y: 50, stagger: 0.25, opacity: 1, duration: 1.5 },
    //   "<"
    // );
    baseTimeline.fromTo(
      ".base-container-title",
      { opacity: 0 },
      { opacity: 1, stagger: 0.25, delay: 1.1 },
      "<"
    );
    baseTimeline.fromTo(
      ".ingredients-container-title",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      "<50%"
    );
  });
}
//Clear function
async function ClearSplide() {
  const ingredientCocktailPage = document.querySelector(
    ".ingredient-cocktail-page"
  );
  ingredientCocktailPage.remove();
}
//ingredients container -- fetch cocktails based on ingredient (base)
async function ingredientCocktailsConnection(query) {
  fetchLinkIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`;
  const dataIngredient = await fetchApi(fetchLinkIngredient);
  // console.log(dataIngredient.drinks);
  const currentPick = query;
  generateIngredientCocktails(dataIngredient, currentPick);
}
// ingredientCocktailsConnection();
//spawn cocktails based on picked base
function generateIngredientCocktails(dataIngredient, currentPick) {
  const ingredientCocktailPage = document.createElement("section");
  const gallery = document.createElement("div");
  const currentPickCaption = document.createElement("h3");
  currentPickCaption.innerText = `Current pick: ${currentPick}`;
  currentPickCaption.classList.add("current-pick-caption");
  gallery.classList.add("ingredient-cocktail-gallery");
  ingredientCocktailPage.classList.add("ingredient-cocktail-page");
  ingredientCocktailPage.setAttribute("id", "selectedCocktails");
  ingredientCocktailPage.classList.add("content");
  ingredientsPage.appendChild(ingredientCocktailPage);
  ingredientCocktailPage.appendChild(gallery);
  gallery.appendChild(currentPickCaption);
  const splide = document.createElement("div");
  splide.classList.add("splide");
  splide.innerHTML = ` 
  <div class="splide__track">
    <ul class="splide__list">
    </ul>
  </div>
`;
  gallery.appendChild(splide);
  //loop over each cocktail
  dataIngredient.drinks.forEach((drink) => {
    // console.log(drink.strDrinkThumb);
    const splideList = document.querySelector(".splide__list");
    const ingredientCocktail = document.createElement("li");
    ingredientCocktail.classList.add("splide__slide");
    ingredientCocktail.innerHTML = `
     <h2 class="ingredient-cocktail-title">${drink.strDrink}</h2>
    <img id="${drink.idDrink}" class="ingredient-cocktail-img" src=${drink.strDrinkThumb} alt="cocktail pic"></img>
    `;
    splideList.appendChild(ingredientCocktail);
    const cocktailTrigger = document.getElementById(`${drink.idDrink}`);
    // console.log(drink.idDrink);
    const drinkDataId = drink.idDrink;
    cocktailTrigger.addEventListener("click", () => {
      selectedCocktailConnection(drinkDataId);
      window.scrollTo(0, 200);
    });
    // console.log(cocktailTrigger);
  });
  //splide carousel
  new Splide(".splide", {
    updateOnMove: true,
    type: "loop",
    perPage: 2,
    perMove: 1,
    arrows: true,
  }).mount();
}
// random cocktails functions
async function randomCocktailConnection() {
  fetchLink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const data = await fetchApi(fetchLink);
  // console.log(data.drinks);
  generateRandomCocktails(data);
}

function generateRandomCocktails(data) {
  data.drinks.forEach((drink) => {
    // console.log(drink.strDrink, "-->", drink.strCategory);
    // console.log(drink.idDrink);
    // console.log(drink);
    const randomCocktail = document.createElement("div");
    const container = document.querySelector(".cocktail-container");
    randomCocktail.classList.add("random-cocktail");
    randomCocktail.innerHTML = `
    <h2 class="random-cocktail-title">${drink.strDrink}</h2>
    <h3 class="random-cocktail-category">${drink.strCategory}</h3>
    <img id="${drink.idDrink}" class="random-cocktail-img" src=${drink.strDrinkThumb} alt="cocktail pic"></img>
    `;
    container.appendChild(randomCocktail);
    randomCocktailsAnimations();
    const drinkObject = drink;
    const cocktailTrigger = document.getElementById(`${drink.idDrink}`);
    cocktailTrigger.addEventListener("click", () => {
      generateDetailSection(drinkObject);
      window.location.href = "#cocktail-preview-img";
    });
    // console.log(cocktailTrigger);
  });
}

// selected cocktails details fetch link
async function selectedCocktailConnection(id) {
  fetchDetails = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const dataSelection = await fetchDetails.json();
  // console.log(dataSelection.drinks);
  generateDetailSection(dataSelection.drinks[0]);
}
// function to generate details section for selected cocktail
function generateDetailSection(drink) {
  // cocktail details section
  // console.log(drink);
  cursor.style.zIndex = 3;
  const cocktailDetailsPage = document.querySelector(".cocktail-details-page");
  cocktailDetailsPage.style.display = "flex";
  cocktailDetailsPage.classList.add("content");
  cocktailDetailsPage.innerHTML = `
     <button class="close-cocktail-details">X</button>
     <div class="cocktail-details">
     <h1 class="cocktails-details-title">${drink.strDrink}</h1>
     <h3 class="cocktails-details-category">${drink.strCategory}</h3>
     <h3 class="cocktails-details-alcoholic">${drink.strAlcoholic}</h3>
     </div>
     <div class="cocktail-preview-and-instructions">
     <div class="cocktail-preview">
     <img id="cocktail-preview-img" class="cocktail-preview-img" src=${drink.strDrinkThumb} alt="cocktail pic"></img>
     <h2 class="glass-type">Served in a ${drink.strGlass}</h2>
     </div>
     <div class="cocktail-instructions">
     <p class="ingredients-list">Ingredients:</p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure1}</span>
       <span class="ingredients-item-main">${drink.strIngredient1}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure2}</span>
       <span class="ingredients-item-main">${drink.strIngredient2}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure3}</span>
       <span class="ingredients-item-main">${drink.strIngredient3}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure4}</span>
       <span class="ingredients-item-main">${drink.strIngredient4}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure5}</span>
       <span class="ingredients-item-main">${drink.strIngredient5}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure6}</span>
       <span class="ingredients-item-main">${drink.strIngredient6}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure7}</span>
       <span class="ingredients-item-main">${drink.strIngredient7}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure8}</span>
       <span class="ingredients-item-main">${drink.strIngredient8}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure9}</span>
       <span class="ingredients-item-main">${drink.strIngredient9}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure10}</span>
       <span class="ingredients-item-main">${drink.strIngredient10}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure11}</span>
       <span class="ingredients-item-main">${drink.strIngredient11}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure12}</span>
       <span class="ingredients-item-main">${drink.strIngredient12}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure13}</span>
       <span class="ingredients-item-main">${drink.strIngredient13}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure14}</span>
       <span class="ingredients-item-main">${drink.strIngredient14}</span
       >
     </p>
     <p class="ingredients-item">
       <span class="ingredients-item-sub">${drink.strMeasure15}</span>
       <span class="ingredients-item-main">${drink.strIngredient15}</span
       >
     </p>
     <p class="instructions-p">Instructions: <br> ${drink.strInstructions}</p>
     </div>
     </div>
   `;
  detailAnimations();
  const closeCocktailDetails = document.querySelector(
    ".close-cocktail-details"
  );
  closeCocktailDetails.addEventListener("click", () => {
    cocktailDetailsPage.style.display = "none";
    cursor.style.pointerEvents = "auto";
    cursor.style.zIndex = "1";
    baseContainerImg.style.zIndex = 10;
  });
  closeCocktailDetails.addEventListener("mouseover", () => {
    cursor.style.pointerEvents = "none";
  });
  // clearing all the null elements from the list of ingredients
  const ingredientListofParents =
    document.querySelectorAll(".ingredients-item");
  const ingredientListofMains = document.querySelectorAll(
    ".ingredients-item-main"
  );
  ingredientListofMains.forEach((item) => {
    // console.log("item.firstChild.data    " + item.firstChild.data);
    // console.log("item.data    " + item.data);
    // console.log("item.firstChild    " + item.firstChild);
    // console.log("item    " + item);
    // console.log("//");
    // console.log(item.textContent);
    if (item.textContent.includes(null) == true || item === "") {
      item.remove();
    }
  });
  const ingredientListofSubs = document.querySelectorAll(
    ".ingredients-item-sub"
  );
  ingredientListofSubs.forEach((item) => {
    // console.log(item.textContent);
    if (item.textContent.includes(null) == true || item.textContent === "") {
      item.remove();
    }
  });
  ingredientListofParents.forEach((parent) => {
    if (parent.firstElementChild == null) {
      parent.remove();
    }
  });
}
// animations
timeline = gsap.timeline({
  defaults: { duration: 1, ease: "Power2.easeOut" },
});
//landing page "doom's bar image"
// gsap.fromTo(".landing-page", { opacity: 0.2 }, { opacity: 1, duration: 1.5 });

//skeleton animations
timeline.fromTo("#base", { opacity: 0 }, { opacity: 1, duration: 1.2 });
timeline.fromTo(
  "#head",
  { y: -2000, opacity: 0 },
  { y: 0, opacity: 1, ease: "elastic(0.8,0.4)", duration: 1.5 }
);
timeline.fromTo("#lemon", { opacity: 0 }, { opacity: 1, delay: 0.55 });
timeline.fromTo("#umbrella", { opacity: 0 }, { opacity: 1 });

//landing page pin on scroll effect
const tlIntro1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#landing-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
const tlIntro2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".greeting",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
// random cocktails animation
function randomCocktailsAnimations() {
  cocktailTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "Power2.easeOut" },
  });
  cocktailTimeline.fromTo(
    ".cocktail-page-title",
    { x: -1500, opacity: 0 },
    { x: 0, opacity: 1 }
  );
  cocktailTimeline.fromTo(
    ".random-cocktail-img",
    { y: -250, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.35 },
    "<"
  );
  cocktailTimeline.fromTo(
    ".random-cocktail-title",
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.35 },
    "<"
  );
  cocktailTimeline.fromTo(
    ".random-cocktail-category",
    { opacity: 0 },
    { opacity: 1, stagger: 0.35 },
    "<"
  );
  // cocktailTimeline.fromTo(
  //   ".cocktail-page-title",
  //   { opacity: 1 },
  //   { opacity: 0.5, duration: 3 }
  // );
}

// underconstruction section animations
const constructionSign = document.querySelector(".construction-sign");
const mouse = document.querySelector(".mouse");
tlMouse = gsap.timeline({ defaults: { duration: 1, ease: "Power2.easeOut" } });
tlMouse.fromTo(
  constructionSign,
  { x: -1800, y: -300, rotate: "360deg" },
  {
    rotate: "0deg",
    x: 0,
    y: 0,
    duration: 1,
    ease: "Power2.ease",
  }
);
gsap.set(mouse, { transformOrigin: "top" });
tlMouse.fromTo(
  mouse,
  { opacity: 0, x: -50, y: 150 },
  { opacity: 1, x: -18, y: 150, duration: 1, ease: "Power2.easeOut" }
);
//cocktail details page animations

function detailAnimations() {
  detailsTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "Power2.easeOut" },
  });
  ingredientsTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "Power2.easeOut" },
  });
  const cocktailDetailsTitle = document.querySelector(
    ".cocktails-details-title"
  );
  // detailsTimeline.fromTo(
  //   "#cocktail-preview-img",
  //   { scale: 0.7, x: 500, y: 600 },
  //   { scale: 0.5, x: 0, y: 0, duration: 1.5 }
  // );
  detailsTimeline.fromTo(
    "#cocktail-preview-img",
    { opacity: 0, scale: 0.7, x: 500, y: 600 },
    {
      opacity: 1,
      scale: 0.5,
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "Power1.easeOut",
    }
  );
  detailsTimeline.fromTo(
    cocktailDetailsTitle,
    { opacity: 0, x: -800 },
    { opacity: 1, x: 0, duration: 2 }
  );
  detailsTimeline.fromTo(
    ".cocktails-details-category",
    { opacity: 0, x: 800 },
    { opacity: 1, x: 0, duration: 2 },
    "<"
  );
  detailsTimeline.fromTo(
    ".cocktails-details-alcoholic",
    { opacity: 0, y: -800 },
    { opacity: 1, y: 0, duration: 2 },
    "<"
  );
  detailsTimeline.fromTo(
    ".glass-type",
    { opacity: 0 },
    { opacity: 1, duration: 2 }
  );
  ingredientsTimeline.fromTo(
    ".ingredients-list",
    { opacity: 0, y: -800 },
    { opacity: 1, y: 0, duration: 2 },
    "<"
  );
  ingredientsTimeline.fromTo(
    ".ingredients-item-main",
    { opacity: 0, x: 800 },
    { opacity: 1, x: 0, duration: 1, stagger: 0.5 },
    "<50%"
  );
  ingredientsTimeline.fromTo(
    ".ingredients-item-sub",
    { opacity: 0, x: -800 },
    { opacity: 1, x: 0, duration: 1.5, stagger: 0.3 },
    "<20%"
  );
  detailsTimeline.fromTo(
    ".instructions-p",
    { opacity: 0 },
    { opacity: 1, duration: 1.5 },
    "<30%"
  );
}
