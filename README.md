# Traffic Light with React

Sometimes we want to create components with an internal state that changes overtime, imagine a traffic light that changes color every 3 seconds, for that we normally will make a variable color and set it to a default color:

```js
let color = "blue";
```

But we want our component to re-render and change the website HTML every time the variable color changes, that's why we use hooks:

```js
//        ↓ variable name             ↓ default value
const [ color, setColor] = useState("red");
//               ⬆ function to change the color
```

From now one, every time we use the function `setColor` to change the variable color, the component will re-render and the entire traffic light HTML will be updated with the new color. 

> You can [read more about hooks here](https://content.breatheco.de/lesson/react-hooks-explained).

## 🌱  How to start this project

Do not clone this repository.

The first step to start coding is cloning the [react boilerplate](https://github.com/4GeeksAcademy/react-hello) on your local computer or gitpod.

a) If using Gitpod you can clone the boilerplate by [clicking here](https://github.com/4GeeksAcademy/react-hello).

b) If working locally type the following command from your command line: `$ git clone https://github.com/4GeeksAcademy/react-hello`.

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.

## 📝 Instructions

Let's simulate a traffic light [like this one](https://github.com/breatheco-de/exercise-traffic-light-react/blob/master/preview.gif).

The light has to glow when clicked.

- The whole purpose of the component is displaying a traffic light with red, yellow and green lights.
- When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
- The component must have a hooked state variable that tracks the color:

```js
const [ color, setColor] = useState("red");
```

- Use the setColor function to change the color an the component will automatically re-render (because it's hooked with `useState`).

- Use the ReactDOM.render to render the component into the DOM like this
```js
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```
