var result = document.getElementById ('result');
var a = 1, b = 1, c = 1, e = 1, f = 1, g = 1, h = 0;


function cal(){
  var a=+document.getElementById('myRange1').value;

  var b=+document.getElementById('myRange2').value;

  var c=+document.getElementById('myRange3').value;

  z =a+b+c+d+e+f+g+h;
  let resultImg = document.getElementById('resultimg');


  if(z == 6 || z <= 15) {
    // console.log('a');
    resultImg.src = 'result1.svg';
    result.innerHTML = 'เธอคือคนที่เป็นมิตรต่อโลก</br>การใช้น้ำอย่างประหยัดของคุณนั้น</br>ทำให้น้ำบนโลกของเราหมดช้าลง</br>อย่าลืมบอกวิธีประหยัดน้ำให้เพื่อนๆรู้ล่ะ';
  } else if (z == 16 || z <= 24) {
    // console.log('b');
    resultImg.src = 'result2.svg';
    result.innerHTML = 'ระวัง!!เธอกำลังจะเป็นเด็กล้างผลาญ</br>รู้มั้ย น้ำกินน้ำใช้บนโลกเราเหลือ</br>น้อยแล้วนะเราต้องช่วยกันนะ</br>ใช้น้ำอย่างพอดีคือสิ่งที่เธอควรจะทำนะจ๊ะ';
  } else if (z == 25 || z <= 46) {
    // console.log('c');
    resultImg.src = 'result3.svg';
    result.innerHTML = 'แย่แล้ว!!เธอคือจอมล้างผลาญ</br>เธอควรแคร์สิ่งแวดล้อมนะ</br>น้ำสะอาดที่เหลือน้อยมากแล้ว</br>ถ้าเธอลดการใช้ทุกอย่างได้</br>เธอและเพื่อนๆจะมีน้ำทะเล แม่น้ำ</br>ให้เล่นกันอีกยาวเลยล่ะ';
  }
}
