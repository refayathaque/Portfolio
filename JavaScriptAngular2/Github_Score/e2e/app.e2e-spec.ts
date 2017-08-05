import { GitHubScorePage } from './app.po';

describe('git-hub-score App', () => {
  let page: GitHubScorePage;

  beforeEach(() => {
    page = new GitHubScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
