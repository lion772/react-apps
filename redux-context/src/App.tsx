import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
          <Navigation />
          <main>
              <Route path="/" component={ProductsPage} exact />
              <Route path="/favorites" component={FavoritesPage} />
          </main>
      </>
  );
}

export default App;
