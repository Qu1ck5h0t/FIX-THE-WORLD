// ==UserScript==
// @name         [Qu1ck5h0t's FIX THE WORLD] Make Discord Ping Highlights Grey
// @match        https://discord.com/*
// ==/UserScript==

(()=>{d=document;S='[class*="mentioned"]';t=d.createElement('style');t.textContent=S+'::before{background:transparent!important}';d.head.appendChild(t);(f=_=>d.querySelectorAll(S).forEach(e=>e.style.background='#101010'))();new MutationObserver(f).observe(d.body,{childList:1,subtree:1})})();
