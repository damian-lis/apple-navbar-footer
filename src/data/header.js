export const navIcons = {
  hamburgerIcon: 'fas fa-bars',
  logoIcon: 'images/logo.svg',
  searchIcon: 'fas fa-search',
  bagIcon: 'fas fa-shopping-bag',
  closeIcon: 'fas fa-times'
};

export const navItems = [
  { name: 'Mac', linkTo: '/mac' },
  { name: 'iPad', linkTo: '/iPad' },
  { name: 'iPhone', linkTo: '/iPhone' },
  { name: 'Zegarki', linkTo: '/zegarki' },
  { name: 'Wsparcie', linkTo: '/wsparcie' }
];

export const bagItems = [
  { name: 'Torba', linkTo: '/torba', icon: 'fas fa-shopping-bag' },
  { name: 'Ulubione', linkTo: '/ulubione', icon: 'far fa-heart' },
  { name: 'Zamówienia', linkTo: '/zamowienia', icon: 'fas fa-box-open' },
  { name: 'Konto', linkTo: '/konto', icon: 'fas fa-cog' },
  {
    name: 'Zaloguj się',
    linkTo: '/zaloguj-sie',
    icon: 'fas fa-user-circle'
  }
];

export const resultItems = {
  elements: [
    { name: 'Akcesoria', linkTo: '/akcesoria' },
    { name: 'AirPods', linkTo: '/airPods' },
    { name: 'iOS', linkTo: '/iOS' },
    { name: 'Karty upominkowe', linkTo: '/karty-upominkowe' },
    { name: 'iPhone SE', linkTo: '/iPhone-SE' },
    { name: 'iPhone X', linkTo: '/iPhone-X' },
    { name: 'iPhone 12', linkTo: '/iPhone-12' },
    { name: 'MacBookAir', linkTo: '/macbook-air' },
    { name: 'MacBookPro', linkTo: '/macbook-pro' },
    { name: 'Mac mini', linkTo: '/mac-mini' }
  ],
  suggestions: [
    { name: 'Akcesoria do Iphone', linkTo: '/akcesoria-do-iPhonea' },
    { name: 'Iphone - wsparcie', linkTo: '/iPhone-wsparcie' },
    { name: 'Akcesoria MacbookAir', linkTo: '/akcesoria-macbook-air' },
    { name: 'Akcesoria MacbookPro', linkTo: '/akcesoria-macbook-pro' },
    { name: 'Akcesoria Mac mini', linkTo: '/akcesoria-mac-mini' },
    { name: 'Mac - wsparcie', linkTo: '/mac-wsparcie' },
    { name: 'Pomoc w przypadku utraconego koszyka', linkTo: '/pomoc-koszyk' },
    { name: 'Problem w logowaniu', linkTo: '/logowanie-problem' },
    { name: 'Problem z rejestracją', linkTo: '/rejestracja-problem' },
    { name: 'Zaloguj się', linkTo: '/login', to: '/zaloguj-sie' },
    { name: 'Zarejestuj się', linkTo: '/zarejestruj-sie' },
    { name: 'Pomoc', linkTo: '/pomoc' },
    { name: 'Konto uzytkownika', linkTo: '/konto' }
  ]
};
