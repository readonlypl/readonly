import { ReadonlyPage } from './app.po';

describe('readonly App', function() {
  let page: ReadonlyPage;

  beforeEach(() => {
    page = new ReadonlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
