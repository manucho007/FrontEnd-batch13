import { Ngfire2Page } from './app.po';

describe('ngfire2 App', () => {
  let page: Ngfire2Page;

  beforeEach(() => {
    page = new Ngfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
