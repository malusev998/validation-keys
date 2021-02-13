import { validationKeys } from '../..';

validationKeys();

interface Foo {
  fooError: string;
}
const fooKeys = validationKeys<Foo>();
console.log(fooKeys[0]);

type FooBar = Foo & { barError: number; };
console.log(validationKeys<FooBar>()[1]);
type FooBarOrBarBaz = FooBar | { barError: Function; bazError: Date; };
const fooBarOrBarBazKeys = validationKeys<FooBarOrBarBaz>();
Object.keys(fooBarOrBarBazKeys).forEach(key => console.log(key));
