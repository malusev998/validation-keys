({});
const fooKeys = { "foo": "fooError" };
console.log(fooKeys['foo']);
({ "foo": "fooError", "bar": "barError" }['bar']);
const fooBarBazKeys = { "bar": "barError" };
Object.keys(fooBarBazKeys).forEach(key => console.log(key));
function keys() {
    return '';
}
const a = keys();
class MyClass {
    keys() {
        return {};
    }
}
export {};
