function Alert() {
  const alertBox = document.getElementById('alert');

  alertBox.classList.remove('-right-72');
  alertBox.classList.add('right-5');

  setTimeout(() => {
    alertBox.classList.remove('right-5');
    alertBox.classList.add('-right-72');
  }, 3000);
}