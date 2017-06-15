import { ApponePage } from './app.po';

describe('appone App', () => {
  let page: ApponePage;

  beforeEach(() => {
    page = new ApponePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
