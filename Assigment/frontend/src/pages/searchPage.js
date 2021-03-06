import { reRender, $, parseRequestUrl } from "../utils";
import cate_slibar from'../components/category_slibar.js';
import ProductAPI from "../api/productsApi";
const searchPage = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductAPI.getAll();

    const count= id.length;
        var keyword="";
         if(count>=3){
          keyword=id.slice(1,);
         }
         else{
          keyword=id;
         }


         const result2= product.map((products)=>{
          const name= products['name'];
           const searchs = name.lastIndexOf(keyword);
           if(searchs>0){
               console.log(products);
            return /*html */`
            <article class="hentry" style="float: left; height:300px">
            <header class="entry-header">
            <div class="entry-thumbnail">
                <a href="/#/detail/${products['id']}">
                <img src="${products['image']}"style="width:300px; height:200px" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="${products['name']}"/>
                </a>
            </div>
            <h2 class="entry-title">
            <a class='/#/detail/${products['id']}' href='portfolio-category.html'>${products['price']} USD</a> <br></h2>
            <h3> <a href="/#/detail/${products['id']}" rel="bookmark">${products['name']}</a></h3>
            
  
            </header>
            </article>	
            
               `
           }
     
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
  },

  
};
export default searchPage;
