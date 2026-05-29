
// ==UserScript==
// @name         [Qu1ck5h0t's FIX THE WORLD] Make Discord Pings Grey
// @match        https://discord.com/*
// ==/UserScript==

(()=>{const f=()=>document.querySelectorAll('[class^=numberBadge]').forEach(e=>e.style.backgroundColor='grey');f();new MutationObserver(f).observe(document.body,{childList:1,subtree:1})})();
