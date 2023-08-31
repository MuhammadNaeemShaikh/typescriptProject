
const operations = {
    add: (val1: number, val2: number): number => {
        return val1 + val2;
    },
    subtract: (val1: number, val2: number): number => {
        return val1 - val2;
    },
    multiply: (val1: number, val2: number): number => {
        return val1 * val2;
    },
    divide: (val1: number, val2: number): number => {
        return val1 / val2;
    },
    mod: (val1: number, val2: number): number => {
        return val1 % val2;
    }
}

export default operations;