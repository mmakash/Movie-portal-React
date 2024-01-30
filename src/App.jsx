import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MovieList from './Cine/MovieList';
import Footer from './Footer';
import { MovieContext, ThemContext } from './Context';

const App = () => {
  const [cartData,setCartData] = useState([]);
  const [darkMode,setDarkMode] = useState(true);
  return (
    <>
     <ThemContext.Provider value={{darkMode,setDarkMode}}>
     <MovieContext.Provider value={{cartData,setCartData}}>
    <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
    <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
     </MovieContext.Provider>
     </ThemContext.Provider>
    </>
  );
};

export default App;