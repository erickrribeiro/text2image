#!/bin/bash          
#%s returns the numbers the seconds since the epoch.
#%s%N returns the seconds and the current nanoseconds.
FILENAME="img-$(date +%s%N).png"

#echo "text: $2"
#echo "color: $1" 
#echo "filename: $NAME"
#echo "path: $3"

convert -background "$1" \
-size 800x480 \
-fill white \
-gravity center \
label:"$2" "$3/$FILENAME"
echo "{\"filename\": \"$FILENAME\", \"path\":\"$3\"}"