#!/bin/sh

if [[ "$OSTYPE" == "darwin"* ]]; then
  find ./dist/esm -name "*.js" -exec sed -i '' -E "s#export (.*) from '\.(.*)';#export \1 from '.\2\.js';#g" {} +;
  find ./dist/esm -name "*.js" -exec sed -i '' -E "s#import (.*) from '\.(.*)';#import \1 from '.\2\.js';#g" {} +;
else
  find ./dist/esm -name "*.js" -exec sed -i -E "s#export (.*) from '\.(.*)';#export \1 from '.\2\.js';#g" {} +;
  find ./dist/esm -name "*.js" -exec sed -i -E "s#import (.*) from '\.(.*)';#import \1 from '.\2\.js';#g" {} +;
fi
