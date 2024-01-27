import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MovieList from './Cine/MovieList';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;