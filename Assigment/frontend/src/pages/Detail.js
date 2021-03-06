// import data from "../data.js";
import axios from "axios";
import { parseRequestUrl } from "../utils.js";// lấy id từ trên url
import ProductAPI from "../api/productsApi";
const Detail = {
  async render() {
    try {
      const { id } = parseRequestUrl();
      const {data:product} = await ProductAPI.get(id);
      
      return `<div id="primary" class="content-area column two-thirds single-portfolio">
      <main id="main" class="site-main">
      
      <article class="portfolio hentry">
      <header class="entry-header">
      <div class="entry-thumbnail">
          <img width="800" height="533" src="${product["image"]}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="${product["name"]}"/>
      </div>
      <h1 class="entry-title">${product["name"]}</h1>
      <a class='portfoliotype' href='portfolio-category.html'>$ ${product["price"]}</a>
    
      </header>
      <div class="entry-content">
      ${product["detail"]}
      </div>
      </article>
      
      <nav class="navigation post-navigation" role="navigation">
          <h1 class="screen-reader-text">Post navigation</h1>
          <div class="nav-links">
          <div class="nav-previous">
          <a href="#" rel="prev"> <span class="meta-nav">←</span> Eliza and John</a>
          </div>
          <div class="nav-next">
          <a href="#" rel="next">Sunset Beach <span class="meta-nav">→</span></a>
          </div>		
          </div>
      </nav>
      <!-- .navigation -->
      
      </main>
      <!-- #main -->
  </div>
  <!-- #primary -->
  
  <div id="secondary" class="column third">
      <div class="widget-area">
          <aside class="widget">
              <h4 class="widget-title">Request similar project</h4>
              <form class="wpcf7" method="post" action="contact.php" id="contactform">
                  <div class="form">
                      <p><input type="text" name="name" placeholder="Name *"></p>
                      <p><input type="text" name="email" placeholder="E-mail Address *"></p>
                      <p><textarea name="comment" rows="3" placeholder="Message *"></textarea></p>
                      <input type="submit" id="submit" class="clearfix btn" value="Send">
                  </div>
              </form>
              <div class="done">								
                  Your message has been sent. Thank you!
              </div>
          </aside>
      </div>
  </div>`;
    } 
    
    
    catch (error) {
      console.log(error);
    }
  },
};
export default Detail;
