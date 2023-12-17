const getGoods = () => {
  const links = document.querySelectorAll('.dropdown-item-link');
  const creatingItems = (items) => {
    const allItemsContainer = document.querySelector('.list-of-goods');
    allItemsContainer.innerHTML = '';
    
    items.forEach(item => {
      const itemContainer = document.createElement('li');
      const headerSection = document.querySelector('.header-of-filter');
      const totalFilterResult = document.querySelector('.result-filter');

      totalFilterResult.textContent = `${items.length} results`

      if(items.length === 10) {
        headerSection.textContent = `Collection`;
      } else {
        headerSection.textContent = item.category;
      }
      
      itemContainer.classList.add('col-3', 'list-of-items__hover');
      itemContainer.innerHTML = `
      <a class="link-underline link-dark link-underline-opacity-0" href="/pages/product_page/html">
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

  const getData = (value, category) => {
    fetch("/database/database.json")
    .then((res) => res.json())
    .then((data) => {
      const array = category ? data.filter((item) => item[category]=== value) : data
      localStorage.setItem('items', JSON.stringify(array));
    })
  };

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const linkValue = link.textContent;
      const category = link.getAttribute('data-field');
      getData(linkValue, category);
    })
  });

  if(localStorage.getItem('items') && window.location.pathname === "/pages/collection.html") {
    creatingItems(JSON.parse(localStorage.getItem('items')));
  }
};

getGoods();