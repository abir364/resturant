const createContact = () => {
  const contact = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('text-5xl', 'font-bold', 'text-emerald-500','p-6');
  contact.setAttribute('id','contact');
  title.textContent = 'Contact Us';
  contact.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6', 'scroll-mt-14');
  const phone = document.createElement('div');
  phone.classList.add('w-1/3', 'text-white', 'font-medium', 'px-6', 'py-8');
  phone.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
  const ptitle = document.createElement('h2');
  ptitle.textContent = 'Our phone';
  ptitle.classList.add('text-2xl', 'py-4', 'text-emerald-500');
  const list = document.createElement('ul');
  const p1 = document.createElement('li');
  p1.textContent = '1234567890';
  p1.classList.add('indent-3');
  const p2 = document.createElement('li');
  p2.textContent = '1234567890';
  p2.classList.add('indent-3');
  const p3 = document.createElement('li');
  p3.textContent = '1234567890';
  p3.classList.add('indent-3');
  phone.append(ptitle, p1, p2, p3);
  const email = document.createElement('div');
  email.classList.add('w-1/3', 'text-white', 'font-medium', 'px-6', 'py-8');
  email.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
  const etitle = document.createElement('h2');
  etitle.textContent = 'Our email';
  etitle.classList.add('text-2xl', 'py-4', 'text-emerald-500');
  const e = document.createElement('div');
  e.textContent = 'some.local.restaurant@restaurant.com';
  e.classList.add('indent-3');
  email.append(etitle, e);
  contact.append(title, phone, email);
  return contact;
}

export default createContact;