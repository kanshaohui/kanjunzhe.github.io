function getPlace() {
    if (navigator.geolocation) {
        function success(pos) {
            var crd = pos.coords;
            console.log("Your current position is:");
            console.log("Latitude : " + crd.latitude);
            console.log("Longitude: " + crd.longitude);
            console.log("More or less " + crd.accuracy + " meters.");
        }

        function error(err) {
            console.warn("ERROR(" + err.code + "): " + err.message);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    else {
        console.warn("ERROR(Navigator):The navigator doesn't support geolocation.");
    }
}

function getCameraKind() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then((mediastream) => {
                navigator.mediaDevices.enumerateDevices().then((list) => {
                    console.log("list:", list);
                }).catch((err) => {
                    console.log("ERROR(" + err.code + "): " + err.message);
                })
            }).catch((err) => {
                console.log("ERROR(" + err.code + "): " + err.message);
            })
    } else {
        // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
        console.warn("ERROR(Navigator):The navigator doesn't support audio.");
    }
}

function getCameraPC() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            diveceId: "",  // 设置成设备列表中kind是videoinput的deviceId
            width: 640,		 // 视频宽度
            height: 480,	 //	视频高度
            frameRate: 30, //	视频帧率
        }).then((mediastream) => {
            // 如果需要播放，则可以直接使用auido播放
            let videoElement = document.getElementById("localVideo");
            videoElement.srcObject = mediastream;
            videoElement.play();

            // 通过设置不同的分辨率，我们也能从最终的显示效果中发现效果略有不同，当然也可以通过代码来验证我们设置的参数是否生效了
            let videoTrack = mediastream.getVideoTracks()[0];
            let settings = videoTrack.getSettings();
            console.log("video frameRate:", settings.frameRate);
            console.log("video width:", videoElement.videoWidth);
            console.log("video height:", videoElement.videoHeight);
        }).catch((err) => {
            // 获取摄像头失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
            console.warn("ERROR(" + err.name + "): " + err.message);
        })
    } else {
        // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
        console.warn("ERROR(Navigator):The navigator doesn't support audio.");
    }
}

function getCameraMobile() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            facingMode: "user",  // 在移动端默认是有两个摄像头的，user表示前置摄像头，environment表示后置摄像头
            width: 640,		 // 视频宽度
            height: 480,	 //	视频高度
            frameRate: 30, //	视频帧率
        }).then((mediastream) => {
            // 如果需要播放，则可以直接使用auido播放
            let videoElement = document.getElementById("localVideo");
            videoElement.srcObject = mediastream;
            videoElement.play();

            // 通过设置不同的分辨率，我们也能从最终的显示效果中发现效果略有不同，当然也可以通过代码来验证我们设置的参数是否生效了
            let videoTrack = mediastream.getVideoTracks()[0];
            let settings = videoTrack.getSettings();
            console.log("video frameRate:", settings.frameRate);
            console.log("video width:", videoElement.videoWidth);
            console.log("video height:", videoElement.videoHeight);
        }).catch((err) => {
            // 获取摄像头失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
            console.warn("ERROR(" + err.name + "): " + err.message);
        })
    } else {
        // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
        console.warn("ERROR(Navigator):The navigator doesn't support audio.");
    }
}

function delCamera() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((mediastream) => {
            // 代码运行到此处的时候，我们可以看到，摄像头的灯已经被点亮了。即使我们不显示视频内容，灯也是点亮的
            // 在我们刷新页面之前，摄像头会一直被这个页面占用着。接下来我们来释放设备

            // 首先从mediastream中获取所有的audiotrack和videotrack
            let arr = mediastream.getTracks();
            // 释放所与的audiotrack和videotrack
            arr.forEach((track) => {
                track.stop();
            })
            //代码运行到此处，可以看到摄像头的灯熄灭了。设备已经释放完成
        }).catch((err) => {
            // 获取摄像头失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
            console.warn("ERROR(" + err.name + "): " + err.message);
        })
    } else {
        // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
        console.warn("ERROR(Navigator):The navigator doesn't support audio.");
    }
}

function getMicrophone() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then((mediastream) => {
            // 返回的是Mediastream，并不是audiotrack
            let audioTrack = mediastream.getAudioTracks()[0];

            // 如果需要播放，则可以直接使用auido播放
            let audioElement = document.getElementById("localAudio");
            audioElement.srcObject = mediastream;
            audioElement.play().then(() => {
                // 播放成功
                console.log("Microphone connected.");
            }).catch((err) => {
                // 播放失败
                console.warn("ERROR(" + err.code + "): " + err.message);
            })
        }).catch((err) => {
            // 获取麦克风失败，可以通过 err.name 或者 err.message 来判断错误原因，err并没有返回错误错误码
            console.warn("ERROR(" + err.name + "): " + err.message);
        })
    } else {
        // 浏览器不支持获取设备权限，有可能是当前页面不是https，也可能是当前浏览器不支持获取设备权限
        console.warn("ERROR(Navigator):The navigator doesn't support audio.");
    }
}