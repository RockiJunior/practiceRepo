const { expect } = require('chai');
const { colorFence } = require('../colorFence.js');

describe('colorFence', () => {
    it('should calculate remaining length when intervals do not intersect - basic', () => {
        const colorIntervals = colorFence(20);
        expect(colorIntervals(18, 18)).to.equal(19);
        expect(colorIntervals(7, 11)).to.equal(14);
        expect(colorIntervals(1, 5)).to.equal(9);
        expect(colorIntervals(12, 13)).to.equal(7);
        expect(colorIntervals(0, 0)).to.equal(6);
    });

    it('should calculate remaining length when intervals either are nested or are intersected - basic', () => {
        const colorIntervals = colorFence(20);
        expect(colorIntervals(8, 15)).to.equal(12);
        expect(colorIntervals(7, 14)).to.equal(11);
        expect(colorIntervals(8, 13)).to.equal(11);
        expect(colorIntervals(12, 18)).to.equal(8);
        expect(colorIntervals(6, 10)).to.equal(7);
    });

    it('should calculate remaining length when intervals can be of every type - basic', () => {
        const colorIntervals = colorFence(30);
        expect(colorIntervals(5, 15)).to.equal(19);
        expect(colorIntervals(7, 7)).to.equal(19);
        expect(colorIntervals(12, 16)).to.equal(18);
        expect(colorIntervals(20, 24)).to.equal(13);
        expect(colorIntervals(24, 24)).to.equal(13);
    });
});
