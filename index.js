"use strict";
var loader = function (content) {
    this.cachable && this.cachable();
    console.log(this.resourcePath);
    return content;
};
module.exports = loader;
