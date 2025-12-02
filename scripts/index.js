let bagitems;
onload();


function onload() {
  let bagitemsStr = localStorage.getItem('bagitems');
  bagitems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
  DisplayItemsOnHomePage();
  DisplayBagItemCount();

}

function addToBag(itemId) {
  bagitems.push(itemId);
  localStorage.setItem('bagitems', JSON.stringify(bagitems))
  DisplayBagItemCount();
}

function DisplayBagItemCount() {
  let bagitemcountElement = document.querySelector('.bag-item-count');
  if (bagitems.length > 0) {
    bagitemcountElement.style.visibility = 'visible';
    bagitemcountElement.innerText = bagitems.length;
  }
  else {
    bagitemcountElement.style.visibility = 'hidden';
  }
}

function DisplayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container')
  if (!itemsContainerElement) { return; }
  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `
        <div class="item-container">
          <img class="item-image" src="${item.image}" alt="item-image" />
          <div class="ratings">${item.rating.stars}⭐ | ${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% Off)</span>
          </div>
          <button class="btn-add-bag" onclick= "addToBag(${item.id})">Add To Bag</button>
        </div>`
  });
  console.log(itemsContainerElement);
  itemsContainerElement.innerHTML = innerHTML;
}
