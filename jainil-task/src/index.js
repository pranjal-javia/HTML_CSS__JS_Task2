import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

const shoeContainer = document.getElementById("shoe-container");
const generateButton = document.getElementById("generate");
const inputField = document.getElementById("input");

const shoeDetails = [
  {
    image: "../images/1l.jpg",
    name: "Earthen Bottle",
    price: "$48",
    description:
      "This is a beautiful earthen bottle made from high-quality clay.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../images/2l.jpg",
    name: "Stylish Sneakers",
    price: "$75",
    description: "Comfortable and stylish sneakers for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../images/3l.jpg",
    name: "Elegant Heels",
    price: "$120",
    description: "Elegant heels perfect for formal occasions.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../images/4l.jpg",
    name: "Casual Loafers",
    price: "$60",
    description: "Casual loafers for a relaxed and comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../images/5l.jpg",
    name: "Sporty Trainers",
    price: "$90",
    description: "Sporty trainers designed for high performance.",
    sizes: ["S", "M", "L", "XL"],
  },
];
const colorThief = new ColorThief();

function generateShoeCards(numberOfShoes) {
  shoeContainer.innerHTML = "";
  for (let i = 0; i < numberOfShoes; i++) {
    const shoeDetail =
      shoeDetails[Math.floor(Math.random() * shoeDetails.length)];

    const shoeCard = document.createElement("a");
    shoeCard.href = "#";
    shoeCard.className =
      "group transform transition duration-500 hover:scale-105 rounded-lg shadow-lg";

    const img = document.createElement("img");
    img.src = shoeDetail.image;
    img.alt = shoeDetail.name;
    img.className = "aspect-square w-full rounded-t-lg object-cover";
    img.loading = "lazy";

    img.addEventListener("load", () => {
      const color = colorThief.getColor(img);
      shoeCard.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.10)`;
    });

    if (img.complete) {
      const color = colorThief.getColor(img);
      shoeCard.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.10)`;
    }

    const div = document.createElement("div");
    div.className = "rounded-lg p-4";

    const h3 = document.createElement("h3");
    h3.className =
      "mt-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700";
    h3.textContent = shoeDetail.name;

    const price = document.createElement("p");
    price.className =
      "mt-1 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium text-gray-900";
    price.textContent = shoeDetail.price;

    const description = document.createElement("p");
    description.className = "mt-2 text-sm text-gray-600";
    description.textContent = shoeDetail.description;

    const size = document.createElement("p");
    size.className = "mt-1 text-sm text-gray-600";
    size.innerHTML = `<ul class="flex flex-row space-x-2">${shoeDetail.sizes
      .map(
        (s) =>
          `<li class="border border-black rounded-full h-8 w-8 flex justify-center items-center">${s}</li>`
      )
      .join("")}</ul>`;

    div.appendChild(h3);
    div.appendChild(price);
    div.appendChild(description);
    div.appendChild(size);

    shoeCard.appendChild(img);
    shoeCard.appendChild(div);

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
