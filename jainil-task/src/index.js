import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

const shoeContainer = document.getElementById("shoe-container");
const generateButton = document.getElementById("generate");
const inputField = document.getElementById("input");

const shoeDetails = [
  {
    image: "../public/images/1l.jpg",
    name: "Earthen Bottle",
    price: "$48",
    description:
      "This is a beautiful earthen bottle made from high-quality clay.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../public/images/2l.jpg",
    name: "Stylish Sneakers",
    price: "$75",
    description: "Comfortable and stylish sneakers for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../public/images/3l.jpg",
    name: "Elegant Heels",
    price: "$120",
    description: "Elegant heels perfect for formal occasions.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../public/images/4l.jpg",
    name: "Casual Loafers",
    price: "$60",
    description: "Casual loafers for a relaxed and comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    image: "../public/images/5l.jpg",
    name: "Sporty Trainers",
    price: "$90",
    description: "Sporty trainers designed for high performance.",
    sizes: ["S", "M", "L", "XL"],
  },
];
const colorThief = new ColorThief();

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
    const shoeCard = document.createElement("a");
    shoeCard.href = "#";
    shoeCard.className =
      "group transform transition duration-500 hover:scale-105 rounded-lg shadow-lg";

    const img = document.createElement("img");
    img.src = shoeDetail.image;
    img.alt = shoeDetail.name;
    img.className = "aspect-square w-full rounded-t-lg object-cover rounded-b-sm";
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
    div.className = "rounded-lg p-4 font-sans";

    const h3 = document.createElement("h3");
    h3.className =
      "mt-4 text-lg sm:text-base md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-regular text-gray-700";
    h3.textContent = shoeDetail.name;

    const price = document.createElement("p");
    price.className =
      "mt-1 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold text-gray-900";
    price.textContent = shoeDetail.price;

    const description = document.createElement("p");
    description.className =
      "mt-2 text-sm sm:text-sm md:text-sm lg:text-md xl:text-md 2xl:text-xl font-regular text-gray-600";
    description.textContent = shoeDetail.description;

    const size = document.createElement("p");
    size.className = "mt-1 text-sm text-gray-600";
    size.innerHTML = `<ul class="flex flex-row space-x-2">${shoeDetail.sizes.map(s => `<li tabindex="0" class="focus:ring-4 border border-black rounded-full h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex justify-center items-center">${s}</li>`).join('')}</ul>`;

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
