// Farmer John has a white fence in his garden, and he wants to teach his grandchild to calculate. Every day he paints some segment of the fence black and asks the grandchild to calculate the total length of the remaining white pieces. We want you to help the grandchild by writing a program to automate the calculation.

// Your task is to implement the function colorFence(length), where length is the total length of the fence. This function should return another function which can be called with arguments left and right, where 0 ≤ left ≤ right < length. The returned function colors the segment of the fence from left to right (inclusive) into the black color, and returns the remaining total length of the white fence.

// An example of interaction is as follows:

// const colorIntervals = colorFence(20);
// colorIntervals(18, 18); // the remaining length of the white fence is 19.
// colorIntervals(0, 3); // the remaining length of the white fence is 15.
// colorIntervals(17, 19); // the remaining length of the white fence is 13 (since segment 18 was already painted).
// colorIntervals(0, 19); // the remaining length of the white fence is 0.


function colorFence(length) {
    
    let left = [];
    let right = [];
    
    left.push(length)
    right.push(length)
    console.log('left', left)
    console.log('right', right)
}

module.exports = { colorFence };
