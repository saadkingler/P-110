var Prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera = document.getElementById("camera");



Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';});
}
console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OHfK9IrN9/model.json',model_loaded);

function model_loaded()
{
    console.log('modal loaded');
}

function check()
{
    console.log(gotResult);
    console.log(speak);
}

function speak()
{
    var synth = Window.speechSynthesis;
    speak_data_1 = "The first prediction" + Prediction;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}

function gotResult(error, results) {
    if (error) {
    console.error(error);
    } 
    else {
    console.log(results);
    document.getElementById("result_gesture").innerHTML = results[0].label; document.getElementById("result_gesture").innerHTML = results[1].label; prediction_1 = results [0].label;
    }
}