// $(document).ready(function () {
//   $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     var target = this.hash,
//       $target = $(target);
//     $('html, body')
//       .stop()
//       .animate(
//         {
//           scrollTop: $target.offset().top,
//         },
//         900,
//         'swing',
//         function () {
//           window.location.hash = target;
//         },
//       );
//   });
// });

// $(document).ready(function () {
//   $('#menu').on('click', 'a', function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//       top = $(id).offset().top;

//     $('body,html').animate({ scrollTop: top }, 800);
//   });
// });
