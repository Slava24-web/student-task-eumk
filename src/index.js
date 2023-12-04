import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navbar";
import { Main } from "./Main";
import { Lection1 } from "./lections/Lection1";
import { Lection2 } from "./lections/Lection2";
import { Lection3 } from "./lections/Lection3";
import { Test } from "./Test";
import { Info } from "./Info";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navigation />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/lections/1" element={<Lection1/>} />
                <Route path="/lections/2" element={<Lection2/>} />
                <Route path="/lections/3" element={<Lection3/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="/info" element={<Info/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
