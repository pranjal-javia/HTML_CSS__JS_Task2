import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

const shoeContainer = document.getElementById("shoe-container");
const generateButton = document.getElementById("generate");
const inputField = document.getElementById("input");
const shoeCardTemplate = document.getElementById("shoe-card-template").content;
const loader = document.getElementById("loader");
const size = ["S", "M", "L", "XL"];
const shoeDetails = [
  {
    image: "../public/images/1l.jpg",
    name: "Earthen Bottle",
    price: "$48",
    description:
      "This is a beautiful earthen bottle made from high-quality clay.",
    sizes: size,
  },
  {
    image: "../public/images/2l.jpg",
    name: "Stylish Sneakers",
    price: "$75",
    description: "Comfortable and stylish sneakers for everyday wear.",
    sizes: size,
  },
  {
    image: "../public/images/3l.jpg",
    name: "Elegant Heels",
    price: "$120",
    description: "Elegant heels perfect for formal occasions.",
    sizes: size,
  },
  {
    image: "../public/images/4l.jpg",
    name: "Casual Loafers",
    price: "$60",
    description: "Casual loafers for a relaxed and comfortable fit.",
    sizes: size,
  },
  {
    image: "../public/images/5l.jpg",
    name: "Sporty Trainers",
    price: "$90",
    description: "Sporty trainers designed for high performance.",
    sizes: size,
  },
  {
    image: "../public/images/6l.jpg",
    name: "Classic Boots",
    price: "$110",
    description: "Classic boots for a timeless look.",
    sizes: size,
  },
  {
    image: "../public/images/7l.jpg",
    name: "Summer Sandals",
    price: "$45",
    description: "Light and comfortable sandals for summer.",
    sizes: size,
  },
  {
    image: "../public/images/8l.jpg",
    name: "Winter Boots",
    price: "$130",
    description: "Warm and cozy boots for winter.",
    sizes: size,
  },
  {
    image: "../public/images/9l.jpg",
    name: "Running Shoes",
    price: "$85",
    description: "High-performance running shoes.",
    sizes: size,
  },
  {
    image: "../public/images/10l.jpg",
    name: "Formal Shoes",
    price: "$95",
    description: "Elegant formal shoes for special occasions.",
    sizes: size,
  },
];
const colorThief = new ColorThief();
const shoeColors = [];

const fetchColors = () => {
  loader.classList.remove("hidden");
  const promises = shoeDetails.map((shoeDetail, index) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = shoeDetail.image;
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const color = colorThief.getColor(img);
        shoeColors[index] = color;
        resolve();
      };
    });
  });

  return Promise.all(promises).then(() => {
    loader.classList.add("hidden");
  });
};

function generateShoeCards(numberOfShoes) {
  shoeContainer.innerHTML = "";
  let previdx = -1,
    idx = -1;
  for (let i = 0; i < numberOfShoes; i++) {
    while (idx === previdx) {
      idx = Math.floor(Math.random() * shoeDetails.length);
    }
    previdx = idx;
    const shoeDetail = shoeDetails[idx];
    const shoeCard = shoeCardTemplate.cloneNode(true);

    const img = shoeCard.querySelector("img");
    img.src = shoeDetail.image;
    img.alt = shoeDetail.name;

    const color = shoeColors[idx];
    if (color) {
      shoeCard.querySelector(
        "a"
      ).style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.10)`;
    }

    shoeCard.querySelector("h3").textContent = shoeDetail.name;
    shoeCard.querySelector("p:nth-of-type(1)").textContent = shoeDetail.price;
    shoeCard.querySelector("p:nth-of-type(2)").textContent =
      shoeDetail.description;

    const sizeList = shoeCard.querySelector("ul");
    sizeList.innerHTML = "";
    shoeDetail.sizes.forEach((size) => {
      const li = document.createElement("li");
      li.tabIndex = 0;
      li.className =
        "focus:ring-4 border border-black rounded-full h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex justify-center items-center";
      li.textContent = size;
      sizeList.appendChild(li);
    });

    shoeContainer.appendChild(shoeCard);
  }
}

generateButton.addEventListener("click", () => {
  const numberOfShoes = parseInt(inputField.value, 10);
  if (!isNaN(numberOfShoes) && numberOfShoes > 0) {
    const startTime = performance.now();
    generateShoeCards(numberOfShoes);
    const duration = performance.now() - startTime;
    const time = document.getElementById("time");
    time.innerHTML = `${duration.toFixed(2)}ms`;
  }
});
fetchColors();
