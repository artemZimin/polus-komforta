"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var $header = document.querySelector('#c-header'),
      $main = document.querySelector('#c-main');
  var headerHeight = $header.offsetHeight;
  $main.style.paddingTop = "".concat(headerHeight, "px");
});

if (document.querySelector('#modal-close')) {
  var $modalClose = document.querySelector('#modal-close'),
      $modalPaper = document.querySelector('#modal-paper'),
      $openModal = document.querySelectorAll('.c-open-modal'); // const toggleMenu = () => {
  //     // if ($modalPaper.classList.contains('c-modal-paper_open')) {
  //     //     $modalPaper.classList.toggle('c-modal-paper_open')
  //     // }
  //     $modalPaper.classList.toggle('c-modal-paper_open')
  // }

  $openModal.forEach(function ($btn) {
    $btn.addEventListener('click', function () {
      $modalPaper.classList.add('c-modal-paper_open');
    });
  });
  [$modalClose, $modalPaper].forEach(function ($el) {
    $el.addEventListener('click', function (event) {
      if (event.srcElement === $modalClose || event.srcElement === $modalPaper) {
        $modalPaper.classList.remove('c-modal-paper_open');
      }
    });
  });
} // const $body = document.querySelector('body')
// if ($body) {
//     let prevScrollHeight = pageYOffset
//     let $header = document.querySelector('#c-header')
//     document.addEventListener('scroll', () => {
//         if (pageYOffset > prevScrollHeight) {
//             $header.classList.add('c-header_hidden')
//         } else {
//             $header.classList.remove('c-header_hidden')
//         }
//         prevScrollHeight = pageYOffset
//     })
// }


if (document.querySelector('#header-toggle')) {
  var $toggleBtn = document.querySelector('#header-toggle'),
      $menu = document.querySelector('#header-menu');
  $toggleBtn.addEventListener('click', function () {
    $menu.classList.toggle('c-header-bottom_open');
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1tYXJnaW4uanMiLCJtb2RhbC5qcyIsInNjcm9sbEhhbmRsZXIuanMiLCJ0b2dnbGVIZWFkZXIuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiJGhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCIkbWFpbiIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwicGFkZGluZ1RvcCIsIiRtb2RhbENsb3NlIiwiJG1vZGFsUGFwZXIiLCIkb3Blbk1vZGFsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCIkYnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiJGVsIiwiZXZlbnQiLCJzcmNFbGVtZW50IiwicmVtb3ZlIiwiJHRvZ2dsZUJ0biIsIiRtZW51IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFBLENBQUFDLGdCQUFBLENBQUEsa0JBQUEsRUFBQSxZQUFBO0FBRUEsTUFDQUMsT0FBQSxHQUFBRixRQUFBLENBQUFHLGFBQUEsQ0FBQSxXQUFBLENBREE7QUFBQSxNQUVBQyxLQUFBLEdBQUFKLFFBQUEsQ0FBQUcsYUFBQSxDQUFBLFNBQUEsQ0FGQTtBQUlBLE1BQUFFLFlBQUEsR0FBQUgsT0FBQSxDQUFBSSxZQUFBO0FBRUFGLEVBQUFBLEtBQUEsQ0FBQUcsS0FBQSxDQUFBQyxVQUFBLGFBQUFILFlBQUE7QUFFQSxDQVZBOztBQ0FBLElBQUFMLFFBQUEsQ0FBQUcsYUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBO0FBRUEsTUFDQU0sV0FBQSxHQUFBVCxRQUFBLENBQUFHLGFBQUEsQ0FBQSxjQUFBLENBREE7QUFBQSxNQUVBTyxXQUFBLEdBQUFWLFFBQUEsQ0FBQUcsYUFBQSxDQUFBLGNBQUEsQ0FGQTtBQUFBLE1BR0FRLFVBQUEsR0FBQVgsUUFBQSxDQUFBWSxnQkFBQSxDQUFBLGVBQUEsQ0FIQSxDQUZBLENBT0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBRCxFQUFBQSxVQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxJQUFBLEVBQUE7QUFFQUEsSUFBQUEsSUFBQSxDQUFBYixnQkFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBO0FBRUFTLE1BQUFBLFdBQUEsQ0FBQUssU0FBQSxDQUFBQyxHQUFBLENBQUEsb0JBQUE7QUFFQSxLQUpBO0FBTUEsR0FSQTtBQVVBLEdBQUFQLFdBQUEsRUFBQUMsV0FBQSxFQUFBRyxPQUFBLENBQUEsVUFBQUksR0FBQSxFQUFBO0FBRUFBLElBQUFBLEdBQUEsQ0FBQWhCLGdCQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFpQixLQUFBLEVBQUE7QUFFQSxVQUFBQSxLQUFBLENBQUFDLFVBQUEsS0FBQVYsV0FBQSxJQUFBUyxLQUFBLENBQUFDLFVBQUEsS0FBQVQsV0FBQSxFQUFBO0FBRUFBLFFBQUFBLFdBQUEsQ0FBQUssU0FBQSxDQUFBSyxNQUFBLENBQUEsb0JBQUE7QUFFQTtBQUVBLEtBUkE7QUFVQSxHQVpBO0FBY0EsQyxDQzFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7O0FDdkJBLElBQUFwQixRQUFBLENBQUFHLGFBQUEsQ0FBQSxnQkFBQSxDQUFBLEVBQUE7QUFFQSxNQUNBa0IsVUFBQSxHQUFBckIsUUFBQSxDQUFBRyxhQUFBLENBQUEsZ0JBQUEsQ0FEQTtBQUFBLE1BRUFtQixLQUFBLEdBQUF0QixRQUFBLENBQUFHLGFBQUEsQ0FBQSxjQUFBLENBRkE7QUFJQWtCLEVBQUFBLFVBQUEsQ0FBQXBCLGdCQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFFQXFCLElBQUFBLEtBQUEsQ0FBQVAsU0FBQSxDQUFBUSxNQUFBLENBQUEsc0JBQUE7QUFFQSxHQUpBO0FBTUEiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgICRoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYy1oZWFkZXInKSxcclxuICAgICAgICAkbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjLW1haW4nKVxyXG5cclxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0XHJcblxyXG4gICAgJG1haW4uc3R5bGUucGFkZGluZ1RvcCA9IGAke2hlYWRlckhlaWdodH1weGBcclxuXHJcbn0pIiwiaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jbG9zZScpKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAkbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jbG9zZScpLFxyXG4gICAgICAgICRtb2RhbFBhcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXBhcGVyJyksXHJcbiAgICAgICAgJG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLW9wZW4tbW9kYWwnKVxyXG5cclxuICAgIC8vIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gICAgIC8vIGlmICgkbW9kYWxQYXBlci5jbGFzc0xpc3QuY29udGFpbnMoJ2MtbW9kYWwtcGFwZXJfb3BlbicpKSB7XHJcblxyXG4gICAgLy8gICAgIC8vICAgICAkbW9kYWxQYXBlci5jbGFzc0xpc3QudG9nZ2xlKCdjLW1vZGFsLXBhcGVyX29wZW4nKVxyXG5cclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyAgICAgJG1vZGFsUGFwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYy1tb2RhbC1wYXBlcl9vcGVuJylcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgJG9wZW5Nb2RhbC5mb3JFYWNoKCRidG4gPT4ge1xyXG5cclxuICAgICAgICAkYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgJG1vZGFsUGFwZXIuY2xhc3NMaXN0LmFkZCgnYy1tb2RhbC1wYXBlcl9vcGVuJylcclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBbJG1vZGFsQ2xvc2UsICRtb2RhbFBhcGVyXS5mb3JFYWNoKCRlbCA9PiB7XHJcblxyXG4gICAgICAgICRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC5zcmNFbGVtZW50ID09PSAkbW9kYWxDbG9zZSB8fCBldmVudC5zcmNFbGVtZW50ID09PSAkbW9kYWxQYXBlcikge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkbW9kYWxQYXBlci5jbGFzc0xpc3QucmVtb3ZlKCdjLW1vZGFsLXBhcGVyX29wZW4nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcblxyXG59IiwiLy8gY29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbi8vIGlmICgkYm9keSkge1xyXG5cclxuLy8gICAgIGxldCBwcmV2U2Nyb2xsSGVpZ2h0ID0gcGFnZVlPZmZzZXRcclxuLy8gICAgIGxldCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2MtaGVhZGVyJylcclxuXHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblxyXG4vLyAgICAgICAgIGlmIChwYWdlWU9mZnNldCA+IHByZXZTY3JvbGxIZWlnaHQpIHtcclxuXHJcbi8vICAgICAgICAgICAgICRoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYy1oZWFkZXJfaGlkZGVuJylcclxuXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuXHJcbi8vICAgICAgICAgICAgICRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYy1oZWFkZXJfaGlkZGVuJylcclxuXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBwcmV2U2Nyb2xsSGVpZ2h0ID0gcGFnZVlPZmZzZXRcclxuXHJcbi8vICAgICB9KVxyXG5cclxuLy8gfSIsImlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLXRvZ2dsZScpKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAkdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci10b2dnbGUnKSxcclxuICAgICAgICAkbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItbWVudScpXHJcblxyXG4gICAgICAgICR0b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAkbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjLWhlYWRlci1ib3R0b21fb3BlbicpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG59Il19
