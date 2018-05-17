var result = document.getElementById ('result');
var a = 1, b = 1, c = 1, e = 1, f = 1, g = 1, h = 0;


function cal(){
  var a=+document.getElementById('myRange1').value;

  var b=+document.getElementById('myRange2').value;

  var c=+document.getElementById('myRange3').value;

  z =a+b+c+d+e+f+g+h;
  let resultImg = document.getElementById('resultimg');


  if(z == 6 || z <= 14) {
    // console.log('a');
    resultImg.src = 'SVG/result1.svg';
    result.innerHTML = 'นิสัยประหยัดเว่อร์</br>นี่ก็ถือว่าดีแล้วล่ะเพราะ</br>โลกเรามีน้ำจืดเหลือแค่ 0.3%</br>อย่าลืมบอกวิธีประหยัดน้ำให้เพื่อนๆรู้ล่ะ';
  } else if (z == 15 || z <= 28) {
    // console.log('b');
    resultImg.src = 'SVG/result2.svg';
    result.innerHTML = 'ระวัง!!เธอกำลังจะเป็นเด็กฟุ่มเฟือย</br>เพราะน้ำกินน้ำใช้บนโลกเรา</br>เหลือลงน้อยแล้วต้องช่วยกัน</br>ใช้น้ำอย่างพอดี และ ช็อปปิ้งน้อยลง';
  } else if (z == 29 || z <= 46) {
    // console.log('c');
    resultImg.src = 'SVG/result3.svg';
    result.innerHTML = 'แย่แล้ว!!เธอคือจอมล้างผลาญ</br>เธอควรแคร์สิ่งแวดล้อมนะ</br>น้ำสะอาดที่เหลือน้อยมากแล้ว</br>ถ้าเธอลดการใช้ทุกอย่างได้</br>เธอและเพื่อนๆจะมีน้ำทะเล แม่น้ำ</br>ให้เล่นกันอีกยาวเลยล่ะ';
  }
}
