let changeSlider = {
  red: {
    name: "steak with tomato",
    image: "./images/pic1.png",
    color: "#a80000",
    desc: "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
  },
  green: {
    name: "salmon salad",
    image: "./images/pic2.png",
    color: "#00A839",
    desc: "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swis",
  },
  orange: {
    name: "chicken salad",
    image: "./images/pic3.png",
    color: " #FFA800",
    desc: "chicken chicken winner dinner bla bla blaaa  ",
  },
  lightRed: {
    name: "steak with potato",
    image: "./images/pic4.png",
    color: "#FF2B2B",
    desc: "Steak with pottato and bl bl bla dsfjkfjisf ",
  },
};

function changeContent(contentType) {
  let content = changeSlider[contentType];

  if (content) {
    console.log(content);
    document.querySelector(".logo--text").style.color = content.color;
    document.querySelector(".add-to-cart").style.background = content.color;

    const h1 = document.querySelector(".main--text--section--h1");
    h1.textContent = content.name;
    h1.style.color = content.color;

    const img = document.querySelector(".main--img--section--img");
    img.src = content.image;

    const desc = document.querySelector(".main--text--section--p");
    desc.textContent = content.desc;

    document.documentElement.style.setProperty("--radio-color", content.color);
  } else {
    console.error("Content not found for:", contentType);
  }
}

const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    changeContent(this.value);
  });
});
