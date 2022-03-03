import Header from './components/header/header.jsx'
import Body from './components/body/Body.jsx'
import Character from './components/body/character/character.jsx';

function App() {
  return (
    <div className="bg-slate-100 dark:bg-primary">
      <Header />
      <Body>
        <Character />
      </Body>
    </div>
  );
}

export default App;
