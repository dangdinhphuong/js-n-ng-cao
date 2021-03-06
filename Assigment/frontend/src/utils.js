export const parseRequestUrl =()=>{
    const url =window.location.hash.toLocaleLowerCase();
    const request = url.split('/');
    return{
resource: request[1],
id:request[2]
    }
}
export const $ = Selector =>{
    let elements = document.querySelectorAll(Selector);
    return elements.length==1? elements[0] : [...elements];
}
export const reRender = async(component,position="")=>{
 if(position){
     $(position).innerHTML= await component.render();
 }else{
     $("#list_product").innerHTML= await component.render();
 }
 await component.afterRender();
}