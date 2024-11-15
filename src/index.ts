/**
 * Файл экспортирует UI-компоненты, создает элемент App, предназначенный
 * для тестирования функциональности компонентов.
 * 
 * @copyright Balandina-o 2024
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MyButton from './components/MyButton/MyButton';

/** ---- Экспорт компонентов ---- */
export { MyButton }

/** ---- Сoздание App ---- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
