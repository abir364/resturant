const createHeader = () => {
  const header = document.createElement('header');
  const logo = document.createElement('div');
  logo.textContent = 'Restaurant';
  logo.classList.add('text-2xl');
  header.appendChild(logo);
  const tabs = document.createElement('nav');
  const home = document.createElement('button');
  home.textContent = 'Home';
  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  tabs.classList.add('flex');
  home.classList.add('home', 'px-4', 'py-2');
  home.classList.add('hover:bg-orange-500', 'hover:rounded');
  menu.classList.add('menu', 'px-4', 'py-2');
  menu.classList.add('hover:bg-orange-500', 'hover:rounded');
  contact.classList.add('contact', 'px-4', 'py-2');
  contact.classList.add('hover:bg-orange-500', 'hover:rounded');
  tabs.append(home, menu, contact);
  header.classList.add('px-4', 'py-6', 'bg-emerald-600');
  header.classList.add('flex', 'items-center', 'justify-around');
  header.classList.add('font-semibold', 'text-white', 'sticky', 'top-0');
  header.appendChild(tabs);
  return header;
}

export default createHeader;