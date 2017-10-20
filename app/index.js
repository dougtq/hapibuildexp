// @flow

import hapi from 'hapi';

function foo(x: ?string): string | void {
  if (x) {
    return 'default string';   // simple example
  }
}