# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Traffic Light with React

Sometimes we want to create components with an internal state that changes overtime, for example to create a traffic light that changes color every 3 seconds we need to store a `currentColor` variable that maintains the state of the traffic light (green, yellow or red).

The component state is just normal variables that can be changed during the component lifecycle or during the application runtime, every time those variables change the component will re-render again.

# Instructions

Let's simulate a traffic light [like this one](https://projects.breatheco.de/json?slug=traffic-light-react&preview).

The light has to glow when clicked.

- The whole purpose of the component is displaying a traffic light with read, yellow and green lights.
- When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
- The component must have a hooked state variable that tracks the color:

```js
const [ color, setColor] = useState("red");
```

- Use the setColor function to change the color an the component will automatically re-render (because it's hooked with useState).

- Use the ReactDOM.render to render the component into the DOM like this
```js
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```