import React from "react";

interface Props {
    btn_text: string;
    className: string;
}

export const Button: React.FC<Props> = ({ btn_text, className }) => {
    return <div className={className}>{btn_text}</div>;
};
