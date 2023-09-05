const generateMetadata = ({ page }) => {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    image: page.image,
  };
};

export default generateMetadata;