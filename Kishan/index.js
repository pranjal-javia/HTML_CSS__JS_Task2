let element = document.getElementById('fullpage');
const Color = ['#fee2e2', '#fef9c3', '#dcfce7', '#dbeafe', '#e5e7eb']
const imageUrl = ['https://pixabay.com/get/g72082af0ed3f042e524950529244f47eff91acbfc8c29c3c073811d6811d88630f533930bf04904979d94f23a0369c0a76b521bd1d236468d403bf5c9b5e7e4a_1280.jpg',
    'https://pixabay.com/get/gfd626f7bdee8eeb857bca409cc85022b06507d4da31eee7d2405f12fe1ba9dca4d42a4e25676a92d0c46c2e7fdeb8d2b4692fe5c06d748dd81d18c5280578737_1280.png',
    'https://pixabay.com/get/gd6ebe827028c612102f8948fc9abf1194cf235e6656bea5c0ed5fdaf13343e967c492fe1f33a8d61963e5c02711db0d0d5cd04bcae601ae4e08b92edc06bb0bc_1280.jpg',
    'https://pixabay.com/get/g377664e8ce3b51a38babf4030e326d5665579a9f4b26e2c31cd64a5fc4a3496630b2e3782e87a9a8e298a5db4c88be158db0676350146fb780459e614477481c_1280.jpg',
    'https://pixabay.com/get/gf07e50ee94c8b47538a14745b256ef435168c2f5620d4c28bfbaaa011cba9d18a8f162df5665f061845d0c2e2b04b22dbcd35c69c4f1a8944470108fb70f0bcd_1280.jpg'
]
let prevImage = -1;
let prevColorNo = -1;


for (let i = 0; i < 15; i++) {

    const Section = document.createElement('section');
    const ItemImage = document.createElement('img');
    const Itemdiv = document.createElement('div');
    const ItemName = document.createElement('h1');
    const ItemDes = document.createElement('p');
    const ItemPrice = document.createElement('h2');
    const AddButton = document.createElement('button');


    ItemName.className = 'font-extrabold font-serif';
    ItemName.innerHTML = "Item Header " + i + 1;

    ItemDes.className = 'font-sans';
    ItemDes.innerHTML = "description of " + i + 1 + "th item";

    ItemPrice.className = 'font-medium font-sans pb-3';
    ItemPrice.innerHTML = "$ " + Math.floor(Math.random() * (1000 - 500) + 500);

    AddButton.className = 'bg-blue-500 px-6 py-1 rounded-xl';
    AddButton.innerHTML = "Submit";

    Itemdiv.appendChild(ItemName);
    Itemdiv.appendChild(ItemDes);
    Itemdiv.appendChild(ItemPrice);
    Itemdiv.appendChild(AddButton);

    Itemdiv.className = 'm-0 p-3 pl-5';
    setImage(ItemImage);

    ItemImage.className = 'w-full aspect-square	 h-auto rounded-t-xl sm:rounded-t-xl lg:w-1/2  lg:rounded-l-xl'
    Section.className = 'flex flex-col  border-2 border-gray shadow-xl rounded-xl m-2 lg:flex-row hover:m-0';

    Section.appendChild(ItemImage);
    Section.appendChild(Itemdiv)



    setcolor(Section);
    element.appendChild(Section);

}

function setcolor(section) {
    const colorNo = Math.floor(Math.random() * Color.length);
    if (colorNo == prevColorNo) {
        return setcolor(section);

    } else {
        section.style.backgroundColor = Color[colorNo];
        prevColorNo = colorNo;
    }
}

function setImage(image) {
    const imgno = Math.floor(Math.random() * imageUrl.length)
    if (imgno == prevImage) {
        return setImage(image)
    } else {
        image.src = imageUrl[imgno];
        prevImage = imgno;
    }
}