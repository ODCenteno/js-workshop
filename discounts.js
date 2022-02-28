
const coupons = ["CAMP2021", "SUMMER", "FEB14"];
const displayResult = document.getElementById("ResultPrice");


  
function calcPriceAfterDiscount() {
  const priceInput = document.getElementById("Price");
  const priceValue = priceInput.value;
  const discountInput = document.getElementById("Discount");
  const discountValue = discountInput.value;
  const couponInput = document.getElementById("CouponInput");
  const couponValue = couponInput.value;

  console.log(`Price Value = ${priceValue}`)
  console.log(`Coupon Value = ${couponValue}`)

  if (couponValue === "" && (0 > discountValue < 100)) {
    const result = priceAfterDiscount(priceValue, discountValue);
    displayResult.innerText = `Price after discount is: $ ${result} USD`
  } else if (!coupons.includes(couponValue) && (priceValue != 0)) {
    alert(`El coupon ${couponValue} no es válido, intenta de nuevo`);
  } else if (couponValue === "CAMP2021" && (priceValue != 0)) {
    const result = priceAfterDiscount(priceValue, 20);
    displayResult.innerText = `Price after discount is: $ ${result} USD`
  } else if (couponValue === "SUMMER" && (priceValue != 0)) {
    const result = priceAfterDiscount(priceValue, 40);
    displayResult.innerText = `Price after discount is: $ ${result} USD`
  } else {
    alert(`Try again and check that the values are correct.`);
  };
}

function priceAfterDiscount(priceValue, discountValue) {
  const calculation = ((priceValue * (100 - discountValue)) / 100);
  console.log(`Price after discount: $${calculation} USD`);
  return calculation;
}
  // let priceAfterDiscount = ((priceValue * (100 - discountValue)) / 100);
  // console.log(`Price after discount: $${priceAfterDiscount} USD`)

  

