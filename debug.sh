FILENAME="img-$(date +%s%N).png"
convert -background "red" \
-size 800x480 \
-fill white \
-gravity center \
label:"Hoje é dia de promoção!\n todos os produtos por 9,90!" "./$FILENAME"
