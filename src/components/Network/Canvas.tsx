"use client";
import React from "react";

interface Properties {
    width: number;
    height: number;
    className?: string
    children?: React.ReactNode
}

function Canvas({width, height, className = "", children}: Properties) {
    let dragging = false;
    let lastX = -1;
    let lastY = -1;
    let lineWidth = 60;

    const drawPoint = (e: React.MouseEvent) => {
        let canvas = e.target as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        if (context == null) return;

        let currentX = e.clientX - canvas.getBoundingClientRect().left;
        let currentY = e.clientY - canvas.getBoundingClientRect().top;

        context.fillStyle = "#FFFFFF";
        context.beginPath();
        context.arc(currentX, currentY, lineWidth / 2, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };

    const drawLine = (e: React.MouseEvent) => {
        let canvas = e.target as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        let currentX = e.clientX - canvas.getBoundingClientRect().left;
        let currentY = e.clientY - canvas.getBoundingClientRect().top;

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

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button == 0) {
            dragging = true;
            drawPoint(e);
        }
    };

    const handleMouseUP = (e: React.MouseEvent) => {
        if (e.button == 0) {
            dragging = false;
            lastX = -1;
            lastY = -1;
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragging) {
            drawLine(e);
        }
    };

    return (
        <canvas
            className={className}
            id="digitCanvas"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUP}
            onMouseMove={handleMouseMove}
            width={width}
            height={height}
        >
            {children}
        </canvas>

    );
}

export default Canvas;