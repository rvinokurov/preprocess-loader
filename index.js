(function(){"use strict";var e,t,s,r;e=require("lodash"),s=require("path"),r=require("preprocess"),t=require("loader-utils"),module.exports=function(i){var p,c,o,n,l,a;return"function"==typeof this.cacheable&&this.cacheable(),a=s.extname(this.resourcePath||"").split("."),c=a[a.length-1],o={srcDir:this.context,type:c},l=t.getOptions(this)||{},e.isObject(l.ppOptions)&&(o=e.merge(o,l.ppOptions),delete l.ppOptions),/cjsx/i.test(o.type)&&(o.type="coffee"),p=e.merge({},process.env,l),p.NODE_ENV=p.NODE_ENV||"development",n=r.preprocess(i,p,o),this.callback(null,n)}}).call(this);