import React from "react";
import { Title } from "../modules/title";
import { Storys } from "../modules/storys";
import storys1 from "../img/storys1.jpg";
import storys2 from "../img/storys2.jpg";

export const Impression: React.FC = () => {
    return (
        <div className="impression">
            <div className="impression-overlay"></div>
            <Title className="title-contents" text="STORYS SAMPLE" />
            <div className="wrapper">
                <Storys
                    img={storys1}
                    title={"HEADING SAMPLE"}
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore nostrum, sed molestiae temporibus nemo aspernatur corrupti consequatur ad quisquam minus ducimus maxime sunt explicabo. Necessitatibus corrupti soluta quidem? Soluta!"
                    }
                />
                <Storys
                    img={storys2}
                    title={"HEADING SAMPLE"}
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore nostrum, sed molestiae temporibus nemo aspernatur corrupti consequatur ad quisquam minus ducimus maxime sunt explicabo. Necessitatibus corrupti soluta quidem? Soluta!"
                    }
                />
            </div>
        </div>
    );
};
