Webcam.set({
    height:390,
    width:400,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('  #camera  ');
function takamaka(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version",ml5.version);
smashifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/McOKPnGd9/model.json",modelmoaded);
function modelmoaded(){
    console.log("hey loaded");
}
prunchmunch="";
prunchmunch1="";
function speak(){
    var kukko=window.speechSynthesis;
    speah_data="hey you are evil and this is your predection by me which is always right if you think it is wrong then muhahahaha"+prunchmunch;
    speah_data="hey you are evil and this is your predection by me which is always right if you think it is wrong then muhahahaha"+prunchmunch1;
    var muhahaha=new SpeechSynthesisUtterance(speah_data);
    kukko.speak(muhahaha);
}
function hakahakakak(){
    img=document.getElementById("captured_image")
    smashifier.classify(img.gottetetemhakan);
}
function gottetetemhakan(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("checkitout").innerHTML=results[0].label;
    document.getElementById("checkitout1").innerHTML=results[1].label;
    prunchmunch=results[0].label;
    prunchmunch1=results[1].label;
    if(results[0].label=="hello"){
    document.getElementById("updatemoji1").innerHTML="&#128075;&#127995;";
}
if(results[0].label=="victory"){
    document.getElementById("updatemoji1").innerHTML="&#9996;&#127995;;"; 
}
if(results[0].label=="hi-five"){
    document.getElementById("updatemoji1").innerHTML="&#9995;&#127995;"; 
}
if(results[0].label=="fistbump"){
    document.getElementById("updatemoji1").innerHTML="&#128074;&#127995;"; 
}
if(results[0].label=="nice"){
    document.getElementById("updatemoji1").innerHTML="&#128076;&#127995"; 
}
if(results[0].label=="thumbsup"){
    document.getElementById("updatemoji1").innerHTML="&#128077;&#127995;;"; 
}
if(results[0].label=="clap"){
    document.getElementById("updatemoji1").innerHTML="&#128079;&#127995;"; 
}
if(results[1].label=="hello"){
    document.getElementById("updatemoji").innerHTML="&#128075;&#127995;"; 
}
if(results[1].label=="victory"){
    document.getElementById("updatemoji").innerHTML="&#9996;&#127995;"; 
}
if(results[1].label=="hi-five"){
    document.getElementById("updatemoji").innerHTML="&#9995;&#127995;"; 
}
if(results[1].label=="fistbump"){
    document.getElementById("updatemoji").innerHTML="&#128074;&#127995;"; 
}
if(results[1].label=="nice"){
    document.getElementById("updatemoji").innerHTML="&#128076;&#127995"; 
}
if(results[1].label=="thumbsup"){
    document.getElementById("updatemoji").innerHTML="&#128077;&#127995;"; 
}
if(results[1].label=="clap"){
    document.getElementById("updatemoji").innerHTML="&#128079;&#127995;"; 
}
}
}