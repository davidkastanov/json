let t=document.querySelector("#bookmarkInput"),e=document.querySelector("#addBookmarkBtn"),l=document.querySelector("#bookmarkList"),n=[];function i(t){l.innerHTML=t.map((t,e)=>`
<li class="item" data-idx="${e}">
  <a href="${t}" target="_blank" class="link">${t}</a>
  <button type="button" class="delete">delete</button>
  <button type="button" class="edit">edit</button>
</li>`).join("")}e.addEventListener("click",function(){let e=t.value.trim();e&&(n.push(e),t.value="",i(n))}),l.addEventListener("click",t=>{var e;let l=t.target;if(l.classList.contains("delete")&&(e=l.closest("li").dataset.idx,n.splice(e,1),i(n)),l.classList.contains("edit")){let t=l.closest("li").dataset.idx,e=prompt("Введіть нове посилання",n[t]);if(console.log(e),null===e)return;let a=e.trim();if(!a)return;n[t]=a,i(n)}}),i(n);
//# sourceMappingURL=json.1c021b99.js.map
