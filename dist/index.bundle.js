"use strict";(self.webpackChunkjavascript_capstone=self.webpackChunkjavascript_capstone||[]).push([[826],{426:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(81),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([e.id,"button {\n  border-color: black;\n  border-width: 3px 6px 6px 3px;\n}\n\n.btn-close {\n  position: absolute;\n  right: 3vw;\n}\n",""]);const r=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var s={},a=[],r=0;r<e.length;r++){var c=e[r],l=i.base?c[0]+i.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,i);i.byIndex=r,n.splice(r,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var s=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var r=t(s[a]);n[r].references--}for(var c=i(e,o),l=0;l<s.length;l++){var d=t(s[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},618:(e,n,t)=>{var i=t(379),o=t.n(i),s=t(795),a=t.n(s),r=t(569),c=t.n(r),l=t(565),d=t.n(l),u=t(216),m=t.n(u),p=t(589),f=t.n(p),h=t(426),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=m(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"7d7b7c01821ed7fc2d73.png",b=t.p+"5ecc10b091778a27b80d.png",y=t.p+"c43eaeb34fd554768f4c.png",x=t.p+"970f396984c1eb0cd28f.png",$=document.getElementById("logo-icon"),w=document.getElementById("breakfast-icon"),M=document.getElementById("vegetarian-icon"),E=document.getElementById("dessert-icon");let I=[];async function k(e,n){let t;await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/comments?item_id=${e}`).then((e=>e.json())).then((e=>{t=e})),function(e,n){document.getElementById(`recipe-${n}-comment-count`).innerHTML=`(${function(e){return e.length}(e)})`}(t,e);const i=document.getElementById(`recipe-${e}-comments`);i.innerHTML="",t.forEach((e=>{const n=document.createElement("div");n.className="col card d-flex flex-column justify-content-center align-items-center text-center py-3 my-1",n.innerHTML='\n    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-1">\n      <h5 class="fs-4 card-title"></h5>\n\n      <p></p>\n\n      <span></span>\n    </div>',i.appendChild(n),n.children[0].children[0].textContent=`${e.username}`,n.children[0].children[1].textContent=`${e.comment}`,n.children[0].children[2].textContent=`Date: ${e.creation_date}`}))}const L=t.p+"c0944e5f3e46e52c1cfd.png",C=t.p+"f824cc095cd2386911d7.png",T=document.getElementById("recipes-section");const j="56YthjGYMUyx30Ur3ZpO",B=document.getElementById("breakfast-page-link"),S=document.getElementById("vegetarian-page-link"),A=document.getElementById("dessert-page-link");async function N(e,n){let t;await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`).then((e=>e.json())).then((e=>{t=e.meals[0]})),function(e){const n=document.createElement("div");n.id=`recipe-${e.idMeal}-modal`,n.className="modal fade",n.tabIndex="-1",n.setAttribute("aria-labelledby",`recipe-${e.idMeal}-modal-title`),n.setAttribute("aria-hidden","true"),n.innerHTML=`\n  <div class="modal-dialog modal-dialog-centered modal-xl">\n    <div class="modal-content">\n      <div class="modal-body border border-5 border-dark d-flex flex-column justify-content-center pb-3">\n        <div class="modal-header d-flex flex-column border-0">\n          <div class="container-fluid d-flex flex-row justify-content-center ps-0">\n            <img src="${e.strMealThumb}" class="w-50" alt="Recipe Screenshot">\n\n            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>\n          </div>\n        </div>\n\n        <div class="d-flex flex-column align-items-center gap-4">\n          <h2 class="modal-title" id="recipe-${e.idMeal}-modal-label">${e.strMeal}</h2>\n          \n          <h4>Ingredients</h4>\n\n          <div class="col-2 d-flex flex-row justify-content-between gap-3 mb-3">\n            <ul class="list-unstyled m-0 p-0 gap-2">\n              <li>${e.strIngredient1}</li>\n              <li>${e.strIngredient2}</li>\n              <li>${e.strIngredient3}</li>\n              <li>${e.strIngredient4}</li>\n              <li>${e.strIngredient5}</li>\n              <li>${e.strIngredient6}</li>\n              <li>${e.strIngredient7}</li>\n              <li>${e.strIngredient8}</li>\n              <li>${e.strIngredient9}</li>\n              <li>${e.strIngredient10}</li>\n            </ul>\n\n            <ul class="list-unstyled m-0 p-0 gap-2">\n              <li>${e.strMeasure1}</li>\n              <li>${e.strMeasure2}</li>\n              <li>${e.strMeasure3}</li>\n              <li>${e.strMeasure4}</li>\n              <li>${e.strMeasure5}</li>\n              <li>${e.strMeasure6}</li>\n              <li>${e.strMeasure7}</li>\n              <li>${e.strMeasure8}</li>\n              <li>${e.strMeasure9}</li>\n              <li>${e.strMeasure10}</li>\n            </ul>\n          </div>\n\n          <h4>Method</h4>\n\n          <p class="col-8">${e.strInstructions}</p>\n\n          <h4>Add a comment</h4>\n\n          <form method="post" id="recipe-${e.idMeal}-comment-form" class="d-flex flex-column align-items-start gap-4">\n            <label>\n              <input type="text" id="name" maxlength="60" placeholder="Your name" class="border-2 border-dark rounded-3 px-2 w-75" required />\n            </label>\n       \n            <label class="textarea">\n              <textarea\n                id="comment"\n                name="message"\n                maxlength="230"\n                placeholder="Your insights"\n                class="border-2 border-dark rounded-3 px-2 w-100"\n                required\n              ></textarea>\n            </label>\n            \n            <button type="submit" class="fs-4 bg-white px-2">Comment</button>\n          </form>\n\n          <h4>\n            Comments\n            <span id="recipe-${e.idMeal}-comment-count"></span>\n          </h4>\n\n          <div id="recipe-${e.idMeal}-comments" class="container-fluid row row-cols-3"></div>\n        </div>\n      </div>\n    </div>\n  </div>`,T.appendChild(n)}(t),async function(e,n){const t=document.getElementById(`recipe-${e}-comment-form`);t.addEventListener("submit",(i=>{i.preventDefault();const o=t.elements.name.value,s=t.elements.comment.value;!async function(e,n,t,i){await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${e}/comments`,{method:"POST",body:JSON.stringify({item_id:`${n}`,username:t,comment:i}),headers:{"Content-type":"application/json; charset=UTF-8"}}),k(n,e),document.getElementById(`recipe-${n}-modal`).scrollTop=document.getElementById(`recipe-${n}-modal`).scrollHeight}(n,e,o,s),t.reset()}))}(e,n)}async function H(e,n){let t;document.getElementById("recipes-section").innerHTML="",await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n}`).then((e=>e.json())).then((e=>{t=e.meals})),function(e,n){const t=document.createElement("section");t.id=`${n}-page`;const i=document.createElement("div");i.className="row row-cols-4",t.appendChild(i),e.forEach((e=>{const n=document.createElement("div");n.id=`${e.idMeal}`,n.className="col card py-3 d-flex flex-column justify-content-center align-items-center text-center border-0",n.innerHTML=`\n    <img src="${e.strMealThumb}/preview" alt="" class="card-img-top w-50"/>\n    \n    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-3">\n      <h5 class="fs-4 card-title my-2">${e.strMeal}</h5>\n\n      <div class="likes-div">\n        <span id="recipe-${e.idMeal}-like-count" class="fs-5 fw-normal">Likes:</span>\n\n        <button id="recipe-${e.idMeal}-like-btn" class="bg-white border-0">\n          <img src="${L}" alt="" class="heart-empty-icon" />\n          <img src="${C}" alt="" class="heart-filled-icon d-none" />\n        </button>\n      </div>\n      <button type="button" id="recipe-${e.idMeal}-info-btn" class="fs-5 bg-white" data-bs-toggle="modal" data-bs-target="#recipe-${e.idMeal}-modal">Recipe Info</button>\n    </div>`,i.appendChild(n)})),T.appendChild(t),document.querySelectorAll(".heart-empty-icon").forEach((e=>{e.addEventListener("mousedown",(()=>{e.classList.toggle("d-none"),e.nextElementSibling.classList.toggle("d-none")}))}))}(t,n),function(e,n){document.getElementById(`${n.toLowerCase()}-meals-count`).innerHTML=`(${function(e){return e.length}(e)})`}(t,n),async function(e){fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${e}/likes`,{method:"POST",body:JSON.stringify({item_id:"initialiser"}),headers:{"Content-type":"application/json; charset=UTF-8"}})}(e),async function(e){await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${e}/likes`).then((e=>e.json())).then((e=>{I=e})),document.querySelectorAll(".likes-div span").forEach((e=>{I.forEach((n=>{e.id===`recipe-${n.item_id}-like-count`&&(e.textContent=`Likes: ${n.likes}`)})),"Likes:"===e.textContent&&(e.textContent="Likes: 0")}))}(e),t.forEach((n=>{N(n.idMeal,e),function(e,n){document.getElementById(`recipe-${e}-like-btn`).addEventListener("mousedown",(()=>{fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${n}/likes`,{method:"POST",body:JSON.stringify({item_id:`${e}`}),headers:{"Content-type":"application/json; charset=UTF-8"}}),async function(e){const n=document.getElementById(`recipe-${e}-like-count`);I.forEach((t=>{t.item_id===e&&(t.likes+=1,n.textContent=`Likes: ${t.likes}`)}))}(e)}))}(n.idMeal,e),function(e,n){document.getElementById(`recipe-${e}-info-btn`).addEventListener("mousedown",(()=>{k(e,n)}))}(n.idMeal,e)}))}B.addEventListener("mousedown",(()=>{B.classList.add("text-decoration-underline","fw-bold"),S.classList.remove("text-decoration-underline","fw-bold"),A.classList.remove("text-decoration-underline","fw-bold"),H(j,"Breakfast")})),S.addEventListener("mousedown",(()=>{S.classList.add("text-decoration-underline","fw-bold"),B.classList.remove("text-decoration-underline","fw-bold"),A.classList.remove("text-decoration-underline","fw-bold"),H("tpqFWohbJksKNRX8rJNi","Vegetarian")})),A.addEventListener("mousedown",(()=>{A.classList.add("text-decoration-underline","fw-bold"),B.classList.remove("text-decoration-underline","fw-bold"),S.classList.remove("text-decoration-underline","fw-bold"),H("kgwMzsiEvd8aYH9dQMb0","Dessert")})),H(j,"Breakfast"),$.src=g,w.src=b,M.src=y,E.src=x}},e=>{e(e.s=618)}]);