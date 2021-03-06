import { $ } from "../utils.js";
import slidebarAdmin from "../components/slidebarAdmin";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import CategoryesAPI from "../api/categoryesAPI.js";
const cateAdd = {
  async render() {
    try {
      return /*html*/ `
        
        ${await slidebarAdmin.render()}
        <form id="form_add">

        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text"  class="form-control-plaintext" id="name" >
          </div>
        </div>  
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
      ${await footerSlibarAdmin.render()}
      `;
    } catch (error) {
      console.log(error);
    }
  },

  afterRender() {
    $("#form_add").addEventListener("submit", (e) => {
      e.preventDefault();
          const cate = {
            id: Math.random().toString(36).substr(2, 9),            
            name: $("#name").value,
            status: false,
          };
          console.log(cate);
          CategoryesAPI.add(cate);
          window.location.hash = "/cateAdd";
     
    });
  },
};
export default cateAdd;
