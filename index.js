// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
  return Math.abs(distance - 42) * 264;
}

function distanceTravelledInFeet(s, d) {
  return Math.abs(d - s) * 264;
}

function calculatesFarePrice(s, d) {
  let dx = distanceTravelledInFeet(s, d);
  if (dx <= 400) return 0;
  if (dx > 2500) return "cannot travel that far";
  return dx < 2000 ? (dx - 400) * 0.02 : 25;
}
