import slidebarAdmin from "../components/slidebarAdmin";
import lisCate from"../components/lisCate.js";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import { $ } from '../utils';
const listCategoryes={
   async render(){
      return`
      ${await slidebarAdmin.render()}
      <a href="/#/cateadd"class="btn btn-warning">Add Categoryes</a>
  ${await lisCate .render()}
        ${await footerSlibarAdmin.render()}
`;  
    },
   
    async afaterRender(){
        return`${await lisCate.reRender()}`;
    }


}
export default listCategoryes;



