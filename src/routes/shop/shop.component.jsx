import React, { useContext } from "react";
import "./shop.styles.scss";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";


function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {categoriesMap && Object.keys(categoriesMap).map((title) => (
        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
      ))}
    </div>
  );
}

export default Shop;