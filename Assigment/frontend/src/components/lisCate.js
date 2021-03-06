import CategoryesAPI from "../api/categoryesAPI.js";
import { reRender,$ } from '../utils';
const lisCate = {
  async render() {
    const { data: cate } = await CategoryesAPI.getAll();
    const a = cate
      .map((category, index) => {
        return /*html*/`
               <tr>
                  <td>${index+1}</td>
                  <td>${category.name}</td>
                  <td>	<a href="/#/categoryedit/${category.id}"class="btn btn-primary" style="color:#fff">Update</a>
                  <button class="btn btn-success btn_delete" data-id="${category.id}">Delete</button></td>
                </tr>

`;
      })
      .join("");
    return `
      
      <div class="table-responsive">
        <table class="table table-striped table-sm" id="list_product">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>             
            ${a}
          </tbody>
        </table>
      </div>
`;
  },
  async reRender() {
    const btns = $("#list_product .btn_delete");
    console.log(btns);
    btns.forEach(btn_delete => {
      const id =btn_delete.dataset.id;
   
      btn_delete.addEventListener('click',function(){
        const question= confirm('bạn có chắc muốn xóa hay không');
        if(question){
            CategoryesAPI.remove(id)
        reRender(CategoryesAPI,'#list_product');
        }
       
      })
    });
  }
};
export default lisCate;
