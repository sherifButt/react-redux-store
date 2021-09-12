export const increment = (amount) => {
    return {
        type: "INCREMENT",
        payLoad: amount ? amount : 1,
    };
};
export const decrement = (amount) => {
    return {
        type: "DECREMENT",
        payLoad: amount ? amount : 1,
    };
};
