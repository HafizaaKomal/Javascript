//                           EVENTS
//              <...Q1...>
 // Function to open the modal and display the clicked image
//  function openModal(img) {
//     var modal = document.getElementById("myModal");
//     var modalImg = document.getElementById("modalImage");
//     modal.style.display = "block";
//     modalImg.src = img.src;
// }

// // Function to close the modal
// function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }


// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-)
function zoomIn(img) {
    document.getElementById("zoom-image").style.display = "block";
    document.getElementById("zoom-image").getElementsByTagName("img")[0].src = img.src;
  }
  function zoomOut() {
    document.getElementById("zoom-image").style.display = "none";
  }
  
  function zoomIn() {
    var para = document.getElementById("text");
    var fontSize = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (fontSize + 10) + "px";
  }
  function zoomOut() {
    var para = document.getElementById("text");
    var fontSize = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = (fontSize - 10) + "px";
  }