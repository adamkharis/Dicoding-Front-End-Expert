import HomeRestaurant from '../views/pages/home-Resto'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'

const routes = {
  '/': HomeRestaurant, // default page
  '/home-resto': HomeRestaurant,
  '/detail/:id': Detail,
  '/like': Like
}

export default routes
