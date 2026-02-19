describe('Not method', () => {
  it('uso basico not', () => {
    expect(1 + 1).not.toEqual(1);
    expect('developer').not.toEqual('developers');
    expect({name: 'developer'}).not.toEqual({name: 'developers'});
  });
  it('uso basico toMarch', () => {
    expect('developer').toMatch(/\w+/);
  });
});

export {};
