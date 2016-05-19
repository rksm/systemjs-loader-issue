When creating a new System loader instance, this instance was available as
global System object inside the modules it imported until systemjs@0.19.27.

This behavior breaks in systemjs@0.19.28, see [index.js](index.js) and
[test-module.js](test-module.js).

See [systemjs/systemjs#1276](https://github.com/systemjs/systemjs/issues/1276)
