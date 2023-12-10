const getData = () => {
  const navItem = document.querySelectorAll('.dropdown-item-view');
  const savingGoods = JSON.parse(localStorage.getItem('goods'));
  const creatingGoods = (goods) => {
    const listOfGoods = document.querySelector('.list-of-goods'); 

    listOfGoods.innerHTML = '';
    goods.forEach((i) => {
      const goodCreating = document.createElement('li');

      goodCreating.classList.add('col-3', 'list-of-items__hover');
      goodCreating.innerHTML = `
      <a class="link-underline link-dark link-underline-opacity-0" href="#">
        <article ${i.id}>
          <img 
          class="img-fluid back-in-stock__bags"
          src=${i.img}
          alt=${i.name}>
          <div class="my-3">
            <p class="body-text2">${i.name}</p>
            <p>$${i.price} CAD</p>
          </div>
        </article>
      </a>
      `
      listOfGoods.append(goodCreating);
    })
  }

  const getInfo = (value, category) => {
    fetch('/database/database.json')
    .then((res) => res.json())
    .then((data) => {
      const arrayOfGoods = category ? data.filter((i) => i.category === value) : data;
      localStorage.setItem('goods', JSON.stringify(arrayOfGoods));
      creatingGoods(arrayOfGoods);
      const searchingResult = document.getElementsByClassName('search-result');
      searchingResult.textContent = `${arrayOfGoods.length} results found`
    })
  };

  navItem.forEach((i) => {
    i.addEventListener('click', () => {
      const linkValue = i.textContent;
      const category = i.getAttribute('data-field');
      getInfo(linkValue, category);
    });
  });

};

getData();