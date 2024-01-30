import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MovieList from './Cine/MovieList';
import Footer from './Footer';
import { MovieContext } from './Context';

const App = () => {
  const [cartData,setCartData] = useState([]);
  return (
    <>
     <MovieContext.Provider value={{cartData,setCartData}}>
     <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
     </MovieContext.Provider>
    </>
  );
};

export default App;