import"./assets/styles-c170f314.js";const a="feedback-form-state",t=document.querySelector(".feedback-form"),o=t.elements.email,l=t.elements.message;t.addEventListener("input",s);function s(e){e.preventDefault();const r={email:`${o.value.trim()}`,message:`${l.value.trim()}`};localStorage.setItem(a,JSON.stringify(r))}const n=localStorage.getItem(a);if(n!==""){const e=JSON.parse(n);o.value=e.email,l.value=e.message}t.addEventListener("submit",m);function m(e){e.preventDefault(),!(o.value===""||l.value==="")&&(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t.reset())}
//# sourceMappingURL=commonHelpers2.js.map
