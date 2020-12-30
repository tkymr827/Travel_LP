import React from "react";

interface Props {
    text: string;
    className: string;
}

export const Title: React.FC<Props> = ({ text, className }) => {
    return <div className={className}>{text}</div>;
};
