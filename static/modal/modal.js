;(function () {
  /* eslint-disable */
  var modal = document.getElementsByClassName('modal-browser');
  var closeBtn = document.getElementsByClassName('modal-browser__close');
  var isInvalidBrowser = true;

  if (window.CSS && window.CSS.supports) {
    isInvalidBrowser = !(
      CSS.supports('display', 'flex') &&
      CSS.supports('display', 'grid')
    );
  }

  if (isInvalidBrowser) {
    modal[0].className = 'modal-browser modal-browser_show';
    document.body.className += ' static-body';
  }

  modal[0].addEventListener('click', function (event) {
    var deviceModal = document.getElementsByClassName('browser-modal');
    if (event.target.className === 'modal-browser__wrapper' && (!deviceModal || deviceModal.length === 0)) {
      modal[0].className = 'modal-browser';
      document.body.className = document.body.className.replace('static-body', '');
    }
  });

  closeBtn[0].addEventListener('click', function () {
    var deviceModal = document.getElementsByClassName('browser-modal');
    if (!deviceModal || deviceModal.length === 0) {
      modal[0].className = 'modal-browser';
      document.body.className = document.body.className.replace('static-body', '');
    }
  });
})()
