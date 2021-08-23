const func = (n) => {
    console.log('a very long calculation here...');
    return n;
};

const memoizedFunc = () => {
    const cache = {};

    return (n) => {
        if (cache[n] === undefined) {
            cache[n] = func(n);    
        }
    
        return cache[n]
    }
};

const mem = memoizedFunc();