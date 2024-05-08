interface Properties {
    className?: string
}

function ClearButton({className = ""}: Properties) {
    const clear = () => {
        let canvas = document.getElementById("digitCanvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d");

        if (context == null) return;

        context.beginPath();

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.closePath();
    };

    return (
        <button
            onClick={clear}
            className={"rounded-lg bg-rose-700 py-3 px-6 font-light text-2xl uppercase text-gray-100 shadow-pink-500/20 transition-all hover:bg-rose-800 active:bg-rose-900 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" + className}
        >
            Clear
        </button>
    );
}

export default ClearButton;