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

        //let url = `${process.env.NEXT_PUBLIC_NEURAL_NETWORK_URL}`;
        let url = "https://v2202312212756249072.quicksrv.de/network/guess";

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
        }).catch(reason => {
            if (setResult) {
                setResult(-1)
            }
        })
    }

    return (
        <button
            onClick={doGuess}
            className={"rounded-lg bg-rose-700 py-3 px-6 font-light text-2xl uppercase text-gray-100 shadow-pink-500/20 transition-all hover:bg-rose-800 active:bg-rose-900 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " + className}
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