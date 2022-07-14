Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('#/like');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('', '#restaurants');
  I.amOnPage('/');
});