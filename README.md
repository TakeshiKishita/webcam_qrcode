# Webcam_Qrcode


## 準備
- `sudo apt-get install zbar-tools`
- `sudo apt-get install ffmpeg`
- `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`  
`sudo apt-get install -y nodejs`


## 使い方
views/index.js の ip を 現在の jetson のIPに書き換える  

routes/index.js の /dev/v4l/by-id/usb-Etron_Technology__Inc._UCAM-C0220F-video-index0 を現在のWEBカメラのものに書き換える。  

```
sudo npm install
```
を実行しその後
```
sudo npm start
```

でサーバ起動。

http://{jetsonのip}:3000

でアクセスできる。
カメラがずっと起動するので、CPU食うかも。