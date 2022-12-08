import Current from './components/Current.jsx'
import Voltage from './components/Voltage.jsx'

import './app.css'

function App() {
  return (
    <div className='app_main'>
      <Current className="current" />
      <Voltage />
    </div>
  );
}

export default App;
