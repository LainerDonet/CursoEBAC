// Abre el menú
document.getElementById('openSidebar').onclick = () => {
  document.getElementById('sidebarMenu').classList.add('active');
};
// Cierra el menú
document.getElementById('closeSidebar').onclick = () => {
  document.getElementById('sidebarMenu').classList.remove('active');
};