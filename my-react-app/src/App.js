import './App.css';
import ClassClick from './components/4. Event Handling/ClassClick';
import CounterState from './components/3. states/CounterState';
import FunctionClick from './components/4. Event Handling/FunctionClick';
import Greet from './components/2. props/Greet';
// import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Avneet" heroName="Kaur" >
        this children content
      </Greet>
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Super Man" />
      <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* <Message name="Avneet"/> */}
      {/* <CounterState/> */}
      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
