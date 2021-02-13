import { validationKeys } from '../../index';

validationKeys();

interface Foo {
  fooError: string;
}
const fooKeys = validationKeys<Foo>();
console.log(fooKeys[0]);

type FooBar = Foo & { barError: number; };
validationKeys<FooBar>()[1];
type FooBarBaz = FooBar | { barError: Function; bazError: Date; };
const fooBarBazKeys = validationKeys<FooBarBaz>();
Object.keys(fooBarBazKeys).forEach(key => console.log(key));

validationKeys.toString();

class MyClass<T extends object> {
  keys() {
    return validationKeys<T>();
  }
}
