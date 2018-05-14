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
    result.innerHTML = 'นิสัยประหยัดเว่อร์</br>นี่เป็นเรื่องดีเพราะว่า</br>โลกเรามีน้ำจืดเหลือแค่0.3%</br>อย่าลืมบอกวิธีประหยัดน้ำให้เพื่อนๆรู้ล่ะ';
  } else if (z == 15 || z <= 28) {
    // console.log('b');
    resultImg.src = 'SVG/result2.svg';
    result.innerHTML = 'นิสัยของเธอก็เฉยๆนะ แต่...</br>แต่ระวังหน่อยเพราะน้ำกิน</br>น้ำใช้บนโลกเราเหลือน้อยแล้ว</br>ลองซื้อเสื้อผ้าให้น้อยลงและ</br>อาบน้ำให้ไวขึ้น หรือ ใช้น้ำอย่างพอดีนะ';
  } else if (z == 29 || z <= 46) {
    // console.log('c');
    resultImg.src = 'SVG/result3.svg';
    result.innerHTML = 'แย่แล้ว!!เธอคือจอมล้างผลาญ</br>เธอควรแคร์สิ่งแวดล้อมนะ</br>น้ำสะอาดที่เหลือน้อยมากแล้ว</br>ถ้าเธอลดการใช้ทุกอย่างได้</br>เธอกับเพื่อนๆจะมีน้ำทะเล แม่น้ำ</br>ทะเลสาบให้เล่นกันอีกยาวเลยล่ะ';
  }
}
