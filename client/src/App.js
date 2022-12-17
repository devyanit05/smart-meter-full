import Current from './components/Current.jsx'
import Voltage from './components/Voltage.jsx'
import Power from './components/Power.jsx'


import './app.css'

function App() {
  return (
    <div className='app_main'>
      <div className='current'><Current /></div>
      <div className='current'><Voltage /></div>
      <div className='current'><Power /></div>
    </div>
  );
}

export default App;
