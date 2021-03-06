import { reRender,$ } from "../utils";

const search={
    async render(){
        return /*html */ `
        <form class="form-inline" id="from_search">
							  <input class="form-control mr-sm-2" type="search"id="key" placeholder="Search" aria-label="Search">
							  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
							</form>
        `;
    },
    async afterseach() {
     
        $("#from_search").addEventListener("submit", (e) => {
            e.preventDefault();
           const key=$("#key").value;
       
          window.location.hash = "/search/"+key;
        });
      },
};
export default search;