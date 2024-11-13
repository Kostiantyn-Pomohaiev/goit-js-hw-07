const array = [];
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      alt: "Alpine Spring Meadows",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      alt: "Nature Landscape",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      alt: "Lighthouse Coast Sea",
    },
  ];


  const list = document.querySelector(".gallery");

  for (let i = 0; i < images.length; i += 1) {
  const l = document.createElement("li"); 
  const image = document.createElement("img");
  l.append(image); 
  image.src=images[i].url;
  image.alt = images[i].alt;
  array[i]=l;
  console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" /> 
  } 

  list.append(...array);


// // list.append(images);

// const markup = images
//   .map((image) => `<li class="list-item new">${image}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Gallery</h2>");


// list.append(images);

