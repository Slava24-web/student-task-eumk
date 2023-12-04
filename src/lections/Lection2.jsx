import React from 'react';
import pdf from './../files/Лекция 3.pdf'
import pdfIcon from './../img/pdf.png'

export const Lection2 = () => {
    return (
        <div className="lection-block">
            <h5>Лекция 3. CSS. Каскадные таблицы стилей</h5>
            <br/>
            <img src={pdfIcon} alt="pdf" className="icon"/>
            <a href={pdf} download>Скачать лекцию в формате PDF</a>
            <p className="form-note">Задания для самостоятельной подготовки по теме "CSS. Каскадные таблицы стилей"</p>

            <div className="form">
                <iframe src="https://forms.yandex.ru/u/656a041c69387263eb591fff/?iframe=1" frameBorder="0"
                        name="ya-form-656a041c69387263eb591fff" width="650"></iframe>
            </div>
        </div>
    );
};
