function App() {
  const handleWalletConnect = () => {
    console.log("abhi complete nai hua");
  };

  return (
    <div className="App">
      <h2>This is a demo for connecting Crypto Wallets</h2>
      <button onClick={handleWalletConnect}>Connect Your wallet</button>
    </div>
  );
}

export default App;
