# WeatherApp

WeatherApp es una aplicación sencilla que permite visualizar el pronóstico actual y el de los siguientes 5 dias. También puede obtenerse la información del pronóstico para 5 ciudades seleccionables. 

## Comenzando

*Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.*

- Clonar el repositorio

- En la consola entrar al directorio donde se clonó

- Ejecutar `$ npm install `

- Cuando termine, ejecutar: `$ npm start `

## Librerías Utilizadas

**ReactJS**

**Styled components** (Estilos)

**Styled normalize** (Estilos globales)

## API 

Se utilizó la API recomendada **Open Weather Map** con el formato **5 day / 3 hour Forecast** y a continuación se describen 2 situaciones que deberían tomarse en cuenta al recomendar esta API.

- Se observa que la API recomendada no tiene manera de cambiar el formato horario (GMT-3) con el que se consulta (actualmente hecho con UTC+1). Tampoco toma el huso horario del país que se le envía por path.

- Se observa que la API, cuando se le consulta, devuelve un array de 40 posiciones, con lo cual, en cierta franja horaria, utilizando la api 5 days / 3 hours que se dispone de manera gratuita, hace imposible recuperar 5 días.

**Explicación:** *Si uno se encuentra dentro de la franja horaria de 18 a 21hs, el valor que contiene el horario de la posición [0], es de 00:00hs del día siguiente (por la primer razón que se mencionó anteriormente). Por ejemplo, si en este momento es 17/03/2021 20:50, la api me devolverá en la posición [0] del array, el clima de la fecha 18/03/2021 con horario 00:00.
Esto se traduce a que, teniendo 40 posiciones y sabiendo que cada posición que la API trae, es el clima cada 3 horas, en la posición [32] tendré la fecha 22/03/2021 con horario 00:00hs, y en la posición [39] del array (la última posición disponible) encontraré la fecha 22/03/2021 con horario 21:00hs.*

**Resolución** Por esos motivos, en el momento en el cual el horario es de 18hs a 21hs, se mostrarán en WeatherApp solo 4 días de pronóstico.

----

Created by @NuriaROrquin