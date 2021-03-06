import { reRender, $, parseRequestUrl } from "../utils";
import slidebarAdmin from "../components/slidebarAdmin";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import ProductAPI from "../api/productsApi";
import CategoryesAPI from "../api/categoryesAPI";
import firebase from "../firebase";
const editProduct = {
  async render() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: product } = await ProductAPI.get(id);
    // const { data: products } = await ProductAPI.getAll();
    console.log(product["cate_id"]);

    const { data: category } = await CategoryesAPI.getAll();
    const result2 = category.filter(
      (category) => category.id == product.cate_id
    );
    const result1 = category.filter(
      (category) => category.id != product.cate_id
    );
    console.log(result2[0]);
    const result = result1
      .map((cate) => {
        return `	
            			
                     <option value="${cate.id}">${cate.name}</option>	
          `;
      })
      .join("");

    console.log(result);
    return /* html*/ `
        ${await slidebarAdmin.render()}
        <form id="form_update">

        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text"  class="form-control-plaintext" value="${
              product["name"]
            }" id="name" >
          </div>
        </div>
        <div class="form-group row">
        <label for="cate_id" class="col-sm-2 col-form-label">Hãng xe</label>
        <div class="col-sm-10">
        <select class="form-control" id="cate_id">
        <option value="${result2[0]["id"]}"selected>${
      result2[0]["name"]
    }</option>	
       ${result}
      </select>

        </div>
      </div>
      <div class="form-group row">
        <label for="image" class="col-sm-2 col-form-label">ảnh</label>
        <div class="col-sm-10">
        <input type="file" class="form-control-file" id="image">
        <input type="hidden" class="form-control-file" id="images"value="${
          product["image"]
        }">
        <img src="${product["image"]}" alt="">
        </div>
      </div>
      <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">giá</label>
      <div class="col-sm-10">
      <input type="text"  class="form-control-plaintext" id="price" value="${
        product["price"]
      }" style="border: 1px solid #ccc;" >
      </div>
    </div>
    <div class="form-group row">
    <label for="detail" class="col-sm-2 col-form-label">Mô tả</label>
    <div class="col-sm-10">
    <textarea class="form-control" id="detail" rows="3">${
      product["detail"]
    }</textarea>
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
    const { data: product } = await ProductAPI.get(id);
    $("#form_update").addEventListener("submit",  (e) => {
      e.preventDefault();
      const productImage = $("#image").files[0];
      console.log("ảnh:" + productImage);

      if (!productImage) { // nếu không tồn tại thêm ảnh thì ảnh giữ nguyên       
        console.log('old',product);
        const products = {
                     ...product,               
                   cate_id: $("#cate_id").value,
                   name: $("#name").value,
                 //   image: url,
                   price: $("#price").value,
                   status: false,
                   detail: $("#detail").value,
                 };
                 console.log('new',products);
                 ProductAPI.update(id,products);
              window.location.hash='/listproduct';


      } else {// nếu thêm ảnh thì add lên firebase       
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        console.log(storageRef);
        storageRef.put(productImage).then(function () {
          console.log("upload thanh cong");
          storageRef.getDownloadURL().then((url) => {
            console.log(url);
            const imagePreview = document.querySelector("#image");
            imagePreview.src = url;
            console.log('old',product);
            const products = {
                ...product,           
              cate_id: $("#cate_id").value,
              name: $("#name").value,
              image: url,
              price: $("#price").value,
              status: false,
              detail: $("#detail").value,
            };
            console.log('new',products);
              ProductAPI.update(id,products);
              window.location.hash='/listproduct';
          });
        });
      }

    
    });
  },
};
export default editProduct;
