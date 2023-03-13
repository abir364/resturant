import './style.css';

import createHeader from './header';
import createFooter from './footer';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const html = document.querySelector('html');
html.classList.add('scroll-smooth');

const content = document.getElementById('content');
content.classList.add('bg-gray-900');

content.appendChild(createHeader());

content.appendChild(createHome());

content.appendChild(createFooter());

const home = document.querySelector('.home');
home.addEventListener('click',()=>{
  const ho = document.getElementById("home");
  ho.scrollIntoView({behavior: "smooth"});
});

let mExist = false;
let cExist = false;

const menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{
  if(cExist && !mExist) {
    content.insertBefore(createMenu(), document.getElementById('contact'));
    mExist = true;
  }
  if(!mExist) {
    content.insertBefore(createMenu(), document.getElementById('footer'));
    mExist = true;
  }
  const me = document.getElementById("menu");
  me.scrollIntoView({behavior: "smooth"});
});

const contact = document.querySelector('.contact');
contact.addEventListener('click',()=>{
  if(!cExist) {
    content.insertBefore(createContact(), document.getElementById('footer'));
    cExist = true;
  }
  const con = document.getElementById("contact");
  con.scrollIntoView({behavior: "smooth"});
});