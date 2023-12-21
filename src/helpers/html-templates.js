const dayjs = require('dayjs');

const emailConfirmation = (user, newReservation, shift) => {

    return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casa Miranda</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@200;300;400;500&family=Syne:wght@400;500;600;700&display=swap');

        :root {
            --main-color: #741f34;
            --secondary-color: #294947;
            --third-color: #ff992c;


            --bg-color: #F5F5F4;

            --blue-brand: #1136c7;
            --red-delete: #cd1212;

            --white: #ffffff;
            --light-grey: #E8E8E8;
            --dark-grey: #808080;

            --black: #1A1A1A;

            /* Spaces */
            --main-padding: 1.25rem;
            --double-padding: calc(var(--main-padding) * 2);

            /* Contents */
            --main-B-Radius: 1.25rem;

        }

        /* 
font-family: 'Inter', sans-serif;
font-family: 'Baskervville', serif;
font-family: 'Syne', sans-serif;
 */

        p,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Baskervville', serif !important;
        }

        h1 {
            font-size: 30px !important;
        }

        p,
        a {
            font-size: 1rem !important;
            font-family: 'Inter', sans-serif !important;
            font-weight: 300;
        }

        .buttonCustom {
            padding: 0.5rem 1.875rem;
            margin: var(--main-padding) 0;
            border-radius: 1.6875rem;
            border: 1px solid var(--main-color);
            color: var(--main-color);
            transition: 0.4s;
            cursor: pointer;
            background-color: #ffffff00;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                background-color: var(--main-color);
                color: var(--light-grey);
            }
        }

        .separador {
            margin: 3rem 0;
        }

        .imag {
            width: 20px;
            height: 20px;
        }

        .contA {
            margin: 0px 5px 0 5px;
        }

        .afooter {
            color: #ffffff !important;
            text-decoration: none;
            font-size: 13px !important;
        }

        .logo {
            color: var(--main-color);
            text-align: center;
            font-family: 'Baskervville', serif !important;
            font-size: 2.2rem;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.0525rem;
            transform: translateY(-3px);
        }
    </style>
</head>

<body>
    <div style="width: 100%; background-color: #ededed;">
        <div style="padding: 20px 10px 20px 10px;">

            <!-- Imagen inicial -->

            <!-- Contenido principal -->
            <div style="background-color: #ededed; padding: 30px 0px 30px 0px; width: 100%; text-align: center;">
                <div class="logo navbar-brand d-none d-lg-block">
                    <h1>casa Miranda</h1>
                </div>

                <div style=" padding: 10px 0px 0px 0px;">
                    <p>
                        ¡Hola, ${user.name}!
                        Estamos muy emocionados de recibirte próximamente en Casa Miranda.
                    </p>
                    <p>
                        Aquí tienes los datos de tu reserva:
                    </p>
                    <p>
                        Fecha:${dayjs(newReservation.r_date).format('DD/MM/YYYY')}
                        Hora: ${shift.time}
                        Comentarios: ${newReservation.notes}
                        Comensales: ${spot.max_seating}
                    </p>
                    <p>
                        Para realizar cambios en tu reserva, por favor accede a tu perfil dentro de nuestra web
                        ¡Nos vemos pronto!
                    </p>
                    <!-- Botón -->
                    <div class="separador">
                        <a class="buttonCustom" href="http://localhost:4200/login">Entra desde aquí</a>
                    </div>
                </div>
                <div style="margin-bottom: 50px;">
                    <p>
                        El equipo de Casa Miranda
                        91 345 23 67
                        Calle del Acuerdo, nº 1 Madrid
                        proyecto.casa.miranda@gmail.com
                    </p>
                </div>



            </div>

            <!-- Footer -->
            <div style=" color: #2d2d2d; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">

                <p style=" padding: 10px 0px 10px 0px; font-size: 12px !important;">
                    © 2024 Casa Miranda, todos los derechos reservados.
                </p>
            </div>
            <!-- Footer -->



        </div>
    </div>
</body>

</html>`;

}

module.exports = {
    emailConfirmation
}