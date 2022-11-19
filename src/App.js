import { CalendarPicker, Modes } from './lib/Calendar';

function App() {
  return (
    <CalendarPicker 
      mode={Modes.FullDate}
      onSelect={(v) => console.log(v)}    
    />
  );
}

export default App;
