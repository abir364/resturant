const createMenu = () => {
  const menu = document.createElement('div');
  const title = document.createElement('h1');
  menu.setAttribute('id','menu');
  title.classList.add('text-5xl', 'font-bold', 'text-emerald-500','p-6');
  title.textContent = 'Our Menu';
  menu.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6', 'scroll-mt-14');

  const drink = document.createElement('div');
  const dt = document.createElement('h1');
  dt.classList.add('text-4xl', 'font-bold', 'text-emerald-500');
  dt.textContent = 'Drinks';
  
  drink.append(dt);

  const mains = document.createElement('div');
  const mt = document.createElement('h1');
  mt.classList.add('text-4xl', 'font-bold', 'text-emerald-500');
  mt.textContent = 'Mains';

  mains.append(mt);

  menu.append(title, drink, mains);
  return menu;
}

export default createMenu;