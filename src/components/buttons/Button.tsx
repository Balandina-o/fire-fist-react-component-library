import React, { FC } from "react";

type ButtonProps = {
    label: string;
}

const Button: FC<ButtonProps> = ( { label } ) => {
    return <button>
        { label }
    </button>;
};

export default Button;