"use strict";var $animationFade=document.querySelectorAll(".c-animation-fade"),$animationFadeScale=document.querySelectorAll(".c-animation-fade-scale"),visible=function(e){var t=window.pageYOffset+e.getBoundingClientRect().top;window.pageXOffset,e.getBoundingClientRect().left,window.pageXOffset,e.getBoundingClientRect().right,window.pageYOffset,e.getBoundingClientRect().bottom,window.pageYOffset,window.pageXOffset,window.pageXOffset,document.documentElement.clientWidth;return 10<window.pageYOffset+document.documentElement.clientHeight-t},animation=function(){$animationFade.forEach(function(e){visible(e)&&e.classList.add("c-animation-fade_active")}),$animationFadeScale.forEach(function(e){visible(e)&&e.classList.add("c-animation-fade-scale_active")})};if(window.addEventListener("scroll",animation),animation(),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#c-header"),t=document.querySelector("#c-main"),n=e.offsetHeight;t.style.paddingTop="".concat(n,"px")}),document.querySelector("#modal-close")){var $modalClose=document.querySelector("#modal-close"),$modalPaper=document.querySelector("#modal-paper"),$openModal=document.querySelectorAll(".c-open-modal");$openModal.forEach(function(e){e.addEventListener("click",function(){$modalPaper.classList.add("c-modal-paper_open")})}),[$modalClose,$modalPaper].forEach(function(e){e.addEventListener("click",function(e){e.srcElement!==$modalClose&&e.srcElement!==$modalPaper||$modalPaper.classList.remove("c-modal-paper_open")})})}if(document.querySelector("#header-toggle")){var $toggleBtn=document.querySelector("#header-toggle"),$menu=document.querySelector("#header-menu");$toggleBtn.addEventListener("click",function(){$menu.classList.toggle("c-header-bottom_open")})}