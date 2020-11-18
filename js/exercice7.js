document.addEventListener('keyup', function (e) {
  /*switch (e.code) {
case 'ArrowUp':
case 'ArrowLeft':
case 'ArrowRight':
case 'ArrowDown':
  imageManager.execute(e.code)
  break
}*/
//check if method in imageManager exists
if (imageManager.hasOwnProperty(e.code)) {
  imageManager.execute(e.code)
}
})


let imageManager = {
  image: document.querySelector('.image'),
  ArrowUp: function () {
    this.image.style.top = this.image.offsetTop - 10 + "px"
  },
  ArrowLeft: function () {
    this.image.style.left = this.image.offsetLeft - 10 + "px"
  },
  ArrowRight: function () {
    this.image.style.left = this.image.offsetLeft + 10 + "px"
  },
  ArrowDown: function () {
    this.image.style.top = this.image.offsetTop + 10 + "px"
  },
}

imageManager.execute = function (key) {
  let methodName = imageManager[key]
      /*let functionParams = [].splice.call(arguments, 1)*/
  return methodName.apply(imageManager)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
setInterval(function() {
  let randomNum = getRandomInt(4)
  switch (randomNum) {
    case 0 :
      imageManager.ArrowUp()
      break;
    case 1 :
      imageManager.ArrowLeft()
      break;
    case 2 :
      imageManager.ArrowRight()
      break;
    case 3 :
      imageManager.ArrowDown()
      break;
    default:
      console.log("terminé")
  }
  imageManager.ArrowDown()
}, 500)
