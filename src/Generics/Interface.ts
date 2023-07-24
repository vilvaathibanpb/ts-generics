interface DataStructure<T> {
    add(value: T): void;
}

class ArrayDataStructure<T> implements DataStructure<T> {
    private data: T[] = [];

    add(value: T) {
        this.data.push(value)
    }

    remove() {

    }
}

// class ObjectDS<T> implements DataStructure<T> {
//     // private data: T = {};
//     // add (value) => {
//     //     this.data[value] = value
//     // }
// }

const stringArray = new ArrayDataStructure()
stringArray.add("23")
const numberArray = new ArrayDataStructure()
numberArray.add(23)