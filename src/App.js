import CalendarPicker from './lib/Calendar';

function App() {
  return (
    <CalendarPicker 
      onSelect={(e) => console.log(e)}    
    />
  );
}

export default App;
