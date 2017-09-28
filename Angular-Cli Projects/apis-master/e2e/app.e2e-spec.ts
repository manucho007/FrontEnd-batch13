import { ApisPage } from './app.po';

describe('apis App', () => {
  let page: ApisPage;

  beforeEach(() => {
    page = new ApisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
