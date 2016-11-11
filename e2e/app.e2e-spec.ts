import { Angular2todoPage } from './app.po';

describe('angular2todo App', function() {
  let page: Angular2todoPage;

  beforeEach(() => {
    page = new Angular2todoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
