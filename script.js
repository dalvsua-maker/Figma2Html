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

});