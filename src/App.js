import './App.css';
import "./components/Sidebar"
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Blog from './components/Blog';
import Center from './components/Center';
import {ContextProvider} from './components/context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className='box'>
        <Center />
        <Sidebar />
        <Blog />
      </div>
    </ContextProvider>
  )
}

export default App;
