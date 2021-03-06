import { parseRequestUrl } from "../utils.js";// lấy id từ trên url
 import ProductAPI from "../api/productsApi";
 import cate_slibar from'../components/category_slibar.js';
const CategoryPages = {
  async render() {
    try {
      const { id } = parseRequestUrl();
      const { data: products } = await ProductAPI.getAll();
      let result= products.filter(products=>products.cate_id== id);
      console.log(result);
      const result2= result.map((product)=>{
          return /*html */`
          <article class="hentry" style="float: left; height:300px">
          <header class="entry-header">
          <div class="entry-thumbnail">
              <a href="/#/detail/${product.id}">
              <img src="${product.image}"style="width:300px; height:200px" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="${products.name}"/>
              </a>
          </div>
          <h2 class="entry-title">
          <a class='/#/detail/${product.id}' href='portfolio-category.html'>${product.price} USD</a> <br></h2>
          <h3> <a href="/#/detail/${product.id}" rel="bookmark">${product.name}</a></h3>
          

          </header>
          </article>	
          
         	`
      }).join("");
      
      return /*html */`
		
  <div id="primary" class="content-area column two-thirds">
				<main id="main" class="site-main" role="main">
				<div class="grid bloggrid">
        ${result2}															
				</div>
				<div class="clearfix">
				</div>
				<nav class="pagination"></nav>
				</main>
				<!-- #main -->
			</div>	

${await cate_slibar.render()}

    
      `;
    } 
    
    
    catch (error) {
      console.log(error);
    }
  },
};
export default CategoryPages;
