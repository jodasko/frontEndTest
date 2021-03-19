const alert_msg = document.querySelector('.alert');
const submit_btn = document.querySelector('#cotizar__btn');
const marcaAuto = document.querySelector('#marca_del_auto');
const modeloAuto = document.querySelector('#modelo_del_auto');
const anoAuto = document.querySelector('#ano_auto');
const email = document.querySelector('#email');

alert_msg.classList.add('d-none');


/*hola*/

submit_btn.onclick = (event) => {
  event.preventDefault();

  if (marcaAuto.value == 'null' || marcaAuto.value == '') {
    alert_msg.classList.remove('d-none');
    return (document.querySelector('.message__validate').innerHTML =
      'Por favor elija una Marca');
  }

  if (modeloAuto.value === 'null' || modeloAuto.value === '') {
    alert_msg.classList.remove('d-none');
    return (document.querySelector('.message__validate').innerHTML =
      'Por favor elija el un Modelo');
  }

  if (anoAuto.value === 'null' || anoAuto.value === '') {
    alert_msg.classList.remove('d-none');
    return (document.querySelector('.message__validate').innerHTML =
      'Por favor elija el Anio');
  }

  alert_msg.classList.add('d-none');
  return (document.querySelector('.message__validate').innerHTML = ' ');
};
