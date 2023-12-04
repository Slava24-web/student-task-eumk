import React from 'react';
import { Nav } from "react-bootstrap";

export const Main = () => {
    return (
        <div className="main">
            <h4 className="main-title">Оглавление</h4>
                <Nav className="lections-list flex-column">
                    <Nav.Link href="/lections/1">Лекция 1 - 2. Основы HTML</Nav.Link>
                    <Nav.Link href="/lections/2">Лекция 3. CSS. Каскадные таблицы стилей</Nav.Link>
                    <Nav.Link href="/lections/3">Лекция 4. JavaScript. Основные сведение о JavaScript</Nav.Link>
                    <Nav.Link href="/test">Итоговое тестирование (зачёт)</Nav.Link>
                </Nav>
        </div>
    );
};
