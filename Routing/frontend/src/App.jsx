import React from 'react';
import Layout from '@components/layout/layout';
import HomePage from '@pages/home/home';
import AboutPage from '@pages/about/about';
import CatalogPage from '@pages/catalog/catalog';
import BookPage from '@pages/book/book';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/book/:id' element={<BookPage />} />
      </Route>
      
    </Routes>
  )
}

export default App
