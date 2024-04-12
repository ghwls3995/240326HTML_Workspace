// var Body = {
//     setColor: function (color) {
//       document.querySelector('body').style.color = color;
//     },
//     setBackgroundColor: function (color) {
//       document.querySelector('body').style.backgroundColor = color;
//     }
//   }

//jQuerry 버전 , 도구이용
var Body = {
    setColor: function(color) {
   $('body').css('color', color);
    },
    setBackgroundColor: function(color) {
    $('body').css('backgroundColor', color);
    }
   }
// 생 자바스크립트 버전 , 바닐라 자바스크립트 ver 
  var Links = {
    setColor: function (color) {
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  } 
  
  // // jQuery버전
  // function setColor(color){
  //   $('a').css('color', color);
  // }

  function nightDayHandler(self) {
    if (self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day'
      Links.setColor('powderblue')
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night'
      Links.setColor('blue')
    }
  }