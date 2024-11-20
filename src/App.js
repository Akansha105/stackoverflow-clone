import './App.css';
import "./components/Sidebar"
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Blog from './components/Blog';
import Center from './components/Center';

function App() {
  return (
    <>
      <Header />
      <div className='box'>
        <Center />
        <Sidebar />
        <Blog />
      </div>
    </>
  )
}

export default App;
