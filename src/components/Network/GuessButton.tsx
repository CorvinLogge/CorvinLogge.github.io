import {Dispatch, SetStateAction} from "react";
import runLengthEncoding from "@/utils/rle";

interface Properties {
    className?: string
    setResult?: Dispatch<SetStateAction<number>>
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
            pixels.push(Math.round(image.data[i] / 255));
        }

        let imageStr = runLengthEncoding(pixels.join(""));

        let network_id = `${process.env.NEXT_PUBLIC_NEURAL_NETWORK_ID}`;

        let json = {
            network_id: network_id,
            image: imageStr
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