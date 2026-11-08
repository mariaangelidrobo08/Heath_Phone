// Autotest orientativo
        const testForm = document.getElementById("test-form");

        testForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const datos = new FormData(testForm);
            let puntuacion = 0;

            puntuacion += Number(datos.get("pregunta1"));
            puntuacion += Number(datos.get("pregunta2"));
            puntuacion += Number(datos.get("pregunta3"));

            const resultado = document.getElementById("resultado-test");

            if (puntuacion <= 1) {
                resultado.textContent =
                    "Tus respuestas sugieren hábitos relativamente equilibrados. Sigue cuidando tu tiempo de pantalla.";
            } else if (puntuacion <= 3) {
                resultado.textContent =
                    "Podrías revisar algunos hábitos y establecer límites para equilibrar mejor tu tiempo de pantalla.";
            } else {
                resultado.textContent =
                    "Tus respuestas sugieren que sería útil prestar más atención a tus hábitos digitales y buscar apoyo si están afectando tu vida diaria.";
            }
        });


        // Mensaje informativo del formulario de contacto
        const contactoForm = document.getElementById("contacto-form");

        contactoForm.addEventListener("submit", function(event) {
            event.preventDefault();

            document.getElementById("mensaje-contacto").textContent =
                "El formulario es una demostración: todavía no está conectado a un servicio de correo.";
        });