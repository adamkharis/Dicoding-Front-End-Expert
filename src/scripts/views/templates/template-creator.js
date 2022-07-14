import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.LARGE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <p>${
      restaurant.categories.map((category) => `<p>${category.name}</p>`).join('')}   
    </p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <br>

  <h3>Menu</h3>
    <h4>Makanan<h4>
    <p>
      ${restaurant.menus.foods.map((food) => `<p>${food.name}</p>`).join('')}
    </p>
    <br>
    <h4>Minuman<h4>
    <p>
      ${restaurant.menus.drinks.map((drink) => `<p>${drink.name}</p>`).join('')}   
    </p>
    
  </div>

  <br>

  <div class="restaurant__overview">
    <h3>Customer Review</h3>
    ${restaurant.customerReviews.map((customer) => `<p>${customer.name}: ${customer.review} - ${customer.date} </p>`).join('')}
  </div>
`

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name} + ${restaurant.city}"
           data-src="${CONFIG.SMALL_IMAGE + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name} - ${restaurant.city}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <ion-icon name="heart-outline"></ion-icon>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <ion-icon name="heart"></ion-icon>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
