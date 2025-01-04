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
        emp.map((obj)=>{
          return (
            <Employee name={obj.name} age={obj.age} />
          )
        })
      }
    </div>
  );
}

export default App;
