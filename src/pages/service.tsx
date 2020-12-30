import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../modules/card";

export const Service: React.FC = () => {
    return (
        <div className="service">
            <div className="service-overlay"></div>
            <div className="wrapper">
                <Card logo={"globe"} title={"THE WORLD"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, non officiis dolor, sequi magni laboriosam id illo,corporis aspernatur accusamus et! Optio rerum dolores suscipit ab eum animi mollitia?"}/>
                <Card logo={"plane"} title={"THE PLANE"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, non officiis dolor, sequi magni laboriosam id illo,corporis aspernatur accusamus et! Optio rerum dolores suscipit ab eum animi mollitia?"}/>
                <Card logo={"train"} title={"THE TRAIN"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, non officiis dolor, sequi magni laboriosam id illo,corporis aspernatur accusamus et! Optio rerum dolores suscipit ab eum animi mollitia?"}/>
                <Card logo={"bus"} title={"THE BUS"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus, non officiis dolor, sequi magni laboriosam id illo,corporis aspernatur accusamus et! Optio rerum dolores suscipit ab eum animi mollitia?"}/>
            </div>
        </div>
    );
};
