#pip install pytube
import pytube
link = input ('enter YouTube video URL')
yt= pytube.YouTube(link)
yt.streams.maketrans.first().download()
print('Downloaded',link)