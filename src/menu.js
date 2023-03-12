const createMenu = () => {
  const menu = document.createElement('div');
  const title = document.createElement('h1');
  menu.setAttribute('id','menu');
  title.classList.add('text-5xl', 'font-bold', 'text-emerald-500','p-6');
  title.textContent = 'Our Menu';
  menu.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6', 'scroll-mt-14');
  menu.append(title);
  return menu;
}

export default createMenu;