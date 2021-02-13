import { validationKeys } from 'validation-keys';
interface Foo {
  fooError: string;
}

export default class TestClass {
  testMethod(){
    validationKeys();
    const fooKeys = validationKeys<Foo>();
    return fooKeys
  }
}
