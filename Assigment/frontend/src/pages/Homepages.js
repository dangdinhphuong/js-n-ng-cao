
import axios from "axios";
import ProductAPI from "../api/productsApi";
import SliderAPI from "../api/sliderApi";
const Homepages = {
  async render() {
    try {
      const { data: products } = await ProductAPI.getAll();
      const { data: slider } = await SliderAPI.getAll();
      console.log(products);
      //  {data:slider} == const slider = await sliders.data; // chuyển đổi sliders thành mảng

      console.log(slider);
      const result2 = slider
        .map((sli) => {
          return `
          <div class="carousel-item ">
          <img class="d-block w-100" style="height: 500px;" src="${sli.image}" alt="First slide">
        </div>
`;
        })
        .join("");

      const result = products
        .map((product) => {
          return /*html*/`				
            <article class="hentry float-left" >
            <header class="entry-header">
            <div class="entry-thumbnail">
                <a href="/#/detail/${product.id}">
                <img src="${product.image}" style="width:100%; height:200px" alt="${products.name}" />
                </a>
            </div>
            <h2 class="entry-title">
            <a class='/#/detail/${product.id}' href='portfolio-category.html'> ${product.price} USD</a> <br>
            <a href="/#/detail/${product.id}" rel="bookmark">${product.name}</a></h2>
            

            </header>
            </article>					
        `;
        })
        .join("");

      return `

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
      <div class="carousel-item active">
      <img class="d-block w-100" style="height: 500px;" src="https://www.dungplus.com/wp-content/uploads/2019/03/hinh-nen-sieu-xe-7.jpg">
        </div>

    ${result2}		
 
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div id="primary" class="content-area column full">
    <main id="main" class="site-main">
    <div class="grid portfoliogrid">				
        ${result}		
        <div class="clear" style=" clear: both;"></div>		
    </div>
 
    
   
    
    </main>
    <!-- #main -->
</div>
    `;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Homepages;
