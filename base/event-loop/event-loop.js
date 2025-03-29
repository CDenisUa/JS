/*
* Microtask:
* - Promise
* - await (async/await)
* - queueMicrotask
* - MutationObserver
*
* Macrotasks:
* - setTimeout
* - setInterval
* - setImmediate(callback) //  Only in Node
* - requestAnimationFrame
* - postMessage
* - UI Events (click, )
* */


// Microtask: MutationObserver
const observer = new MutationObserver(() => {
    console.log('🟣 4: Microtask - MutationObserver');
});
observer.observe(document.body, { childList: true });
document.body.append('🔍'); // triggers the mutation

// Macrotask: setTimeout
setTimeout(() => {
    console.log('🟡 5: Macrotask - setTimeout');

    // Nested microtask inside macrotask
    Promise.resolve().then(() => {
        console.log('🟣 6: Microtask inside Macrotask');
    });

}, 0);

// Macrotask: requestAnimationFrame
requestAnimationFrame(() => {
    console.log('🟡 7: Macrotask - requestAnimationFrame');
});

// Macrotask: setTimeout 2
setTimeout(() => {
    console.log('🟡 8: Macrotask - setTimeout #2');
}, 0);

console.log('🔵 1: Synchronous start');


// Microtask: Promise
Promise.resolve().then(() => {
    console.log('🟣 2: Microtask - Promise');
});

// Microtask: queueMicrotask
queueMicrotask(() => {
    console.log('🟣 3: Microtask - queueMicrotask');
});

console.log('🔵 9: Synchronous end');
