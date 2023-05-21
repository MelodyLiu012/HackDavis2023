const testPageDiv = document.getElementById("test-page");
const aboutPageDiv = document.getElementById("about-page");
const referencesPageDiv = document.getElementById("references-page");

testPageDiv.style.display = "none";
referencesPageDiv.style.display = "none";

const testPageBtnDiv = document.getElementById("test-page-btn");
const aboutPageBtnDiv = document.getElementById("about-page-btn");
const referencesPageBtnDiv = document.getElementById("references-page-btn");

aboutPageBtnDiv.style.borderBottom = "3px solid black";

testPageBtnDiv.addEventListener("click", () => {
  testPageDiv.style.display = "block";
  testPageBtnDiv.style.borderBottom = "3px solid black";
  aboutPageDiv.style.display = "none";
  aboutPageBtnDiv.style.borderBottom = "none";
  referencesPageDiv.style.display = "none";
  referencesPageBtnDiv.style.borderBottom = "none";
})
aboutPageBtnDiv.addEventListener("click", () => {
  testPageDiv.style.display = "none";
  testPageBtnDiv.style.borderBottom = "none";
  aboutPageDiv.style.display = "flex";
  aboutPageBtnDiv.style.borderBottom = "3px solid black";
  referencesPageDiv.style.display = "none";
  referencesPageBtnDiv.style.borderBottom = "none";
})

referencesPageBtnDiv.addEventListener("click", () => {
  testPageDiv.style.display = "none";
  testPageBtnDiv.style.borderBottom = "none";
  aboutPageDiv.style.display = "none";
  aboutPageBtnDiv.style.borderBottom = "none";
  referencesPageDiv.style.display = "block";
  referencesPageBtnDiv.style.borderBottom = "3px solid black";
})


let drawingFile = null; // spiral drawing file stored here
let voiceFile = null; // voice file stored here

const saveFile = async (type, input) => {
  if (type == "drawing") {
    if (input.files[0].name.toLowerCase().lastIndexOf(".png") == -1 && 
        input.files[0].name.toLowerCase().lastIndexOf(".jpg") == -1 
        ) {
      alert("Please upload a .png or .jpg file.");
      return;
    }
    else {
      console.log(`uploaded ${input.files[0].name}`); // display file name
      drawingFile = input.files[0]; // store file content in variable
    }
  }

  if (type == "voice") {
    if (input.files[0].name.toLowerCase().lastIndexOf(".wav") == -1) {
      alert("Please upload a .wav file.");
      return;
    } 
    else {
      console.log(`uploaded ${input.files[0].name}`); // display file name
      voiceFile = input.files[0]; // store file content in variable
    }
  }
}



