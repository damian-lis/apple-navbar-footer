const filterByKeywords = (items, keywords) => {
  return items
    .filter((item) => item.name.toLowerCase().includes(keywords.toLowerCase()))
    .slice(0, 5);
};

export default filterByKeywords;
