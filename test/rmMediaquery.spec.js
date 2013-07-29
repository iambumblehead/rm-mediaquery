var rmMediaquery = require('../index.js');

var styleStr_regular = '' +
  '.regular {\n' +
  '  color:black;\n' +
  '}\n' +
  '@media screen and (max-width: 1025px) {\n' +
  '  .container .grid1 { display: none; }\n' +
  '}\n' +
  '.regular2 {\n' +
  '  color:red;\n' +
  '}\n' +
  '@media screen and (max-width: 900px) {\n' +
  '  @media screen and (max-width: 500px) {\n' +
  '    .container .grid1 { display: none; }\n' +
  '  }\n' +
  '}\n';

describe("rmMediaQuery", function () {
  var result, resultExpected;

  it("should remove mediaquery from styleStr_regular", function () {
    resultExpected = '' +
      '.regular {\n' +
      '  color:black;\n' +
      '}\n' +
      '  \n' +
      '.regular2 {\n' +
      '  color:red;\n' +
      '}\n' + 
      '  \n';

    result = rmMediaquery(styleStr_regular);

    // use something like below to discover whitespace
    // console.log(result.replace(/[^\S\n]/gi, '`'));
    expect( result ).toBe( resultExpected );
  });

});