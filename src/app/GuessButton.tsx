function GuessButton() {
    const guess = () => {
        let canvas = document.getElementById("digitCanvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        if (context == null) return;

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

        const guess = async (): Promise<any> => {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
            });

            return await response.json();
        }

        guess().then(value => console.log(handle_guess(value)));
    };

    return (
        <button
            onClick={guess}
            className="middle none center rounded-lg bg-rose-700 py-3 px-6 font-light text-sm uppercase text-gray-100 shadow-pink-500/20 transition-all hover:bg-rose-800 active:bg-rose-900 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
            Guess
        </button>
    );
}

function handle_guess(res: any): number {

    let max = Math.max(...res);

    if (max < 0.9) return -1;

    return res.indexOf(max);
}

export default GuessButton;