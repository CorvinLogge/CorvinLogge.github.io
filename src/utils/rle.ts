export default function runLengthEncoding(input: string): string {
    let res = "";

    let chunks = input.match(/(.)\1*/g);

    if (chunks) {
        for (let i = 0; i < chunks?.length; i++) {
            let chunk = chunks[i];
            res += chunk.length;
            res += chunk.substring(0, 1);
            res += ';';
        }
    }

    return res;
}