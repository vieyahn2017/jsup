#!/bin/bash

function commit () {
  git add .
  if [ -z "$1" ]; then
    now=$(date "+%Y-%m-%d %H:%M:%S")
    git commit -m "auto commit $now"
  else
    git commit -m "$1"
  fi
}

function push () {
  if [ -z "$1" ]; then
    git push -u origin master
  else
    git push -u origin master:$1
  fi
}

echo "usage: sh push.sh -m msg -b branch"
while getopts "m:b:" opt
do
  case $opt in
    m)
    echo "m parameter means commit messages: $OPTARG"
    param_m=$OPTARG
    ;;
    b)
    echo "b parameter means branch:$OPTARG"
    param_b=$OPTARG
    ;;
  esac
done

commit $param_m
push $param_b
