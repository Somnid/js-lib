import { getSteps, getClosest, lerp, inverseLerp } from "../libs/math-tools.js";

describe("math-tools", () => {
	describe("getSteps", () => {
		[
			[[30, 360], [0,30,60,90,120,150,180,210,240,270,300,330,360]],
			[[30, 360, 180], [180, 210, 240, 270, 300, 330, 360]],
			[[3, 10], [0, 3, 6, 9, 10]]
		].forEach(test => it(`should get steps for ${test[0]}`, () => {
			expect(getSteps(...test[0])).toEqual(test[1]);
		}));
	});
	describe("getCloset", () => {
		[
			[[3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], 3],
			[[7, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], 7],
			[[0, [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]], 0],
			[[9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], 9],
			[[-1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], 0],
			[[14, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]], 9],
			[[3, [0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]], 3],
		].forEach(test => it(`should get closet to ${test[0][0]} from set ${test[0][1]}`, () => {
			expect(getClosest(...test[0])).toEqual(test[1]);
		}));
	});
	describe("lerp", () => {
		[
			[[0, 1, 0.5], 0.5],
			[[0, 2, 0.5], 1],
			[[-1, 1, 0.5], 0],
			[[0, 10, 0.75], 7.5]
		].forEach(test => it(`should get value ${test[1]} for start ${test[0][0]} and end ${test[0][1]} at value ${test[0][2]}`, () => {
			expect(lerp(test[0][0], test[0][1], test[0][2])).toEqual(test[1]);
		}))
	});
	describe("inverseLerp", () => {
		[
			[[0, 1, 0.5], 0.5],
			[[0, 2, 1], 0.5],
			[[-1, 1, 0], 0.5],
			[[0, 10, 7.5], 0.75]
		].forEach(test => it(`should get value ${test[1]} for start ${test[0][0]} and end ${test[0][1]} at value ${test[0][2]}`, () => {
			expect(inverseLerp(test[0][0], test[0][1], test[0][2])).toEqual(test[1]);
		}))
	});
});
