var slide = new Array("Image\\S1.jpg", "Image\\S2.jpg", "Image\\S3.jpg");
var position=0;
var c =0;

function SwitchSlide(sens){
    position = ((position + sens)+slide.length)%slide.length;
    document.getElementById("Slide").src = slide[position];
}
setInterval("SwitchSlide(1)", 8000);


