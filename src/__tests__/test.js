import healthChecker from '../health.js';
import sortByHealth from '../sort.js';

const dataList = [
	[{name: 'Маг', health: 90}, 'healthy'],
	[{name: 'Воин', health: 14}, 'critical'],
	[{name: 'Лучник', health: 45}, 'wounded'],
]; 

test.each(dataList)('testing healthChecker func', (character, expected) => {
	const result = healthChecker(character);
	expect(result).toBe(expected);
});

test('test for sorting func', () => {
	const input = [
		{name: 'мечник', health: 10},
  		{name: 'маг', health: 100},
  		{name: 'лучник', health: 80},
	];

	const expected = [
	    {name: 'маг', health: 100},
	    {name: 'лучник', health: 80},
	    {name: 'мечник', health: 10},
	];

	const result = sortByHealth(input);
	expect(result).toEqual(expected);
});