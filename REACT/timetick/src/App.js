
import './App.css';
import Greetings from "./components/Greetings";


function App() {


  const myEmail = {
     myMessage : 'Hi I am here',
     From : 'Christian',
     Recepient:['nelson@smartteckltd.com','samuela@microbug.com','aine@designhub.com', 'aurore@wetravel.com']

  }
  return (
    <div className="App">
      <Greetings {...myEmail}/>
    </div>
  );
}

export default App;
