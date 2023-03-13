export default function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id','footer');
  footer.classList.add('bg-stone-900', 'py-4', 'text-center', 'text-white');
  const p = document.createElement('p');
  p.textContent = 'copyright © 2021 abir364';
  const p2 = document.createElement('p');
  p2.textContent = 'Photo by VD Photography, Krzysztof Hepner, Yulia Khlebnikovam, Luke Oslizlo from Unsplash';
  footer.append(p,p2);
  return footer;
}