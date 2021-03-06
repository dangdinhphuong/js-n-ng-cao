import ProductAPI from "../api/productsApi";
import { reRender,$ } from '../utils';
const ListProduct = {
  async render() {
    const { data: products } = await ProductAPI.getAll();
    const a = products
      .map((product, index) => {
        return /*html*/`
               <tr>
                  <td>${index+1}</td>
                  <td><img src="${product.image}" alt="${product.name}" style="width:50px"></td>
                  <td>${product.name}</td>
                  <td>${product.price} USD</td>
                  <td>	<a href="/#/productedit/${product.id}/eidt"class="btn btn-primary" style="color:#fff">Update</a>
                  <button class="btn btn-success btn_delete" data-id="${product.id}">Delete</button></td>
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
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
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
        const question= confirm('bạn có chắc muốn xóa hay không2222222');
        if(question){
           ProductAPI.remove(id)
        reRender(ListProduct,'#list_product');
        }
       
      })
    });
  }
};
export default ListProduct;
