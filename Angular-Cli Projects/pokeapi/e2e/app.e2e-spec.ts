import { PokeapiPage } from './app.po';

describe('pokeapi App', () => {
  let page: PokeapiPage;

  beforeEach(() => {
    page = new PokeapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
