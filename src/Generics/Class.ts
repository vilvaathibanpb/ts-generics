class CustomStorage<T> {
    private data;

    constructor(initialData: T) {
        this.data = initialData
    }

    getData() {
        return this.data
    }

    setData(value: T) {
        this.data = value
    }
}


const storage = new CustomStorage("Hello")
storage.getData() // Hello

const numberStorage = new CustomStorage<number>(23)
numberStorage.getData() // 23