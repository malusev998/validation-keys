"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
({});
var fooKeys = { "foo": "fooError" };
console.log(fooKeys[0]);
({ "foo": "fooError", "bar": "barError" }[1]);
var fooBarBazKeys = { "bar": "barError" };
Object.keys(fooBarBazKeys).forEach(function (key) { return console.log(key); });
index_1.validationKeys.toString();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.keys = function () {
        return {};
    };
    return MyClass;
}());
