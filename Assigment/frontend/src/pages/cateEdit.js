import { reRender, $, parseRequestUrl } from "../utils";
import slidebarAdmin from "../components/slidebarAdmin";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import CategoryesAPI from "../api/categoryesAPI";
const cateEdit = {
  async render() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: category } = await CategoryesAPI.get(id);
    return /* html*/ `
    ${await slidebarAdmin.render()}
    <form id="form_update">

    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text"  class="form-control-plaintext" value="${
          category.name
        }" id="name" >
      </div>
    </div>  
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
  </form>
  ${await footerSlibarAdmin.render()}     
        `;
  },

  async afterRender() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: category } = await CategoryesAPI.get(id);
    $("#form_update").addEventListener("submit", (e) => {
      const categorys = {
        ...category,
        name: $("#name").value,
        status: false,
      };
      console.log("new", categorys);
      CategoryesAPI.update(id, categorys);
      window.location.hash = "/listcate";
    });
  },
};
export default cateEdit;
