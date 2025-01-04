import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

let emp = [
  {name:'Abhinand', age:20},
  {name:'Sachin', age:51},
  {name:'Rohit', age:37},
]

function App() {
  return (
    <div>
      {
        emp.map((obj,index)=>
          (
            // <Employee key={index} name={obj.name} age={obj.age} />
            <Employee key={index} {...obj} />
          )
        )
      }
    </div>
  );
}

export default App;
