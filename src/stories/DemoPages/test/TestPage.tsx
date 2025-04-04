import { useState } from "react";
import { Checkbox, Chips } from "../../../lib";

const TestPage = () => {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Chips clicked", e);
    };

    const handleDelete = () => {
        console.log("Chips deleted");
    };

    return (
        <div>
            <Chips text="Chips Example" onClick={handleClick} onDelete={handleDelete} />
        </div>
    );
};

export default TestPage;