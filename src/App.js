import './App.css';
import NavbarComp from './components/NavbarComp';
import Card from './components/Card';
function App() {
  return (
    <>
     <NavbarComp/>
     <Card title="Saumya Turaskar" desc="Html,Css,Bootsraps" button="Next" imgurl="https://images.pexels.com/photos/6479587/pexels-photo-6479587.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <Card title="Hey , Here Saumya " desc="Html,Css,Bootsraps" button="Start" imgurl="https://images.pexels.com/photos/6637370/pexels-photo-6637370.jpeg"/>
     </> 
  );
}
export default App;

