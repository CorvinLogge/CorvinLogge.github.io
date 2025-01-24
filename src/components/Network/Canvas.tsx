"use client";
import React, {useEffect, useState} from "react";
import {UAParser} from 'ua-parser-js'

interface Properties {
    width: number;
    height: number;
    className?: string
    children?: React.ReactNode
}

let lineWidth = 60;

function resizeCanvas() {
    const userAgent = UAParser(navigator.userAgent)

    if (userAgent.device.type == "mobile") {
        const canvas = document.getElementById("digitCanvas")

        if (canvas == null) return;

        canvas.setAttribute("width", "300")
        canvas.setAttribute("height", "300")

        lineWidth = 30

        console.log(lineWidth)
    } else {
        const canvas = document.getElementById("digitCanvas")

        if (canvas == null) return;

        canvas.setAttribute("width", "600")
        canvas.setAttribute("height", "600")

        lineWidth = 60

        console.log(lineWidth)
    }
}

function getPosition(e: React.MouseEvent | React.TouchEvent, left: number, top: number): [number, number] {
    let currentX: number = 0;
    let currentY: number = 0;

    let eNative = e.nativeEvent;

    if (eNative instanceof MouseEvent) {
        currentX = eNative.clientX - left;
        currentY = eNative.clientY - top;
    } else if (eNative instanceof TouchEvent) {
        let touch = eNative.touches.item(0);

        if (touch == null) return [-1, -1];

        currentX = touch.clientX - left;
        currentY = touch.clientY - top;
    }

    return [currentX, currentY];
}

function Canvas({width, height, className = "", children}: Properties) {
    let dragging = false;
    let lastX = -1;
    let lastY = -1;

    const [_width, setWidth] = useState(width);
    const [_height, setHeight] = useState(height);

    const userAgent = UAParser(navigator.userAgent)

    useEffect(() => {
        if (userAgent.device.type == "mobile") {
            setWidth(width / 2)
            setHeight(height / 2)
            lineWidth = 30
        }
    }, []);

    const drawPoint = (e: React.MouseEvent | React.TouchEvent) => {
        let canvas = e.target as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        if (context == null) return;

        let [currentX, currentY] = getPosition(e, canvas.getBoundingClientRect().left, canvas.getBoundingClientRect().top)

        context.fillStyle = "#FFFFFF";
        context.beginPath();
        context.arc(currentX, currentY, lineWidth / 2, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };

    const drawLine = (e: React.MouseEvent | React.TouchEvent) => {
        let canvas = e.target as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        let [currentX, currentY] = getPosition(e, canvas.getBoundingClientRect().left, canvas.getBoundingClientRect().top)

        if (context == null || lastX == -1 || lastY == -1) {
            lastX = currentX;
            lastY = currentY;
            return;
        }

        context.beginPath();

        context.fillStyle = "#FFFFFF";
        context.strokeStyle = "#FFFFFF";
        context.lineJoin = "round";
        context.lineCap = "round";
        context.lineWidth = lineWidth;

        context.moveTo(lastX, lastY);
        context.lineTo(currentX, currentY);
        context.stroke();

        context.closePath();

        lastX = currentX;
        lastY = currentY;
    };

    const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
        if (e instanceof MouseEvent) {
            if (e.button == 0) {
                dragging = true;
                drawPoint(e);
            }
        } else {
            dragging = true;
            drawPoint(e)
        }
    };

    const handleUP = (e: React.MouseEvent | React.TouchEvent) => {
        if (e instanceof MouseEvent) {
            if (e.button == 0) {
                dragging = false;
                lastX = -1;
                lastY = -1;
            }
        } else {
            dragging = false;
            lastX = -1;
            lastY = -1;
        }
    };

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (dragging) {
            drawLine(e);
        }
    };

    return (
        <canvas
            className={className}
            id="digitCanvas"
            onMouseDown={handleDown}
            onMouseUp={handleUP}
            onMouseMove={handleMove}
            onTouchStart={handleDown}
            onTouchEnd={handleUP}
            onTouchMove={handleMove}
            width={_width}
            height={_height}
        >
            {children}
        </canvas>

    );
}

export default Canvas;