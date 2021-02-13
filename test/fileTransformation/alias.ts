import { validationKeys as k } from '../../index';

k();

interface Foo {
  fooError: string;
}
const fooKeys = k<Foo>();
console.log(fooKeys['foo']);

type FooBar = Foo & { barError: number; };
k<FooBar>()['bar'];

type FooBarBaz = FooBar | { barError: Function; bazError: Date; };
const fooBarBazKeys = k<FooBarBaz>();
Object.keys(fooBarBazKeys).forEach(key => console.log(key));

function keys() {
  return '';
}
const a = keys();

class MyClass<T extends object> {
  keys() {
    return k<T>();
  }
}
