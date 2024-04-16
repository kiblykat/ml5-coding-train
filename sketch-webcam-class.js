let video;
let classifier;

function setup() {
  //Create the canvas
  createCanvas(640, 550);
  //Create an image classifier with MobileNet, calls onModelReady callback once loaded
  //loads image, calls imageReady callback once loaded
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  classifier = ml5.imageClassifier("MobileNet", onModelReady);
  // puffin.hide();
}

function draw() {
  image(video, 0, 0);
  // fill(255);
  // textSize(32);
  // text(label, 10, height - 20);
}

//- - - HELPER FUNCTIONS - - -

//give console output once model ready
function onModelReady() {
  console.log("Model is ready");
  classifier.classify(video, gotResults);
}

function gotResults(err, results) {
  if (err) {
    console.log(err);
  } else {
    // console.log(results);
    background(0);

    let label = results[0].label;
    fill(255);
    textSize(32);
    text(label, 10, height - 20);
    classifier.classify(video, gotResults);
  }
}
