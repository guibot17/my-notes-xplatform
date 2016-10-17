import { MyNotesPage } from './app.po';

describe('my-notes App', function() {
  let page: MyNotesPage;

  beforeEach(() => {
    page = new MyNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
