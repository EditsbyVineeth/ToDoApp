import './App.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './Components/Pages/IntroSection';
import './Components/Styles/PageStyle.css'
import { useState } from 'react';
import Layout from './Components/Pages/Layout';

import { Provider } from 'react-redux';
import store from './StateManagement/store';

function App() {

  const[start, setStart] = useState(false)

 
  const handleStart = () =>{
    console.log("start clicked")
    setStart(true)
  }

  return (
    <Provider store={store}>
    <div className="App"> 
    { start ?
    <Layout/> :
      <IntroSection buttonClicked={handleStart}/> 
      
    }


    </div>
    </Provider>
  );
}

export default App;
