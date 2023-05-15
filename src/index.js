//This is to reverse the array
// Input --> My Name is Ashif
//Output --> Ashif is Name My

let reverseArray = (str) => {
  let convertToArray = str.split(" ").reverse().join(" ");

  console.log(convertToArray);
};

reverseArray("My Name is Ashif");
