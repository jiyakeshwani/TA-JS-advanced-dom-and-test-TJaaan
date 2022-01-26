const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require("./index");

// positive test for getFullName
test("expect full name to be Arya + Stark = Arya Stark", () => {
  expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
});
test("expect full name to be John + Snow = John Snow", () => {
  expect(getFullName("John", "Snow")).toBe("John Snow");
});
test("expect full name to be Sansa + Stark = Sansa Stark", () => {
  expect(getFullName("Sansa", "Stark")).toBe("Sansa Stark");
});
// negative test getFullName
test("expect full name not to be Arya+ Stark = Arya Stark", () => {
  expect(getFullName("Arya", "Stark")).not.toBe("Arya Stark");
});
test("expect full name not to be Arya + Stark = Arya Stark", () => {
  expect(getFullName("Sansa", "Stark")).not.toBe("Sansa Stark");
});
test("expect full name not to be Arya + Stark = Arya Stark", () => {
  expect(getFullName("John", "Snow")).not.toBe("John Snow");
});

// positive test for isPalindrome
test("expect hellolleh to be a palindrome", () => {
  expect(isPalindrome("hellolleh")).toBe(true);
});
test("expect abcba to be a palindrome", () => {
  expect(isPalindrome("abcba")).toBe(true);
});
test("expect level to be a palindrome", () => {
  expect(isPalindrome("level")).toBe(true);
});
// negative test for isPalindrone

test("expect nedjgh to be a palindrome", () => {
  expect(isPalindrome("nedjgh")).not.toBe(true);
});
test("expect cat to be a palindrome", () => {
  expect(isPalindrome("cat")).not.toBe(true);
});
test("expect chair to be a palindrome", () => {
  expect(isPalindrome("chair")).not.toBe(true);
});

// positive test for getCircumference
test("expect circumference for circle with radius 4 to be 25.12", () => {
  expect(getCircumference(4)).toBe(`The circumference is 25.12`);
});
test("expect circumference for circle with radius 10 to be 61.8", () => {
  expect(getCircumference(10)).toBe(`The circumference is 62.8`);
});
test("expect circumference for circle with radius 12 to be 75.36", () => {
  expect(getCircumference(12)).toBe(`The circumference is 75.36`);
});
// negative test for getCircumfernce

test("expect circumference for circle with radius 4 not to be 12 ", () => {
  expect(getCircumference(4)).not.toBe(`The circumference is 12`);
});
test("expect circumference for circle with radius 10 to be 18", () => {
  expect(getCircumference(10)).not.toBe(`The circumference is 18`);
});
test("expect circumference for circle with radius 12 to be 20", () => {
  expect(getCircumference(12)).not.toBe(`The circumference is 20`);
});

// positive test for getArea
test("expect area for circle with radius 4 to be 50.24", () => {
  expect(getArea(4)).toBe(`The area is 50.24`);
});
test("expect area for circle with radius 10 to be 314", () => {
  expect(getArea(10)).toBe(`The area is 314`);
});
test("expect area for circle with radius 12  to be 452.16", () => {
  expect(getArea(12)).toBe(`The area is 452.16`);
});
// negative test for getArea
test("expect area for circle with radius 4 to be 76", () => {
  expect(getArea(4)).not.toBe(`The area is 76`);
});
test("expect area for circle with radius 10 to be 54", () => {
  expect(getArea(10)).not.toBe(`The area is 54`);
});
