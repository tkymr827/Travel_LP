import React from "react";
import { Title } from "../modules/title";
import { CardBig } from "../modules/card-big";
import product1 from "../img/product1.jpg";
import product2 from "../img/product2.jpg";
import product3 from "../img/product3.jpg";

export const Product: React.FC = () => {
    return (
        <div className="product">
            <Title className="title-contents" text="RECOMMENDED TOUR" />
            <div className="wrapper">
                <CardBig img={product1} title={"HEADING SAMPLE"} />
                <CardBig img={product2} title={"HEADING SAMPLE"} />
                <CardBig img={product3} title={"HEADING SAMPLE"} />
            </div>
        </div>
    );
};
