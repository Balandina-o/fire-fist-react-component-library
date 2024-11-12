import React, { FC } from "react";

export interface MyButtonProps {
    label: string;
}

export const MyButton: FC<MyButtonProps> = ( { label } ) => {
    return <button>
        { label }
    </button>;
};

export default MyButton;