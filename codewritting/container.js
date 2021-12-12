/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
  numbers = [];

  constructor() {}

  /**
   * Adds the specified value to the container
   *
   * @param {number} value
   */
  add(value) {
    this.numbers.push(value);
  }
  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or
   *                   false, otherwise.
   */
  delete(value) {
    // console.log('value', value);
    // console.log('this.numbers', this.numbers);
    this.numbers.filter((n) => n !== value);
    // console.log(this.numbers.filter((n) => n !== value));
    // console.log(this.numbers.includes(value));
    return this.numbers.includes(value);
  }

  /**
   * Finds the container's median integer value, which is
   * the middle integer when the all integers are sorted in order.
   * If the sorted array has an even length,
   * the leftmost integer between the two middle
   * integers should be considered as the median.
   *
   * @return {number} the median if the array is not empty, or
   * @throws {Error} a runtime exception, otherwise.
   */
  getMedian() {
    if (this.numbers.length === 0) {
      throw new Error("There are not numbers");
    } else {
      this.numbers = this.numbers.sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });

      let position = this.numbers.length / 2;
      console.log(position)
      if (this.numbers.length % 2 === 1) {
        position = Math.floor(position);
        return this.numbers[position]
      } else {
        position = this.numbers[position - 1];
        return position
      }
    }
  }
}

module.exports = Container;
