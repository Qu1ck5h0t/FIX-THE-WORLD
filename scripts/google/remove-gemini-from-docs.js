// ==UserScript==
// @name         [Qu1ck5h0t's FIX THE WORLD] Remove Gemini from Google Docs
// @match        https://docs.google.com/*
// ==/UserScript==

(()=>{d=document;s='.kixWizBarkickWrapper,#docs-sidekick-button-container,#docs-gemini-menu';f=_=>d.querySelectorAll(s).forEach(e=>e.remove());f();new MutationObserver(f).observe(d.documentElement,{childList:1,subtree:1})})();
