// Core
import { test, expect, describe } from '@jest/globals';
// Tasks
import { task1, task2 } from './project_euler.mjs';

describe('task1 - sum of multiples of 3 or 5', () => {
    test('returns 23 for input 10', () => {
        expect(task1(10)).toBe(23);
    });

    test('returns 233168 for input 1000', () => {
        expect(task1(1000)).toBe(233168);
    });
});

describe('task2 - sum of even Fibonacci numbers', () => {
    test('returns 10 for input 10', () => {
        expect(task2(10)).toBe(10); // 2 + 8
    });

    test('returns 4613732 for input 4000000', () => {
        expect(task2(4000000)).toBe(4613732);
    });
});