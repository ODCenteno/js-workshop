
function calcSquareArea() {
  const squareInput = document.getElementById("SquareInput");
  const sideValue = squareInput.value;
  const squareArea = sideValue * sideValue;
  console.log(`Square area is: ${squareArea} cm^2`);
  let setSquareResult = document.getElementById("squareResult").setAttribute(`${squareArea}`)
};

function calcSquarePerimeter() {
  const squareInput = document.getElementById("SquareInput");
  const sideValue = squareInput.value;
  const squarePerimeter = sideValue * 4;
  console.log(`Square perimeter is: ${squarePerimeter} cm`);
};

function calcTriangleArea() {
  const sideInput = document.getElementById("TriangleSideInput");
  const sideValue = sideInput.value;
  const highInput = document.getElementById("TriangleHeightInput");
  const highValue = highInput.value;
  const triangleArea = (sideValue * highValue) / 2;
  console.log(`Triangle area is: ${triangleArea} cm^2`);
};

function calcTrianglePerimeter() {
  const sideInput = document.getElementById("TriangleSideInput");
  const sideValue = sideInput.value;
  const trianglePerimeter = sideValue * 3;
  console.log(`Triangle area is: ${trianglePerimeter} cm^2`);
};

