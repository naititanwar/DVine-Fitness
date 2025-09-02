document.getElementById('calculateBtn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  if (!weight || !heightCm) {
    document.getElementById('bmiResult').innerText = "Please enter valid weight and height.";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category = "";
  let message = "";

  if (bmi < 18.5) {
    category = "Underweight";
    message = "You’re underweight — Let’s build strength and health together!";
  } else if (bmi < 25) {
    category = "Normal Weight";
    message = "Great shape! Keep the momentum going — and help others get there too.";
  } else if (bmi < 30) {
    category = "Overweight";
    message = "You’re close! With the right guidance, you’ll reach your goals faster.";
  } else if (bmi < 40) {
    category = "Obese";
    message = "Let’s take that first powerful step toward a healthier, stronger you.";
  } else {
    category = "Morbidly Obese";
    message = "It’s never too late — join us and transform your life starting today.";
  }

  document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} — You are ${category}.\n${message}`;
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('weight').value = "";
  document.getElementById('height').value = "";
  document.getElementById('gender').selectedIndex = 0;
  document.getElementById('bmiResult').innerText = "";
});
