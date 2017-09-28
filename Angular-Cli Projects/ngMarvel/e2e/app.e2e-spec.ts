import { NgMarvelPage } from './app.po';

describe('ng-marvel App', () => {
  let page: NgMarvelPage;

  beforeEach(() => {
    page = new NgMarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
