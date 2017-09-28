import { SongSearchByLirycPage } from './app.po';

describe('song-search-by-liryc App', () => {
  let page: SongSearchByLirycPage;

  beforeEach(() => {
    page = new SongSearchByLirycPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
