$(document).ready(function () {

    // Comprobamos si el usuario ya eligió el modo oscuro anteriormente
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('#theme-icon').text('☀️');
    }

    // Escuchamos el clic en el botón
    $('#theme-toggle').on('click', function () {

        $('body').toggleClass('dark-mode');

        if ($('body').hasClass('dark-mode')) {
            $('#theme-icon').text('☀️');
            localStorage.setItem('theme', 'dark');
        } else {
            $('#theme-icon').text('🌙');
            localStorage.setItem('theme', 'light');
        }
    });
   $.getJSON("https://randomuser.me/api/", function (data) {
      console.log(data);
      $(".users-card").html(
        "<p>Nombre: " +
          data.results[0].name.first +
          " " +
          data.results[0].name.last +
          "</p>",
      );
      $(".users-card").append("<p>Telefono: " + data.results[0].phone + "</p>");
      $(".users-card").append("<p>Correo: " + data.results[0].email + "</p>");
      $(".users-card").append(
        "<img src=" + data.results[0].picture.large + ">",
      );
    });
});