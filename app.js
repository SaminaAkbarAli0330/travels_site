let searchBtn = document.querySelector('.search_ico');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('menu-bar');
let navbar = document.querySelector('.navbar')


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
    

console.log(searchBtn)

formBtn.addEventListener('click', ()=>{
     loginform.classList.add('active');
 });

 formclose.addEventListener('click', ()=>{
    loginform.classList.remove('active');
 });
 
 function srcht(){
    console.log('fuctio workig')
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
 }