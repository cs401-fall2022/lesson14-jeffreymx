//Super helpful for understanding basic QUnit testing https://qunitjs.com/intro/
//Prior labs were also useful in writing tests
QUnit.test('test button tag', function(assert) {
    let button = document.querySelector('button');
    assert.ok(button !== null, '<button> tag exists');
  });

  QUnit.module('test function', function() {
    QUnit.test('get message', function(assert) {
      assert.equal(test(), "Hello World");
    });
  });