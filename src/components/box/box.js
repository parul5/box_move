import React, { useEffect, useState, useCallback } from "react";
import "./box.css";

const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
];

export default function Box({ id, deleteAction, isDisabled, initialPosition }) {
    const [position, setPosition] = useState([initialPosition[0], initialPosition[1]]);

    const onKey = (event) => {
        if (isDisabled) return;
        if (event.code === "Delete") {
            deleteAction(event.target.style.zIndex)
            return;
        }
        if (event.code === "ArrowUp" || event.code === "KeyW") {
            if (position[1] <= 200) {
                setPosition((prev) => {
                    return [prev[0], 0];
                });
                return;
            }

            setPosition((prev) => {
                return [prev[0], prev[1] - 200]
            });
        }

        if (event.code === "ArrowDown" || event.code === "KeyS") {
            if (position[1] >= 400) {
                setPosition((prev) => {
                    return [prev[0], 600];
                });
                return;
            }
            setPosition((prev) => {
                return [prev[0], prev[1] + 200]
            });
        }

        if (event.code === "ArrowLeft" || event.code === "KeyA") {
            if (position[0] <= 200) {
                setPosition((prev) => {
                    return [0, prev[1]];
                });
                return;
            }
            setPosition((prev) => {
                return [prev[0] - 200, prev[1]]
            });
        }

        if (event.code === "ArrowRight" || event.code === "KeyD") {
            if (position[0] >= 1000) {
                setPosition((prev) => {
                    return [1000, prev[1]];
                });
                return;
            }
            setPosition((prev) => {
                return [prev[0] + 200, prev[1]]
            });
        }
    }

    let styles = {
        backgroundColor: colorArray[id % 48],
        zIndex: id,
        left: position[0],
        top: position[1]
    };

    return (
        <div tabIndex="0" style={styles} className="box" onKeyDown={(e) => { onKey(e) }} >
            <span className="text">{id}</span>
        </div >
    );
}
