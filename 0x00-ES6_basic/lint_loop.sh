#!/bin/bash
if [ ! "$1" ]
then
	echo "no file given"
	exit 0
fi

npm run lint -- --fix "$1"
