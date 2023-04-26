import { useState, useEffect } from "react";
import "./style.css";



export const Cursor = () => {
    const coords = { x: 0, y: 0 };
    const [clickActive, setClickActive] = useState(false);
    const cursors = document.querySelectorAll(".cursor");


    /* Move Cursor */
    cursors.forEach(function (cursor) {
        cursor.x = 0;
        cursor.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function moveCursor() {
        let x = coords.x;
        let y = coords.y;


        cursors.forEach(function (cursor, index) {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
            cursor.x = x;
            cursor.y = y;

            const nextCursor = cursors[index + 1] || cursors[0];
            x += (nextCursor.x - x) * .95;
            y += (nextCursor.y - y) * .95;
        });

        requestAnimationFrame(moveCursor);
    }

    moveCursor();

    /* Scale Animation */

    const clickAnimation = () => {
        window.addEventListener("mousedown", (e) => {
            while (e) {
                
            }
        })
    }


    return (
        <>
            <div className={`cursor inner-cursor ${clickActive ? "" : ""}`}></div>
            <div className="cursor outer-cursor"></div>
        </>
    )
}