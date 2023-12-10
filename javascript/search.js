const search = () => {
  const input = document.querySelector('.search-form');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
  })
}

// const getData = () => {
//   const navItem = document.querySelectorAll('.dropdown-item-view');
//   const creatingGoods = (goods) => {
//     const listOfGoods = document.querySelector('.list-of-goods'); 
//     goods.forEach((i) => {
//       const goodCreating = document.createElement('li');

//       goodCreating.classList.add('col-3', 'list-of-items__hover');
//       goodCreating.innerHTML = `
//       <a class="link-underline link-dark link-underline-opacity-0" href="#">
//         <article ${i.id}>
//           <img 
//           class="img-fluid back-in-stock__bags"
//           src=${i.img}
//           alt=${i.name}>
//           <div class="my-3">
//             <p class="body-text2">${i.name}</p>
//             <p>$${i.price} CAD</p>
//           </div>
//         </article>
//       </a>
//       `
//       listOfGoods.append(goodCreating)
//     })
//   }

// }

// const getInfo = (value, category) => {
//   fetch('/database/database.json')
//   .then((res) => res.json())
//   .then((data) => {
//     const arrayOfGoods = category ? data.filter((i) => i.category === value) : data;
//     localStorage.setItem('goods', JSON.stringify(arrayOfGoods));
//     creatingGoods(arrayOfGoods)
//     const searchingResult = document.querySelector('.search-result')
//     searchingResult.textContent = `${arrayOfGoods.length} results found`
//   })
// };

search();