import { categories } from "../data";
import "../styles/CategoriesStyle/Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category" key={category.id}>
          <div className="category_bg">
            <img src={category.img} />
            <div className="category_bg_overlay"></div>
          </div>

          <div className="category_text">
            <h1>{category.title}</h1>
            <a>SHOP NOW</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
