let puffin;
let classifier;

// if everything loaded properly you should see the version number
console.log("ml5 version:", ml5.version);

function setup() {
  //Create an image classifier with MobileNet, calls onModelReady callback once loaded
  classifier = ml5.imageClassifier("MobileNet", onModelReady);
  //loads image, calls imageReady callback once loaded
  puffin = createImg("images/puffin.jpg", imageReady);
  puffin.hide();
  //Create the canvas
  createCanvas(640, 480);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

//- - - HELPER FUNCTIONS - - -

//give console output once model ready
function onModelReady() {
  console.log("Model is ready");
  classifier.classify(puffin, gotResults);
}

//
function imageReady() {
  image(puffin, 0, 0, width, height);
}

function gotResults(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
    let label = results[0].label;
    fill(0);
    textSize(64);
    text(label, 100, height - 100);
  }
}
