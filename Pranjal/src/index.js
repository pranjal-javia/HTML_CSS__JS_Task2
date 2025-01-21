const image_arr = [
  { src: "../images/image1.jpg", alt: "image1", name: "Nike", size: "Size: 8UK", price: "$150.00", desc: "Air Force 1"},
  { src: "../images/image2.jpg", alt: "image2", name: "Nike", size: "Size: 7UK", price: "$125.00", desc: "Next Nature Shoes"},
  { src: "../images/image3.jpg", alt: "image3", name: "Adiddas", size: "Size: 6UK", price: "$90.00", desc: "Running Shoes"},
  { src: "../images/image4.jpg", alt: "image4", name: "Nike", size: "Size: 9UK", price: "$110.00", desc: "Road Racing Shoes"},
];

document.addEventListener("DOMContentLoaded", getCards);

function getCards() {

    const main = document.getElementById("main_content");
    
    let prev = -1, random_number = -1;
    for(let i=0; i<20 ; i++){
        const card = document.createElement('div');
        card.className = 'flex flex-col relative rounded-lg shadow-2xl';

        while(random_number == prev){
            random_number = Math.floor(Math.random() * 4);
        }
        prev = random_number;

        // image generation
        const image = document.createElement('img');
        image.className = 'w-64 h-64 md:h-64 lg:h-56 shadow-2xl rounded-t-lg';
 
        image.src = image_arr[random_number].src;
        image.alt = image_arr[random_number].src;

        // details generation
        const description = document.createElement('div');
        description.className = 'bg-black text-white p-4 rounded-b-lg absolute w-64 bottom-0 overflow-hidden sm:w-64 md:w-64 lg:w-full';
        
        // for name
        const detail1 = document.createElement('h1');
        detail1.className = 'text-2xl font-bold';
        detail1.textContent = image_arr[random_number].name;

        // for description
        const detail2 = document.createElement('h3');
        detail2.className = 'text-xl';
        detail2.textContent = image_arr[random_number].desc;

        // for size
        const detail3 = document.createElement('h2');
        detail3.className = 'text-xl font-bold';
        detail3.textContent = image_arr[random_number].size;

        // for price
        const detail4 = document.createElement('h2');
        detail4.className = 'text-xl';
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

// getCards()