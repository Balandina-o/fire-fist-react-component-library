/**
 * Модуль экспортирует компонент базовой кнопки.
 * 
 * @copyright Balandina-o 2024
 */

import { FC } from "react";

export declare interface CommonButtonProps {
    label: string;
}

export const CommonButton: FC<CommonButtonProps> = ( { label } ) => {
    return <button>
        { label } Проверка
    </button>;
};

export default CommonButton;
