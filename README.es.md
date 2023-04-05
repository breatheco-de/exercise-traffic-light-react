<!--hide-->
# Traffic Light with React
<!--endhide-->

A veces queremos crear componentes que mantengan un estado interno en el tiempo, imaginemos un semáforo que cambia de color cada 3 segundos, para implementar eso tendríamos una variable `color` que puede tener como valor cualquier color entre [amarillo, rojo, verde]

```js
let color = "blue";
```

Pero solo con tener esa variable no basta, necesitamos que cada vez que la variable color cambie también lo haga el código HTML del semáforo, para eso utilizamos el hook de react llamado `useState`:

```js
//        ↓ variable name             ↓ default value
const [ color, setColor] = useState("red");
//               ⬆ function to change the color
```
De ahora en adelante, cada vez que utilicemos la function setColor para cambiar el valor de la variable color, el HTML del componente también se actualizará para reflejar el cambio.

> Puedes [leer más sobre hooks aquí](https://content.breatheco.de/lesson/react-hooks-explained).

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react boilerplate` usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/react-hello
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

# 📝 Instrucciones

Simulemos un semáforo [como este](https://github.com/breatheco-de/exercise-traffic-light-react/blob/master/preview.gif).

La luz tiene que brillar cuando se hace clic.

- Todo el propósito del componente es mostrar un semáforo con luces de lectura, amarillas y verdes.
- Cuando se hace clic (se selecciona) alguna luz, ésta debe brillar, pero las otras luces deben dejar de brillar.
- El componente debe tener un estado que almacene el color actual que debe brillar, por eso debes usar el hook `useState` de la siguiente manera:
```js
const [ color, setColor] = useState("red");
```
- Utiliza ReactDOM.render para procesar el componente en el DOM de esta manera
```js
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```
## 🔥 Bonus

+ 2 Crea un botón que, al hacer clic en él, alterna el color seleccionado del semáforo entre rojo, verde y amarillo.

+ 10 Tener un botón que al hacer clic en él anuncie un color extra "púrpura" al semáforo.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Curso de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).