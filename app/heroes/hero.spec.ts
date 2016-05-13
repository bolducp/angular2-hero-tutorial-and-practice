import { Hero } from './hero';

describe('Hero', () => {

  it('has name of Super Cat', () => {
    let hero: Hero = {id: 1, name: 'Super Cat', color: 'blue'};
    expect(hero.name).toEqual('Super Cat');
  });

  it('has id of 1', () => {
    let hero: Hero = {id: 1, name: 'Super Cat', color: 'green'};
    expect(hero.id).toEqual(1);
  });
});
