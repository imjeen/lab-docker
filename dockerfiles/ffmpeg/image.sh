 #!/bin/bash 

function walk(){
	for file in `ls $1`
	do
		local path=$1'/'$file
		if [ -d $path ]; then
			walk $path
		else
			echo $path
		fi
	done
}

function digest(){
	local origin=$1
	local result=$2
	local files=`walk $origin`
	for infile in $files
	do
		local outfile=$result'/'$infile
		local path=`dirname $outfile`
		mkdir -p $path
		local ext=${outfile##*.}
		case $ext in
			"jpg"|"jpeg")
 			# echo "It's image with jpeg extension."
			# ffprobe -hide_banner -v quiet -print_format json -show_format -show_streams $outfile
 			ffmpeg -v warning -i $infile -q:v 10 -y $outfile
			echo $outfile
			;;
			"png")
			# echo "It's image with png extension."
			ffmpeg -v warning -i $infile -q:v 10 -y $outfile
			echo $outfile
			;;
			"gif")
			# echo "Oh, it's a giphy!"
			local palette=$path'/palette.png'
			local filters="fps=30,scale=iw*1:ih*1:flags=lanczos"
			touch $palette
			ffmpeg -v warning -i $infile -vf "$filters,palettegen=stats_mode=diff" -y $palette
			ffmpeg -v warning -i $infile -i $palette -lavfi "$filters,paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle" -y $outfile
			rm $palette
			echo $outfile
			;;
			*)
			echo "Woops! It's not image!"
			;;
		esac
		
	done

}

ORIGIN='__origin'
RESULT='__result'

rm -rf $RESULT
digest $ORIGIN $RESULT



