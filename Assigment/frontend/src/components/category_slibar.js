import CategoryesAPI from "../api/categoryesAPI";

const cate_slibar={
    async render(){
        const { data: category } = await CategoryesAPI.getAll();
      console.log(category);
      const result = category
        .map((categorys) => {
          return `	
          <li>
          <a href="/#/cate/${categorys.id}">${categorys.name}</a>
        
        `;
        })
        .join("");
        return /*html */`
          
      <div id="secondary" class="column third" style="position: sticky;
      top: 0;
">
      <div id="sidebar-1" class="widget-area" role="complementary">
      <a href="/#/about">
        <aside id="text-5" class="widget widget_text">
        <h4 class="widget-title">About Me</h4>
        <div class="textwidget">
          <p>
            <img src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png" class="alignleft" style="width:80px;border-radius:50%;margin-bottom:0;"> I'm a professional photographer for 10 years. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        </aside></a>
        
        <aside id="recent-posts-2" class="widget widget_recent_entries">
        <h4 class="widget-title">Recent Posts</h4>
        <ul>
         ${await result}
        
        </ul>
        </aside>
        
     
        <aside id="text-6" class="widget widget_text">
                <h4 class="widget-title">Like us on Facebook</h4>
                <div class="textwidget">
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=575390339714043&autoLogAppEvents=1" nonce="Oecgbcaz"></script>

                    <div class="fb-page" data-href="https://www.facebook.com/thucphamsachhp.com.vn" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/thucphamsachhp.com.vn" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/thucphamsachhp.com.vn">Siêu xe </a></blockquote>
                    </div>
                </div>
            </aside>
        
       
        
      </div>
      <!-- .widget-area -->
    </div>
        
        ` 
        }
}
 export default cate_slibar;