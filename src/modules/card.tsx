import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

interface Props {
    logo: IconProp;
    title: string;
    text: string;
}

export const Card: React.FC<Props> = ({ logo, title, text }) => {
    return (
        <div className="card">
            <FontAwesomeIcon icon={logo} className="card-icon" />
            <div className="card-title">{title}</div>
            <div className="card-text">{text}</div>
        </div>
    );
};
