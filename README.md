rm-mediaquery
=============
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### OVERVIEW:

Remove all mediaquery from a stylesheet.

[0]: http://www.bumblehead.com                            "bumblehead"

---------------------------------------------------------
#### <a id="install"></a>INSTALL:

rm-mediaquery may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install rm-mediaquery
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/rm-mediaquery.git
 $ cd rm-mediaquery && npm install
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```
 
---------------------------------------------------------
#### <a id="get-started">GET STARTED: 

  ```javascript
  var rmMediaquery = require('rm-mediaquery');
  
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
  
  console.log(rmMediaquery(styleStr_regular));
  //.regular {
  //  color:black;
  //}
  //
  //.regular2 {
  //  color:red;
  //}    
  ```
  
This result is achieved with fewer lines than the example uses. Here it is:

  ```javascript
  var bgnMediaRe = /@media[^{]*{[\s\S]*/mi,
      endMediaRe = /}[}\s]*}/mi;
  
  function rmMedia (str) {
    if (str.match(endMediaRe)) {
      return str.split(endMediaRe).map(rmMedia).join(' ');
    } else {
      return str.replace(bgnMediaRe, ' ');
    }
  }      
  ```
  
---------------------------------------------------------

#### <a id="license">License:

 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2012 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
