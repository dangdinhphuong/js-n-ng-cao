import { $ } from "../utils.js";
import slidebarAdmin from "../components/slidebarAdmin";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import ProductAPI from "../api/productsApi";
import CategoryesAPI from "../api/categoryesAPI";
import firebase from "../firebase";

const ProductAdd = {
  async render() {
    try {
      const { data: category } = await CategoryesAPI.getAll();

      const result = category
        .map((cate) => {
          return `				
           		<option value="${cate.id}">${cate.name}</option>	
        `;
        })
        .join("");

      return `
        
        ${await slidebarAdmin.render()}
        <form id="form_add">

        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text"  class="form-control-plaintext" id="name" >
          </div>
        </div>
        <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Hãng xe</label>
        <div class="col-sm-10">
        <select class="form-control" id="cate_id">
       ${result}
      
      </select>
          
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">ảnh</label>
        <div class="col-sm-10">
        <input type="file" class="form-control-file" id="image">
        </div>
      </div>
      <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">giá</label>
      <div class="col-sm-10">
      <input type="text"  class="form-control-plaintext" id="price" >
      </div>
    </div>
    <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Mô tả</label>
    <div class="col-sm-10">
    <textarea class="form-control" id="detail" rows="3"></textarea>
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

 async afterRender() {
    $("#form_add").addEventListener("submit", (e) => {
      e.preventDefault();
      const productImage = $("#image").files[0];
      console.log(productImage);

     let storageRef = firebase.storage().ref(`images/${productImage.name}`);

     console.log(storageRef);

      storageRef.put(productImage).then(function () {
        console.log("upload thanh cong");
        storageRef.getDownloadURL().then((url) => {
          console.log(url);
          const imagePreview = document.querySelector("#image");
          imagePreview.src = url;
          const product = {
            id: Math.random().toString(36).substr(2,9),
            cate_id: $("#cate_id").value,
            name: $("#name").value,
            image: url,
            price: $("#price").value,
            status: false,
            detail: $("#detail").value,
          };
          console.log(product);
          ProductAPI.add(product);
          window.location.hash='/productAdd';
       });
     });
    });
  },
};
export default ProductAdd;
