import React from 'react';

export const Test = () => {
    return (
        <div className="test">
            <h4>Итоговое тестирование по курсу "Фронтенд-разработка"</h4>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe src="https://forms.yandex.ru/u/656a0bf13e9d0864cbd8f8d9/?iframe=1" frameBorder="0"
                    name="ya-form-656a0bf13e9d0864cbd8f8d9" width="650">
            </iframe>
        </div>
    );
};
