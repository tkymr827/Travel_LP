import React from "react";

interface Props {
    img: string;
    title: string;
}

export const CardBig: React.FC<Props> = ({ img, title }) => {
    return (
        <div className="cardbig">
            <div className="cardbig-img">
                <img src={img} alt="product1" />
                <div className="cardbig-img_title">{title}</div>
            </div>
            <ul>
                <li>1 day tours</li>
                <li>2 day tours</li>
                <li>3 day tours</li>
                <li>4 day tours</li>
                <li>5 day tours</li>
            </ul>
        </div>
    );
};
