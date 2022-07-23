import './App.css';
import FirstComponent from './components/FirstComponent';
import ParentComponent from './components/ParentComponent';
import SecondComponentParameter from './components/SecondComponentParameter';

function App() {
  return (
    <div className="App">

            <FirstComponent />
            <p>Página Principal</p>
            <SecondComponentParameter index="2" other="algum"/>
            <SecondComponentParameter index="4" other="mais algum"/>
            <ParentComponent>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>...</li>
              </ul>


            </ParentComponent>


     </div>
  );
}

export default App;
