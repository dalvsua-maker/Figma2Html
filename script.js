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

const testimonials = [
    `<div>
        <p class="testimonial-text">
            "Implementar Apollo.IA en nuestro departamento ha sido un antes y un después. La precisión en el análisis de datos nos ahorra horas de revisión manual cada día."
        </p>
        <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
    </div>`,
    
    `<div>
        <p class="testimonial-text">
            "Lo que más me impresiona es la interfaz intuitiva. No necesité formación previa para empezar a generar reportes complejos con una calidad profesional asombrosa."
        </p>
        <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
    </div>`,
    
    `<div>
        <p class="testimonial-text">
            "El soporte técnico es excelente, pero la herramienta es tan robusta que apenas lo necesitas. Es, sin duda, la mejor inversión tecnológica que hemos hecho este año."
        </p>
        <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
    </div>`
];
let cont=0;
    // Carga de 3 testimonios desde la API
    $.getJSON("https://randomuser.me/api/?results=3", function (data) {
        const container = $("#testimonials-container");
        container.empty(); // Limpiamos el contenedor

        data.results.forEach(user => {
            const testimonialHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-profile">
                        <img src="${user.picture.large}" alt="${user.name.first}" class="testimonial-img">
                        <div class="testimonial-author">
                            <h4>${user.name.first} ${user.name.last}</h4>
                            <span>Usuario Verificado</span>
                        </div>
                    </div>
                  ${testimonials[cont]}
                </div>
            `;
            container.append(testimonialHTML);
            cont++;
        });
    });

});