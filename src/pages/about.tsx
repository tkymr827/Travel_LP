import React from "react";
import { Title } from "../modules/title";
import train1 from "../img/train1.jpg";
import train2 from "../img/train2.jpg";
import train3 from "../img/train3.jpg";

export const About: React.FC = () => {
    return (
        <div className="about">
            <Title className="title-contents" text="EXCITING TOURS FOR ADVENTUROUS PEOPLE" />
            <div className="wrapper">
                <div className="contents">
                    <div className="contents-detail">
                        <div className="contents-detail_title">A TRIP TO GO WITH A FOREIGN SHIP</div>
                        <div className="contents-detail_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam facere rerum laboriosam dicta enim molestias
                            commodi iste aliquid, quam explicabo dolore aperiam dolorum placeat. Eaque nesciunt atque id sapiente?
                        </div>
                    </div>
                    <div className="contents-detail">
                        <div className="contents-detail_title">JOURNEY BY LUXURY TRAIN</div>
                        <div className="contents-detail_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam facere rerum laboriosam dicta enim molestias
                            commodi iste aliquid, quam explicabo dolore aperiam dolorum placeat. Eaque nesciunt atque id sapiente?
                        </div>
                    </div>
                    <a className="contents-link" href="#">
                        Learn more →
                    </a>
                </div>
                <div className="images">
                    <img src={train1} alt="train1" />
                    <img src={train2} alt="train2" />
                    <img src={train3} alt="train3" />
                </div>
            </div>
        </div>
    );
};
