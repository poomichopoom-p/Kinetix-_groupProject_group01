const container = document.getElementById("scrollContainer");

setInterval(() => {
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    container.scrollLeft = 0;
  } else {
    container.scrollLeft += 50;
  }
  behavior: "smooth";
}, 2000);

//       <!-- <script>
// const slider = document.getElementById("scrollContainer");

// setInterval(() => {
//   slider.scrollBy({
//     left: 200,
//     behavior: "smooth"
//   });
// }, 2000);
// </script> -->


//   <!-- <script>
//             const container = document.getElementById("scrollContainer");

//             setInterval(() => {
//             container.scrollLeft += 200;
//                 }, 2000);
//         </script> -->