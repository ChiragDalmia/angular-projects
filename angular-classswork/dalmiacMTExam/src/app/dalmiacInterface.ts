export interface Restaurantinfo {
  name: string;
  address: string;
  province: string;
  postalCode: string;
  country: string;
  contactNumber: string;
}

export interface RestaurantMenu {
  name: string;
  calories: number;
  price: number;
  section: string;
}
