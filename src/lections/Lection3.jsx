import React from 'react';
import pdf from './../files/Лекция 4.pdf'
import pdfIcon from './../img/pdf.png'

export const Lection3 = () => {
    return (
        <div className="lection-block">
            <h5>Лекция 4. JavaScript. Основные сведение о JavaScript</h5>
            <br/>
            <img src={pdfIcon} alt="pdf" className="icon"/>
            <a href={pdf} download>Скачать лекцию в формате PDF</a>
            <p className="form-note">Задания для самостоятельной подготовки по теме "JavaScript. Основные сведение о JavaScript"</p>

            <div className="form">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src="https://forms.yandex.ru/u/656a0629eb614667b55f255e/?iframe=1" frameBorder="0"
                        name="ya-form-656a0629eb614667b55f255e" width="650"></iframe>
            </div>
        </div>
    );
};
