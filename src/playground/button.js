console.log('App.js is running')

//JSX - JavaScript XML

let count = 0;

const addOne = () => {

    console.log('addOne');

}

const template = (

    <div>
        <h1>Count: {count}</h1>
        <button onClick={(addOne)}> +1</button>
    </div>

);

console.log(template);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);