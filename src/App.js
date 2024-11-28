import './App.css';
import Header from './components/Header'
import Entry from './components/Entry';
import  data  from "./data";
function App() {
  const travelData= data.map((travels) => {
      return (
          <Entry 
            key= { travels.id}
            entry ={ travels}
            // instead of doing the above you can just do {...enrty } and have those props.entry in the entry jsx deleted and it would work just fine  
          />
      ) 
  })
  return (
    <>
        <Header/>
        <main>
            {travelData}
        </main>
    </>
  );
}

export default App;
