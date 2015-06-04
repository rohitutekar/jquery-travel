QUnit.test('Should display the default map', function(assert) {
  assert.ok($('#map-default').length, 'container element is not visible');
  assert.ok($('#map-default div').length, 'map is not visible');
  assert.equal($('#map-default').css('height'), '500px', 'default height is not 500px');
  assert.equal($('#map-default').css('width'), '550px', 'default width is not 550px');
});

QUnit.test('Should change map size by given options', function(assert) {
  assert.ok($('#map-small-size').length, 'container element is not visible');
  assert.ok($('#map-small-size div').length, 'map is not visible');
  assert.equal($('#map-small-size').css('height'), '150px', 'height is not 150px');
  assert.equal($('#map-small-size').css('width'), '250px', 'width is not 250px');
});

QUnit.test('Should display map contols', function(assert) {
  assert.ok($('#map-controls').length, 'container element is not visible');
  assert.ok($('#map-controls div').length, 'map is not visible');

  // street view
  assert.ok($('#map-controls div[aria-label="Street View Pegman Control"]'.length), 'street view is not visible');

  // pan
  assert.ok($('#map-controls div[title="Pan up"]'.length), 'pan up is not visible');
  assert.ok($('#map-controls div[title="Pan down"]'.length), 'pan down is not visible');
  assert.ok($('#map-controls div[title="Pan right"]'.length), 'pan right is not visible');
  assert.ok($('#map-controls div[title="Pan left"]'.length), 'pan left is not visible');

  // zoom
  assert.ok($('#map-controls div[title="Zoom in"]'.length), 'zoom in is not visible');
  assert.ok($('#map-controls div[title="Zoom out"]'.length), 'zoom out is not visible');
});
