import { AnimeDirectoryPage } from './app.po';

describe('anime-directory App', function() {
  let page: AnimeDirectoryPage;

  beforeEach(() => {
    page = new AnimeDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
