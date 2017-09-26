#!/bin/bash

talk='projekt_cpp2017'        # name of source file in markdown fodler
theme='black'                 # beige | black | blood | league | moon | night | serif | simple | sky | solarized | white
hs='monokai_mod'              # highlight style from template folder (leave blank to use default = zenburn)
transition='convex'           # none | fade | slide | convex | concave | zoom
speed='fast'                  # default | slow | fast

if [ -n "$1" ]; then talk=$1; fi

pandoc -t html5 --template=template/template-revealjs.html \
  --standalone --section-divs --mathjax \
  --variable theme=$theme \
  --variable transition=$transition \
  --variable speed=$speed \
  --variable highlight-style=$hs \
  markdown/$talk'.md' -o html/$talk'.html'
