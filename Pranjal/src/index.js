const image_arr = [
  { src: "../images/image1.jpg", alt: "image1", name: "New Balance", size: "Size: 8UK", price: "$150.00", desc: "Air Force 1"},
  { src: "../images/image2.jpg", alt: "image2", name: "New Balance", size: "Size: 7UK", price: "$125.00", desc: "Next Nature Shoes"},
  { src: "../images/image3.jpg", alt: "image3", name: "Nike", size: "Size: 6UK", price: "$90.00", desc: "Running Shoes"},
  { src: "../images/image4.jpg", alt: "image4", name: "Nike", size: "Size: 9UK", price: "$110.00", desc: "Road Racing Shoes"},
];

document.addEventListener("DOMContentLoaded", getCards);

function getCards() {

    const main = document.getElementById("main_content");
    
    let prev = -1, random_number = -1;
    for(let i=0; i<100 ; i++){
        const card = document.createElement('div');
        card.className = 'flex flex-col relative rounded-lg shadow-2xl group';

        while(random_number == prev){
            random_number = Math.floor(Math.random() * 4);
        }
        prev = random_number;

        // image generation
        const image = document.createElement('img');
        image.className = 'w-full aspect-square shadow-2xl rounded-lg';
 
        image.src = image_arr[random_number].src;
        image.alt = image_arr[random_number].src;

        // details generation
        const description = document.createElement('div');
        description.className = 'bg-black text-black p-4 rounded-lg lg:absolute lg:h-1/5 lg:group-hover:h-44 lg:group-hover:backdrop-blur-xl bg-white/30 lg:ease-in duration-300 lg:overflow-hidden lg:bottom-0 lg:w-full';

        // for name
        const detail1 = document.createElement('h1');
        detail1.className = 'text-2xl font-bold xl:text-3xl 2xl:text-4xl';
        detail1.textContent = image_arr[random_number].name;

        // for description
        const detail2 = document.createElement('h3');
        detail2.className = 'text-xl lg:hidden lg:group-hover:block xl:text-2xl 2xl:text-3xl';
        detail2.textContent = image_arr[random_number].desc;

        // for size
        const detail3 = document.createElement('h2');
        detail3.className = 'text-lg lg:hidden lg:group-hover:block xl:text-xl 2xl:text-2xl';
        detail3.textContent = image_arr[random_number].size;

        // for price
        const detail4 = document.createElement('h2');
        detail4.className = 'text-xl font-bold lg:hidden lg:group-hover:block xl:text-2xl 2xl:text-3xl';
        detail4.textContent = image_arr[random_number].price;

        description.appendChild(detail1);
        description.appendChild(detail2);
        description.appendChild(detail3);
        description.appendChild(detail4);

        card.appendChild(image);
        card.appendChild(description);

        main.appendChild(card);
    }
}