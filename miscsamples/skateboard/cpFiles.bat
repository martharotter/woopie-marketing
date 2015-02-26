#! /bin/sh

j="0"
while [ $j -lt 84 ]
do
    for i in `ls *.html`
    do 
        tmp=`echo $i | awk -F"." '{ print $1 }'`
        echo "temp is: " $tmp
        tmp2="${tmp}_${j}"
        echo "temp2 is: " $tmp2
        cp -Rf $tmp.html $tmp2.html
    done
    j=$[$j+1]
done

