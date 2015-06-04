QUnit.test('Should display the default map', function(assert) {
  assert.ok($('#map-default').length, 'container element is not visible');
  //assert.ok($('#map-default .gm-style').length, 'iframe is not visible');
  assert.equal($('#map-default').css('height'), '500px', 'default height is not 500px');
  assert.equal($('#map-default').css('width'), '550px', 'default width is not 550px');
});

QUnit.test('Should change map size by given options', function(assert) {
  assert.ok($('#map-small-size').length, 'container element is not visible');
  //assert.ok($('#map-small-size .gm-style').length, 'iframe is not visible');
  assert.equal($('#map-small-size').css('height'), '150px', 'height is not 150px');
  assert.equal($('#map-small-size').css('width'), '250px', 'width is not 250px');
});
