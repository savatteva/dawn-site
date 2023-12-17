const search = () => {
  const input = document.querySelector('.search-form');
  const searchBtn = document.querySelector('.search-btn');

  const creatingItems = (items) => {
    const allItemsContainer = document.querySelector('.list-of-goods');
    allItemsContainer.innerHTML = '';
    
    items.forEach(item => {
      const itemContainer = document.createElement('li');
      
      itemContainer.classList.add('col-3', 'list-of-items__hover');
      itemContainer.innerHTML = `
      <a class="link-underline link-dark link-underline-opacity-0" href="/pages/product_page/${item.id}.html">
        <article id=${item.id}}>
            <img
            class="img-fluid back-in-stock__bags"
            src=${item.img}
            alt=${item.name}>
            <div class="my-3">
              <p class="body-text2">${item.name}</p>
              <p>$${item.price}CAD</p>
            </div>
        </article>
      </a>
      `
      allItemsContainer.append(itemContainer)
    }) 
  }

  const getData = (value) => {
    fetch("/database/database.json")
    .then((res) => res.json())
    .then((data) => {
      const array = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
      localStorage.setItem('items', JSON.stringify(array));
    })
  };

  if(localStorage.getItem('items') && window.location.pathname === "/pages/search.html") {
    creatingItems(JSON.parse(localStorage.getItem('items')));
  }

  searchBtn.addEventListener('click', () => {
    getData(input.value);
  })
  

}

search();