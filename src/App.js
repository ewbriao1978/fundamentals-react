import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponentParameter from './components/SecondComponentParameter';

function App() {
  return (
    <div className="App">

            <FirstComponent />
            <p>Página Principal</p>
            <SecondComponentParameter index="2" other="algum"/>

     </div>
  );
}

export default App;
