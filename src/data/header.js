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

export const resultItems = {
  items: [
    { name: 'Akcesoria', to: '/akcesoria' },
    { name: 'AirPods', to: '/airpods' },
    { name: 'iOS', to: '/iOS' },
    { name: 'Karty upominkowe', to: '/karyupominkowe' },
    { name: 'iPhone SE', to: '/iphone-se' },
    { name: 'iPhone X', to: '/iphone-X' },
    { name: 'iPhone 12', to: '/iphone-12' },
    { name: 'MacBookAir', to: '/macbookair' },
    { name: 'MacBookPro', to: '/macbookpro' },
    { name: 'Mac mini', to: '/macmini' }
  ],
  suggestions: [
    { name: 'Akcesoria do Iphone' },
    { name: 'Iphone - wsparcie' },
    { name: 'Akcesoria MacbookAir' },
    { name: 'Akcesoria MacbookPro' },
    { name: 'Akcesoria Mac mini' },
    { name: 'Mac- wsparcie' },
    { name: 'Pomoc w przypadku utraconego koszyka' },
    { name: 'Problem w logowaniu' },
    { name: 'Problem z rejestracją' },
    { name: 'Zaloguj się', to: '/login' },
    { name: 'Zarejestuj się', to: '/register' },
    { name: 'Pomoc', to: '/suppor' },
    { name: 'Konto uzytkownika', to: '/user/panel' }
  ]
};
