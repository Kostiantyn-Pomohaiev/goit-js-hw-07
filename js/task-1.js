const len = document.querySelector('ul').children.length;
console.log("Number of categories: " + len);

const arr = document.querySelectorAll('li.item');

arr.forEach((item) => {
    const cat = item.querySelector('h2')
    const sum = item.querySelector("ul").children.length
    console.log("Category: " + cat.textContent)
    console.log("Elements: " + sum)
})
