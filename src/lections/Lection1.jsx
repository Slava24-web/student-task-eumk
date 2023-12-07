import React from 'react';
import pdf from './../files/Лекция 1-2.pdf'
import pdfIcon from './../img/pdf.png'

export const Lection1 = () => {
    return (
        <div className="lection-block">
            <h5>Лекция 1 - 2. Основы HTML</h5>
            <br/>
            <img src={pdfIcon} alt="pdf" className="icon"/>
            <a href={pdf} download>Скачать лекцию в формате PDF</a>
            <p className="form-note">Задания для самостоятельной подготовки по теме "Основы HTML"</p>

            <div className="form">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src="https://forms.yandex.ru/u/6569f31f73cee7613e424f76/?iframe=1" frameBorder="0"
                        name="ya-form-6569f31f73cee7613e424f76" width="650">
                </iframe>
            </div>
        </div>
    );
};

