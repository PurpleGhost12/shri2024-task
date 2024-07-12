import React from 'react';

import { Main } from "./components/main";
import { Header } from "./components/header";


export function App() {
  return (
    <React.StrictMode>
        <>
            <Header/>
            <Main />
        </>
    </React.StrictMode>
  );
}
