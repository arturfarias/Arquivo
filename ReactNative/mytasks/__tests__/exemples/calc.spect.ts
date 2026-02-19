export function add(x: number, y: number) {
  return x + y;
}

describe('calculator', () => {
  it('add numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
  it('add numbers2', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
