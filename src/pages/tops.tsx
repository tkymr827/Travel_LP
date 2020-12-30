import React from "react";
import { Button } from "../modules/button";
import { Title } from "../modules/title";

export const Top: React.FC = () => {
    return (
        <div className="top">
            <div className="top-overlay"></div>
            <Title className="title-primary" text="GO ON A JOURNEY" />
            <Title className="title-secondary" text="GO OUT OF THE HOME AND GO TO THE NEW WORLD." />
            <Button className="top-btn" btn_text="DESICOVER OUR TOURS" />
        </div>
    );
};
