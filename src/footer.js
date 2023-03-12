export default function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('bg-stone-900', 'py-4', 'text-center', 'text-white');
  const p = document.createElement('p');
  p.textContent = 'copyright © 2021 abir364';
  footer.appendChild(p);
  return footer;
}