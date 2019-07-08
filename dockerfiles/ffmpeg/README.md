

ffmpeg -i ./1.mp4 -vf delogo=x=350:y=20:w=50:h=100 2.mp4

ffmpeg  -i ./2.mp4 -vcodec copy -acodec copy -ss 00:00:09 -to 00:00:20 ./3.mp4 -y
