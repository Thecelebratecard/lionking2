var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 30, // The size of the brush/scratch.
  bg: `Images/back.jpg`, // Background (image path or hex color).
  fg: `Images/front.jpg`, // Foreground (image path or hex color).
  cursor: "default", // Set cursor.
});
