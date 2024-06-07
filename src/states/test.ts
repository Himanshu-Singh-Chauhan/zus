function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


