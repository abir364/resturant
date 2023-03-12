const createHome = () => {
  const homeContent = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('text-5xl', 'font-bold', 'text-emerald-500','p-6');
  homeContent.setAttribute('id','home');
  title.textContent = 'Some Local Restaurant';
  const description = document.createElement('div');
  description.classList.add('w-1/3', 'text-white', 'font-medium', 'px-6', 'py-8');
  description.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
  const dtitle = document.createElement('h2');
  dtitle.textContent = 'About us';
  dtitle.classList.add('text-2xl', 'py-4', 'text-emerald-500');
  const dpara = document.createElement('p');
  dpara.textContent = 'Providing great food to the community for 50 years. We have been serving local area since 19xx. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue aliquam nunc. Pellentesque non diam turpis. Mauris felis ante, consequat molestie velit et, facilisis ultrices nibh. Donec gravida libero a blandit elementum. Phasellus non libero aliquam, aliquet tortor ac, mollis arcu.'
  homeContent.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6');
  description.append(dtitle, dpara);
  const hours = document.createElement('div');
  hours.classList.add('w-1/3', 'text-white', 'font-medium', 'px-6', 'py-8');
  hours.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
  const htitle = document.createElement('h2');
  htitle.textContent = 'Our hours';
  htitle.classList.add('text-2xl', 'py-4', 'text-emerald-500');
  const hlist = document.createElement('div');
  hlist.textContent = 'Monday - Saturday :  6AM - 12PM';
  const sun = document.createElement('div');
  sun.textContent = 'Sunday :  Closed';
  homeContent.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6');
  hours.append(htitle, hlist, sun);
  const location = document.createElement('div');
  location.classList.add('w-1/3', 'text-white', 'font-medium', 'px-6', 'py-8');
  location.classList.add('border-4', 'border-emerald-600', 'rounded-xl','bg-gradient-to-r', 'from-zinc-900', 'to-zinc-800');
  const ltitle = document.createElement('h2');
  ltitle.textContent = 'Our Location';
  ltitle.classList.add('text-2xl', 'py-4', 'text-emerald-500');
  const lpara = document.createElement('p');
  lpara.textContent = 'That place, In your local area, In your city'
  homeContent.classList.add('flex', 'flex-col', 'items-center', 'gap-6', 'py-6', 'scroll-mt-14');
  location.append(ltitle, lpara);
  homeContent.append(title, description, hours, location);
  return homeContent;
}

export default createHome;