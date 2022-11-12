import * as React from 'react';
import { useState } from "react";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { About } from './components/About';
import { CreateLoan } from './components/CreateLoan';
import { SimpleForm } from './components/SimpleForm';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { LoansTable } from './components/LoansTable';
import { NoMatch } from './components/NoMatch';
import './styles.css';
import "./App.css";

export default function App() {
  return (
    <div>
      <h3>Basic Example</h3>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<LoansTable />} />
          <Route path="createLoan" element={<CreateLoan />} />
          <Route path="form" element={<SimpleForm />} />
          <Route path="about" element={<About />} />
          
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
