// 1. Problems Based on Currying
// bigfrontend.dev/problem/implement-curry
// Implement a curry() function, which accepts a function and return a curried one.
// Here is an example
// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

function curry(fn) {
  // If we have enough arguments, call the original function
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    // Otherwise, return a function to collect more arguments
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

// const curriedJoin = curry(join);

// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'

/**
 * Returns an infinitely curried sum function.
 * Keep calling with one number at a time; call with no arguments to get the total.
 * @param {number} arg - The first number in the chain.
 * @returns {Function} A function that keeps collecting numbers until called with no arguments.
 * @example
 * infiniteCurrySum(1)(2)(3)(4)(); // 10
 */

// sum(1)(2)(3) .... n  => 3+2+1 = 6
const infiniteCurrySum = function (a) {
  return function (b) {
    if (b) {
      return infiniteCurrySum(a + b);
    } else {
      return a;
    }
  };
};
infiniteCurrySum(1)(2)(3)(4)();

const infiniteRecursionSum = function (args) {
  let sum = args;
  function helper(nextValue) {
    if (!nextValue) return sum;
    else {
      sum = sum + nextValue;
      return helper;
    }
  }

  return helper;
};
infiniteRecursionSum(1)(2)(3)(4)();
