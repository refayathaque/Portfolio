import { PracticeAngularAppPage } from './app.po';

describe('practice-angular-app App', () => {
  let page: PracticeAngularAppPage;

  beforeEach(() => {
    page = new PracticeAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
