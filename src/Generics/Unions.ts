type NumberCord = {
    x: number;
    y: number
}

type StringCord = {
    x: string;
    y: string
}

type Cord = {
    x: any
    y: any
}

const combineCoordinates = 
    <T extends NumberCord,K extends StringCord>(c1: T, c2: K): T & K => {
    return {...c1, ...c2};
}

const c1: NumberCord = { x: 10, y: 20 }
const c2 :StringCord = { x: "10", y: "20" }

combineCoordinates(c1, c2)


const concat = <T, U>(arg1: T, arg2: U): string => `${arg1}${arg2}`

concat("s","a")

concat("s", 2)