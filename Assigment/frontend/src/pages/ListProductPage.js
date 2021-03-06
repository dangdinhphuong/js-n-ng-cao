import slidebarAdmin from "../components/slidebarAdmin";
import ListProduct from"../components/ListProduct.js";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import { $ } from '../utils.js';
const ListProductPage={
   async render(){
      return`
      ${await slidebarAdmin.render()}
      <a href="/#/productadd"class="btn btn-warning">Add Products2</a>
  ${await ListProduct .render()}
        ${await footerSlibarAdmin.render()}
`;  
    },
   
    async afterRender(){
        return`${await ListProduct.reRender()}`;
    }


}
export default ListProductPage;



