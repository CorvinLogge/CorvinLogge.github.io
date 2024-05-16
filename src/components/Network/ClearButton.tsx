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
            className={className}
        >
            Clear
        </button>
    );
}

export default ClearButton;