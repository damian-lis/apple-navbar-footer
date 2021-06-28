export default (pagePathsCollection) => {
  let combinedPagePaths = [];

  pagePathsCollection.map((pagePathCollection) => {
    pagePathCollection.map((pagePath) => {
      pagePath.links
        ? pagePath.links.map((pagePath) => combinedPagePaths.push(pagePath))
        : combinedPagePaths.push(pagePath);
    });
  });

  const pagePathsLinks = combinedPagePaths.map((pagePath) => pagePath.linkTo);
  const pagePathsNames = combinedPagePaths.map((pagePath) => pagePath.name);

  const correctedPagePathsLinks = [...new Set(pagePathsLinks)];
  const correctedPagePathsNames = [...new Set(pagePathsNames)];

  return { pageLinks: correctedPagePathsLinks, pageNames: correctedPagePathsNames };
};
