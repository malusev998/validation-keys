import { validationKeys } from '../index';
import assert from 'assert';
import path from 'path';
import fs from 'fs';
import { compile } from './compile/compile';
import ts from 'typescript';

describe('keys', () => {
  it('should return keys of given type', () => {
    assert.deepStrictEqual(validationKeys(), {});
    assert.deepStrictEqual(validationKeys<any>(), {});
    interface Foo {
      fooError: string;
    }
    assert.deepStrictEqual(validationKeys<Foo>(), { foo: 'fooError' });
    type FooBar = {
      fooError: string;
      barError?: number;
    };
    assert.deepStrictEqual(validationKeys<FooBar>(), { foo: 'fooError', bar: 'barError' });
    interface BarBaz {
      barError: Function;
      bazError: Date;
    }
    assert.deepStrictEqual(validationKeys<FooBar & BarBaz>(), { foo: 'fooError', bar: 'barError', baz: 'bazError' });
    assert.deepStrictEqual(validationKeys<FooBar | BarBaz>(), { 'bar': 'barError' });
    assert.deepStrictEqual(validationKeys<FooBar & any>(), {});
    assert.deepStrictEqual(validationKeys<FooBar | any>(), {});
  });
  const fileTransformationDir = path.join(__dirname, 'fileTransformation');
  fs.readdirSync(fileTransformationDir).filter((file) => path.extname(file) === '.ts').forEach(file =>
    (['ES5', 'ESNext'] as const).forEach(target =>
      it(`should transform ${file} as expected when target is ${target}`, async () => {
        let result = '';
        const fullFileName = path.join(fileTransformationDir, file);
        const postCompileFullFileName = fullFileName.replace(/\.ts$/, '.js');

        compile([fullFileName], ts.ScriptTarget[target],
          (fileName, data) => postCompileFullFileName === path.join(fileName) && (result = data)
        );

        assert.strictEqual(result.replace(/\r\n/g, '\n'), fs.readFileSync(fullFileName.replace(/\.ts$/, `.${target}.js`), 'utf-8'));
      }).timeout(0)
    )
  );
});
