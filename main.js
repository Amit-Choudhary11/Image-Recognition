Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality: 100
});


Webcam.attach("#camera");

function takeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>"
    });

}

console.log("version - ",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oMD21kWOJ/model.json", doneLoading);

function doneLoading(){
    console.log("done Loading")
}

function checkImage(){
    img= document.getElementById("image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
   
