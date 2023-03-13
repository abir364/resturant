import img1 from './assets/vd-photography-vA0_270so1U-unsplash.jpg';
import img2 from './assets/krzysztof-hepner-MTOjTacH2zg-unsplash.jpg';
import img3 from './assets/yulia-khlebnikova-yIE7pZUmT_s-unsplash.jpg';
import img4 from './assets/luke-oslizlo-eCo4KaFd_jQ-unsplash.jpg';

const Menu = (() => {
  const drinks = [ {'id':'0', 'name':'Faluda', 'image': img1, 'price':'50৳'}, 
  {'id':'1', 'name':'Soft Drinks', 'image':img2, 'price':'20৳'}, 
  {'id':'2', 'name':'Juice', 'image':img3, 'price':'100৳'}, 
  {'id':'3', 'name':'Chaa', 'image':img4, 'price':'60৳'}];
  const mains = [ {'id':'0', 'name':'Faluda', 'image': img1, 'price':'50৳'}, 
  {'id':'1', 'name':'Soft Drinks', 'image':img2, 'price':'20৳'}, 
  {'id':'2', 'name':'Juice', 'image':img3, 'price':'100৳'}, 
  {'id':'3', 'name':'Chaa', 'image':img4, 'price':'60৳'}];
  const deserts = [ {'id':'0', 'name':'Faluda', 'image': img1, 'price':'50৳'}, 
  {'id':'1', 'name':'Soft Drinks', 'image':img2, 'price':'20৳'}, 
  {'id':'2', 'name':'Juice', 'image':img3, 'price':'100৳'}, 
  {'id':'3', 'name':'Chaa', 'image':img4, 'price':'60৳'}];
  const buildDrinkMenu = (dm)=> {
    drinks.map(item => buildCard(item,dm));
  }
  const buildAMainMenu = (dm)=> {
    mains.map(item => buildCard(item,dm));
  }
  const buildDesertMenu = (dm)=> {
    deserts.map(item => buildCard(item,dm));
  }
  const buildCard = (item,dm) => {
    const card = document.createElement('div');
    card.classList.add('p-6', 'w-5/12');
    card.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
    const img = new Image();
    img.src = item.image;
    img.classList.add('w-24', 'h-24', 'rounded-full', 'mx-auto');
    const title = document.createElement('div');
    title.classList.add('text-2xl', 'py-4', 'text-emerald-500');
    title.textContent = item.name;
    const price = document.createElement('div');
    price.classList.add('text-xl', 'text-white');
    price.textContent = `${item.price}`;
    card.append(img, title, price);
    dm.appendChild(card);
  };
  return {buildDrinkMenu, buildAMainMenu, buildDesertMenu};
})();

const createMenu = () => {
  const menu = document.createElement('div');
  const title = document.createElement('h1');
  menu.setAttribute('id','menu');
  title.classList.add('text-5xl', 'font-bold', 'text-emerald-500','p-6');
  title.textContent = 'Our Menu';
  menu.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6', 'scroll-mt-14', 'items-center', 'content-center');

  const drink = document.createElement('div');
  const dt = document.createElement('h1');
  dt.classList.add('text-4xl', 'font-bold', 'text-emerald-500', 'text-center', 'pb-4');
  dt.textContent = 'Drinks';
  
  const dm = document.createElement('div');
  dm.classList.add('drinks-cards', 'flex', 'w-[60vw]', 'flex-wrap', 'justify-between', 'gap-y-6');
  Menu.buildDrinkMenu(dm);
  drink.append(dt,dm);

  const mains = document.createElement('div');
  const mt = document.createElement('h1');
  mt.classList.add('text-4xl', 'font-bold', 'text-emerald-500', 'text-center', 'pb-4');
  mt.textContent = 'Mains';

  const mm = document.createElement('div');
  mm.classList.add('drinks-cards', 'flex', 'w-[60vw]', 'flex-wrap', 'justify-between', 'gap-y-6');
  Menu.buildDrinkMenu(mm);
  mains.append(mt,mm);

  const desert = document.createElement('div');
  const dst = document.createElement('h1');
  dst.classList.add('text-4xl', 'font-bold', 'text-emerald-500', 'text-center', 'pb-4');
  dst.textContent = 'Deserts';

  const dsm = document.createElement('div');
  dsm.classList.add('drinks-cards', 'flex', 'w-[60vw]', 'flex-wrap', 'justify-between', 'gap-y-6');
  Menu.buildDrinkMenu(dsm);
  desert.append(dst, dsm);

  menu.append(title, drink, mains, desert);
  return menu;
}

export default createMenu;