let element = document.getElementById('fullpage');
const Color = ['#fee2e2', '#fef9c3', '#dcfce7', '#dbeafe', '#e5e7eb']
const imageUrl = ['https://res.cloudinary.com/dmoka7ahz/image/upload/v1737520701/samsung_s21_jgi5sa.jpg',
    'https://res.cloudinary.com/dmoka7ahz/image/upload/v1737520701/apple_15_pro_hdzoaw.jpg',
    'https://res.cloudinary.com/dmoka7ahz/image/upload/v1737520700/samsung_fold_doshvw.webp',
    'https://res.cloudinary.com/dmoka7ahz/image/upload/v1737520964/vertu_knsmfg.webp',
    'https://res.cloudinary.com/dmoka7ahz/image/upload/v1737520700/samsung_s23_altra_zb3h8m.avif'
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


    ItemName.className = 'font-extrabold font-Lora text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl';
    ItemName.innerHTML = "Phone " + (i + 1);

    ItemDes.className = 'font-Worksans md:pt-2 line-clamp-3 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl';
    ItemDes.innerHTML = "Phoen" + (i + 1) + "Testing is the process of evaluating a system or its components to ensure it meets the specified requirements and functions correctly." + i + "th item";

    ItemPrice.className = 'pt-2 font-medium font-sans pb-3 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl ';
    ItemPrice.innerHTML = "$ " + Math.floor(Math.random() * (1000 - 500) + 500);

    AddButton.className = 'font-Lora font-bold group-hover:bg-blue-600 bg-blue-500 px-8 py-2 rounded-xl hover:bg-blue-900 text-bold lg:text-xl sm:text-lg text-md ';
    AddButton.innerHTML = "Order";

    Itemdiv.appendChild(ItemName);
    Itemdiv.appendChild(ItemDes);
    Itemdiv.appendChild(ItemPrice);
    Itemdiv.appendChild(AddButton);

    Itemdiv.className = 'rounded-b-xl m-0 p-3 pl-5 group-hover:text-black';

    setImage(ItemImage);

    ItemImage.className = 'w-full aspect-square	 h-auto rounded-t-xl group-hover:absolute group-hover:h-full  group-hover:rounded-xl group-hover:opacity-30 ease-in-out transition duration-1000'
    Section.className = 'group  flex flex-col  border-2 border-gray shadow-xl rounded-xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 hover:bg-opacity-0 hover:flex-col-reverse';
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