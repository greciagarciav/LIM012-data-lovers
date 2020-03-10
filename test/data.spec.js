// eslint-disable-next-line import/extensions
import { example, anotherExample } from '../src/data.js';

describe('allPokemons', () => {
  it('is a function', () => {
    expect(typeof allPokemons).toBe('function');
  });

  it('returns `mainView`', () => {
    expect(example()).toBe('mainView');
  });
});


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
