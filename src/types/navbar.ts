export interface Navbar {
  name: string;
  src: string;
}

const navbars: Navbar[] = [
  { name: 'All Resto', src: '/icons/nav-all-resto.png' },
  { name: 'Nearby', src: '/icons/nav-nearby.png' },
  { name: 'Discount', src: '/icons/nav-discount.png' },
  { name: 'Best Seller', src: '/icons/nav-best-seller.png' },
  { name: 'Deliver', src: '/icons/nav-delivery.png' },
  { name: 'Lunch', src: '/icons/nav-lunch.png' },
];

export default navbars;
