import AddVAT from './components/AddVat'

function App() {
  const value = 100;
  const vat = 22;
  return (
    <div className="App">
      <header>
      <AddVAT value={100} vat={22} />
      </header>
    </div>
  );
}

export default App;
