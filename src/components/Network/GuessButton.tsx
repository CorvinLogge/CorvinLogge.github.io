import {Dispatch, SetStateAction} from "react";
import {match} from "node:assert";

interface Properties {
    className?: string
    setResult?: Dispatch<SetStateAction<number>>
}

// https://stackoverflow.com/a/60782610
function _arrayBufferToBase64(buffer: number[]) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function GuessButton({className = "", setResult}: Properties) {
    const guess = async (): Promise<any> => {
        let canvas = document.getElementById("digitCanvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        if (context == null) return -1;

        let image = context.getImageData(0, 0, canvas.width, canvas.height, {
            colorSpace: "display-p3",
        }) as ImageData;

        let pixels: number[] = [];

        for (let i = 0; i < image.data.length; i += 4) {
            pixels.push(image.data[i]);
        }

        let network_id = `${process.env.NEXT_PUBLIC_NEURAL_NETWORK_ID}`;

        let json = {
            network_id: network_id,
            image: _arrayBufferToBase64(pixels)
        };

        let url = `${process.env.NEXT_PUBLIC_NEURAL_NETWORK_URL}`;

        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
        });

        switch (response.status) {
            case 200 :
                return await response.json();
            default: {
                console.error(await response.text())
                return null;
            }
        }
    };

    const doGuess = () => {
        guess().then(res => {
            if (setResult) {
                setResult(handleResult(res))
            }
        }).catch((reason) => {
            console.error(reason);
            if (setResult) {
                setResult(-1);
            }
        })
    }

    return (
        <button
            onClick={doGuess}
            className={className}
        >
            Guess
        </button>
    );
}

function handleResult(res: any): number {

    if (res == null) return -1

    let max = Math.max(...res);

    if (max < 0.9) return -1;

    return res.indexOf(max);
}

export default GuessButton;