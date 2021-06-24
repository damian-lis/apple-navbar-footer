export const navIcons = {
  hamburgerIcon: 'fas fa-bars',
  logoIcon: 'fas fa-leaf',
  searchIcon: 'fas fa-search',
  bagIcon: 'fas fa-shopping-bag',
  closeIcon: 'fas fa-times'
};

export const navItems = [
  { name: 'Mac', linkTo: '/mac' },
  { name: 'iPad', linkTo: '/ipad' },
  { name: 'iPhone', linkTo: '/iphone' },
  { name: 'Watch', linkTo: '/watch' },
  { name: 'Wsparcie', linkTo: '/support' }
];

export const bagItems = [
  { name: 'Torba', linkTo: '/shop/bag', icon: 'fas fa-shopping-bag' },
  { name: 'Ulubione', linkTo: '/shop/favourites', icon: 'far fa-heart' },
  { name: 'Zamówienia', linkTo: '/shop/orders', icon: 'fas fa-box-open' },
  { name: 'Konto', linkTo: '/account', icon: 'fas fa-cog' },
  {
    name: 'Zaloguj się',
    linkTo: '/account/signIn',
    icon: 'fas fa-user-circle'
  }
];
