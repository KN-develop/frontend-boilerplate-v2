#!/bin/bash

for BLOCKNAME in "$@"
do
    mkdir -p src/blocks/$BLOCKNAME
    touch src/blocks/$BLOCKNAME/$BLOCKNAME.scss
    touch src/blocks/$BLOCKNAME/$BLOCKNAME.twig
done


