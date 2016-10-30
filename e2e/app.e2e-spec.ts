import { DevoxxMorocco2016Page } from './app.po';

describe('devoxx-morocco2016 App', function() {
  let page: DevoxxMorocco2016Page;

  beforeEach(() => {
    page = new DevoxxMorocco2016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
