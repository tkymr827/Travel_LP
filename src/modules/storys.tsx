import React from "react";

interface Props {
    img: string;
    title: string;
    text: string;
}

export const Storys: React.FC<Props> = ({ img, title, text }) => {
    return (
        <div className="storys">
            <div className="storys-image">
                <img src={img} alt={img} />
            </div>
            <div className="storys-sentence">
                <div className="storys-sentence_title">{title}</div>
                <div className="storys-sentence_text">{text}</div>
            </div>
        </div>
    );
};
