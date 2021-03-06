import { reRender } from "../utils";
import aboutEdit from "../api/aboutAPI.js";
const about={
    async render(){
        const { data: about } = await aboutEdit.get(1);
        return  /*html */`
        <div id="primary" class="content-area column full">
        <main id="main" class="site-main">
        
        <article class="hentry">
        <header class="entry-header">
        <h1 class="entry-title">About</h1>	
        </header>
        <!-- .entry-header -->

        <div class="entry-content">
        <p><img style="border:10px solid #f4f5f6" src="${about.images}" alt="bg5" width="430" class="alignright"></p>
        
        <p>${about.detail}</p>
       <b> <h2 style="font-family: 'Herr Von Muellerhoff';color:black;font-weight:300;">Yours, Von Muellerhoff</h2></b>
        </div><!-- .entry-content -->
        </article>
        
        </main>
        <!-- #main -->
    </div>
        `;
    }
};
 export default about;