/**
 * Файл экспортирует UI-компоненты, создает элемент App, предназначенный
 * для тестирования функциональности компонентов.
 * 
 * @copyright Balandina-o 2024
 */
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import CommonButton from './components/CommonButton/CommonButton';
//import '../index.d.ts';

/** ---- Экспорт компонентов ---- */
export { CommonButton }

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(React.createElement(App));
