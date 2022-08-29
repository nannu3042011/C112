Webcam.set({
    width:350,
    Height:300,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementBId("camera");

Wecam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.verson);

classifire = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modlLoaded);