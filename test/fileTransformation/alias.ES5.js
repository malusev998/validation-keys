"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
({});
var fooKeys = { "foo": "fooError" };
console.log(fooKeys['foo']);
({ "foo": "fooError", "bar": "barError" }['bar']);
var fooBarBazKeys = { "bar": "barError" };
Object.keys(fooBarBazKeys).forEach(function (key) { return console.log(key); });
function keys() {
    return '';
}
var a = keys();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.keys = function () {
        return {};
    };
    return MyClass;
}());
