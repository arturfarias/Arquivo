describe('Igualdade', () => {
  it('uso basico', () => {
    expect(1 + 1).toEqual(2);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  });

  it('uso basico to be', () => {
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
  });
});

export {};
