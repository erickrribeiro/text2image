#!/bin/bash          
FILENAME="img-$(date +%s).png"

#echo "text: $2"
#echo "color: $1" 
#echo "filename: $NAME"

convert -background "$1" \
-size 800x480 \
-fill white \
-pointsize 72 \
-gravity center \
label:"$2" $FILENAME

echo "{\"filename\": \"$FILENAME\"}"