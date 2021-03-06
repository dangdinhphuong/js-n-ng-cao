import { reRender, $, parseRequestUrl } from "../utils";
import slidebarAdmin from "../components/slidebarAdmin";
import footerSlibarAdmin from "../components/footerSlibarAdmin";
import aboutEdit from "../api/aboutAPI.js";
import firebase from "../firebase";
const cateEdit = {
  async render() {
    const { data: category } = await aboutEdit.get(1);
    return /* html*/ `
    ${await slidebarAdmin.render()}
    <form id="form_update">
    <div class="form-group row">
    <label for="image" class="col-sm-2 col-form-label">ảnh</label>
    <div class="col-sm-10">
    <input type="file" class="form-control-file" id="image">
    <input type="hidden" class="form-control-file" id="images"value="${
      category["images"]
    }">       
    <img src="${category["images"]}" alt="">
    </div>
  </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">        
        <textarea class="form-control" id="detail" rows="3">${
          category["detail"]
        }</textarea>                                         
      </div>
    </div>  
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
  </form>
  ${await footerSlibarAdmin.render()}     
        `;
  },

  async afterRender() {
    // const { id } = parseRequestUrl();
    // console.log(id);
    const { data: category } = await aboutEdit.get(1);
    // $("#form_update").addEventListener("submit", (e) => {
    //   const categorys = {
    //     ...category,
    //     name: $("#name").value,
    //     detail:$("#detail").value,
    //     status: false,
    //   };
    //   console.log("new", categorys);
    // //   CategoryesAPI.update(id, categorys);
    // //   window.location.hash = "/listcate";
    // });

    $("#form_update").addEventListener("submit", (e) => {
      const productImage = $("#image").files[0];
      console.log("ảnh:" + productImage);

      if (!productImage) {
        // nếu không tồn tại thêm ảnh thì ảnh giữ nguyên
        console.log("old", category);
        const categorys = {
          ...category,
          detail: $("#detail").value,
        };
        console.log("new", categorys);
        aboutEdit.update(1, categorys);
      window.location.hash = "/listcate";
      }
      else{
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        console.log(storageRef);
        storageRef.put(productImage).then(function () {
          console.log("upload thanh cong");
          storageRef.getDownloadURL().then((url) => {
            console.log(url);
            const imagePreview = document.querySelector("#image");
            imagePreview.src = url;
            console.log('old',category);
            const categorys = {
                ...category,          
              images: url,
              detail: $("#detail").value,
            };
            console.log('new',categorys);
            aboutEdit.update(1, categorys);
            window.location.hash = "/listcate";
          });
        });
      }
    });
  },
};
export default cateEdit;
