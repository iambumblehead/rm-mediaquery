var rmMediaquery = ((typeof module === 'object') ? module : {}).exports = (function (rmMedia) {
  var bgnMediaRe = /@media[^{]*{[\s\S]*/mi,
      endMediaRe = /}[}\s]*}/mi;
  
  function rmMedia (str) {
    if (str.match(endMediaRe)) {
      return str.split(endMediaRe).map(rmMedia).join(' ');
    } else {
      return str.replace(bgnMediaRe, ' ');
    }
  }

  return rmMedia;

}());