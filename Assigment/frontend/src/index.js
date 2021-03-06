import Homepages from "./pages/Homepages.js";
import Detail from "./pages/Detail.js";
import Header from "./components/header.js";
import Page_404 from "./pages/Page_404.js";
import CategoryPages from "./pages/categoryPages.js";
import ProductAdd from "./pages/productAdd.js";
import editProduct from "./pages/editProduct.js";
import contactPage from "./pages/contactPage.js";
import ListProductPage from "./pages/ListProductPage.js";
import listCategoryes from "./pages/listCategoryes.js";
import { parseRequestUrl, $ } from "./utils.js";
import cateAdd from "./pages/cateAdd.js";
import cateEdit from "./pages/cateEdit.js";
import Products from "./pages/Products.js";
import aboutEdit from "./pages/aboutEdit.js";
import about from "./pages/about.js";
import search from "./components/search.js";
import searchPage from "./pages/searchPage.js";

const routers = {
  "/": Homepages,
  "/home": Homepages,
  "/cate/:id": CategoryPages,
  "/detail/:id": Detail,
  "/contactpage": contactPage,
  "/products": Products,
  "/Page_404": Page_404,
  "/about": about,

  "/listproduct": ListProductPage, //admin
  "/aboutedit": aboutEdit,
  "/productadd": ProductAdd, //admin
  "/productedit/:id": editProduct, //admin
  "/listcate": listCategoryes, //admin
  "/cateadd": cateAdd,
  "/categoryedit/:id": cateEdit,
  '/search/:id': searchPage
};

const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : "/") + (id ? `/:id` : "");
  //console.log(parseUrl);
  const page = routers[parseUrl] ? routers[parseUrl] : Page_404;
  // console.log(resource);
  $("#header").innerHTML = await Header.render();
  $("#search").innerHTML = await search.render();
  $("#content").innerHTML = await page.render();

if (page.afterRender) {
  await page.afterRender();
}
await search.afterseach();
};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
