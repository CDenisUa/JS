// Example 1: Using Classes (Synchronous Singleton)
class SingletonClass {
    static instance;

    constructor() {
        if (SingletonClass.instance) {
            return SingletonClass.instance; // Return existing instance
        }

        SingletonClass.instance = this; // Save the current instance
        this.data = "Initial data"; // Example property
    }
}

const classInstance1 = new SingletonClass();
const classInstance2 = new SingletonClass();

classInstance1.data = "Updated data";

console.log(classInstance1 === classInstance2); // true
console.log(classInstance2.data); // "Updated data"



// Example 2: Without Classes (Synchronous Singleton)
const SingletonObject = (function () {
    let instance;

    function createInstance() {
        return { data: "Initial data" };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const objectInstance1 = SingletonObject.getInstance();
const objectInstance2 = SingletonObject.getInstance();

objectInstance1.data = "Updated data";

console.log(objectInstance1 === objectInstance2); // true
console.log(objectInstance2.data); // "Updated data"



// Example 3: Lazy Initialization with Promise (Asynchronous Singleton)
class AsyncSingletonClass {
    static instance = null;
    static pendingPromise = null;

    constructor() {
        if (AsyncSingletonClass.instance) {
            return AsyncSingletonClass.instance; // Return existing instance
        }

        if (AsyncSingletonClass.pendingPromise) {
            return AsyncSingletonClass.pendingPromise; // Return pending promise
        }

        AsyncSingletonClass.pendingPromise = new Promise((resolve) => {
            setTimeout(() => {
                this.data = "Loaded after 1 second";
                AsyncSingletonClass.instance = this; // Save instance
                AsyncSingletonClass.pendingPromise = null; // Clear pending state
                resolve(this);
            }, 1000);
        });

        return AsyncSingletonClass.pendingPromise; // Return promise
    }

    static getInstance() {
        if (AsyncSingletonClass.instance) {
            return Promise.resolve(AsyncSingletonClass.instance); // Return resolved instance
        }

        return new AsyncSingletonClass(); // Initialize if not yet created
    }
}

// Usage
(async () => {
    const asyncInstance1 = await AsyncSingletonClass.getInstance();
    const asyncInstance2 = await AsyncSingletonClass.getInstance();

    console.log(asyncInstance1 === asyncInstance2); // true
    console.log(asyncInstance1.data); // "Loaded after 1 second"
})();