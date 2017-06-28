import { TobaccoMallPage } from './app.po';

describe('tobacco-mall App', () => {
  let page: TobaccoMallPage;

  beforeEach(() => {
    page = new TobaccoMallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
