const foldingUpInfo = () => {
  const arrowBtn = document.querySelector('.arrow-info');
  const hiddenText = document.querySelector('.text-information');

  console.log(arrowBtn);
  console.log(hiddenText.style);

  arrowBtn.addEventListener('click', () => hiddenText.style.display === 'none' ? 'block' : 'none');
}

foldingUpInfo();