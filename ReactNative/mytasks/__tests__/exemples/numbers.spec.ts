describe('numeros', () => {
  it('uso basico', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeGreaterThanOrEqual(2);

    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeLessThanOrEqual(2);
  });
});

describe('mocks', () => {
  it('uso basico', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => {
      return a + b;
    });
    expect(fakeAdd(1, 1)).toBe(2);
  });
});

export {};
