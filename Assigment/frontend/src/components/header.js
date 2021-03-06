import axios from "axios";
import CategoryesAPI from "../api/categoryesAPI";

const Header = {
  async render() {
    try {
      const { data: category } = await CategoryesAPI.getAll();
      console.log(category);
      const result = category
        .map((categorys) => {
          return `				
          <li><a href="/#/cate/${categorys.id}">${categorys.name}</a></li>
        `;
        })
        .join("");


      return `   
      			${result}
    `;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Header;