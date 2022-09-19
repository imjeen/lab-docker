# FFmpeg

- 编译镜像：`docker build -t ffmpeg:v1 .`
- 运行并进入容器：`docker run -it --rm -v $PWD:/data ffmpeg:v1 sh`

## 视频尺寸缩放 scale

```bash
ffmpeg -i input.mp4 -vf scale=960:540 output.mp4
# ps: 如果540不写，写成-1，即scale=960:-1, 那也是可以的，ffmpeg会通知缩放滤镜在输出时保持原始的宽高比。

ffmpeg -i ./temp/SVID.mp4 -vf scale=360:-1 ./temp/output.mp4
```

## 压缩视频文件

```bash
# 规则
ffmpeg -i 文件夹内要转码的视频.mp4 -c:v libx264 -crf 21 -c:a copy -movflags faststart 文件夹内要转码的视频新命名.mp4

# 示例
ffmpeg -i ./temp/test.mp4 -c:v libx264 -crf 21 -c:a copy -movflags faststart ./temp/test-1.mp4
```

- `-c:v libx264`: 使用 视频编码 libx264
- `-c:a copy`: 复制即使用原先音频编码
- `-crf 21`: 固定码率因子 (0 到 51)。x264、x265 编码器的默认值分别为 23、28。
- `-movflags faststart`: 针对 mp4 的 meta 信息的提前

## 其它

```bash
ffmpeg -i ./1.mp4 -vf delogo=x=350:y=20:w=50:h=100 2.mp4

ffmpeg  -i ./2.mp4 -vcodec copy -acodec copy -ss 00:00:09 -to 00:00:20 ./3.mp4 -y
```
