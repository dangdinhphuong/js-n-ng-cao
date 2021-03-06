const contactPage = {
  async render() {
    return `
       <div id="primary" class="content-area column full">
       <main id="main" class="site-main">
       <article id="post-39" class="post-39 page type-page status-publish hentry">
       <header class="entry-header">
       <h1 class="entry-title">Contact</h1>
       </header>
       <!-- .entry-header -->
       <div class="entry-content">
               
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.410394078823!2d105.8085337197754!3d21.06856405000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aae8593617bf%3A0x2a82fa9bf9e3e29e!2sG2%20Ciputra%20Hanoi%20Apartment!5e0!3m2!1svi!2s!4v1614833767848!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
               
           <div class="wpcmsdev-columns">
               <div class="column column-width-one-half">
                   <h4>Quick Contact</h4>						
                   
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
                   
               </div>
               <div class="column column-width-one-half">
                   <h4>Find Us: (888) 252 389 3571</h4>
                   <p>
                       If you want to hire me or have any feedback or questions about our service in general, please send us a message by completing our enquiry form. It’s best to call though, someone we’ll always be there for you.
                   </p>
                   <p>
                       Monday – Friday: 9am to 5pm<br>
                       Saturday: 10am to 2pm<br>
                       Sunday: Closed
                   </p>
               </div>
           </div>
       </div>
       <!-- .entry-content -->
       </article>
       </main>
       <!-- #main -->
   </div>
       `;
  },
};
export default contactPage;
