// ==UserScript==
// @name         [Qu1ck5h0t's FIX THE WORLD] Remove synthetic personalisation from Gemini prompt
// @match        https://gemini.google.com/*
// ==/UserScript==

(()=>{const f=()=>document.querySelectorAll('[class^=assistant-messages-primary-container]').forEach(e=>e.remove());f();new MutationObserver(f).observe(document.body,{childList:1,subtree:1})})();
