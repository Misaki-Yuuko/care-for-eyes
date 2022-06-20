const hours = []
const minutes = []
const seconds = []
var begin = null

for (let i = 0; i <=23; i++) {
  hours.push(i)
}

for (let i = 0; i <= 59; i++) {
  minutes.push(i)
  seconds.push(i)
}

Page({  
  /**
   * 页面的初始数据
   */
  data: {
    hours,
    hour: 0,
    minutes,
    minute: 0,
    seconds,
    second: 0,
    value: [0, 0, 0],
    current: {
        poster: 'https://www.kurisu.top/wp-content/uploads/2022/06/Kalsit.jpg',
        name: 'Immutable',
        author: '塞壬唱片',
        src: 'https://www.kurisu.top/wp-content/uploads/2022/06/遗尘漫步.mp3',
      },
  },

  bindChange: function(e) {
    const val = e.detail.value
   // console.log(e)
    this.setData({
      hour: this.data.hours[val[0]],
      minute: this.data.minutes[val[1]],
      second: this.data.seconds[val[2]]
    })
  },

  timer: function() {
    if(begin) return
    var that = this
    begin = setInterval((function() {
      let hour = that.data.hour
      let minute = that.data.minute
      let second = that.data.second
      if (second == 0) {
        if (minute == 0) {
          if (hour == 0) {
            return
          } else {
            hour -= 1
            minute = 59
            second = 59
          }
        } else {
          minute -= 1
          second = 59
        }
      } else {
        second -= 1
      }
      that.setData({
        hour: hour,
        minute: minute,
        second: second
      })
      if(!(hour || minute || second)) {
        wx.showModal({
          content: '休息结束，感觉如何o((>ω< ))o',
          showCancel: false,
        })
        clearInterval(begin)
        begin = null
      }
    }), 1000)
  },
  
  stop: function() {
    clearInterval(begin)
    begin = null
  }
})