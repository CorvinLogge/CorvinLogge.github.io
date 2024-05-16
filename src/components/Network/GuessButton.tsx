import {Dispatch, SetStateAction} from "react";

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
            pixels.push(image.data[i]);
        }

        let json = {
            network_id: "23042024123942",
            image: btoa(String.fromCharCode.apply(null, pixels))
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

        return await response.json();
    };

    const doGuess = () => {
        guess().then(res => {
            if (setResult) {
                setResult(handleResult(res))
            }
        }).catch(() => {
            if (setResult) {
                setResult(-1)
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

    let max = Math.max(...res);

    if (max < 0.9) return -1;

    return res.indexOf(max);
}

export default GuessButton;