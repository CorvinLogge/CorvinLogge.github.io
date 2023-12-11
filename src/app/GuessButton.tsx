import { useEffect } from "react";

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

    let json = { image: pixels.join() };

    //let url = "https://localhost:8080/network/guess";
    let url = "https://v2202312212756249072.quicksrv.de:8080/network/guess";

    const res = fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.error(err));
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

export default GuessButton;
