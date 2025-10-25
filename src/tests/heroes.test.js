import { sortHeroesByHealth } from '../heroes';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should not mutate original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]);
    
    expect(sorted).not.toBe(heroes);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const sorted = sortHeroesByHealth(heroes);
    expect(sorted).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const sorted = sortHeroesByHealth(heroes);
    expect(sorted).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should handle heroes with equal health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 75 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'герой3', health: 75 },
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ]);
  });

  test('demonstrate toBe vs toEqual difference', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    // toBe проверяет ссылочное равенство (будет false)
    expect(sorted).not.toBe(heroes);
    
    // toEqual проверяет структурное равенство (будет true)
    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 10 },
    ]);
  });
});