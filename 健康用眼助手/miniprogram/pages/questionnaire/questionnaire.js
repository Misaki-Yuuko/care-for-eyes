// index1/index1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
       Q1:0,
       Q2:0,
       Q3:0,
       Q4:0,
       Q5:0,
       Q6:0,
       Q7:0,
       Q8:0,
       Q9:0,
       Q10:0,
       score:0,
       items1: [
        { name: 'A', value: '4小时以上' , checked: 'true'},
        { name: 'B', value: '2小时到4小时' },
        { name: 'C', value: '2小时以下' },
      ]
    },
    SumScore:function(e){
    this.setData({
    score:this.data.Q1+this.data.Q2+this.data.Q3+this.data.Q4
    +this.data.Q5+this.data.Q6+this.data.Q7+this.data.Q8
    +this.data.Q9+this.data.Q10
   })
   
    },
    Jump1:function(){
        wx.navigateTo({
          url: '/index/index'   // 目的页面url
               })
            },
    radioChange1A: function (e) {
        this.setData({
          Q1:this.data.Q1*0
        }),
        this.setData({
          Q1:this.data.Q1+5
        })
        
      },
    radioChange1B: function (e) {
        this.setData({
            Q1:this.data.Q1*0
          }),
          this.setData({
            Q1:this.data.Q1+3
          })
      },
    radioChange1C: function (e) {
        this.setData({
            Q1:this.data.Q1*0
          }),
          this.setData({
            Q1:this.data.Q1+1
          })
      },
    radioChange2A: function (e) {
        this.setData({
          Q2:this.data.Q2*0
        }),
        this.setData({
          Q2:this.data.Q2+5
        })
        
      },
    radioChange2B: function (e) {
        this.setData({
            Q2:this.data.Q2*0
          }),
          this.setData({
            Q2:this.data.Q2+3
          })
      },
    radioChange2C: function (e) {
        this.setData({
            Q2:this.data.Q2*0
          }),
          this.setData({
            Q2:this.data.Q2+1
          })
      },
    radioChange3A: function (e) {
        this.setData({
          Q3:this.data.Q3*0
        }),
        this.setData({
          Q3:this.data.Q3+5
        })
        
      },
    radioChange3B: function (e) {
        this.setData({
            Q3:this.data.Q3*0
          }),
          this.setData({
            Q3:this.data.Q3+3
          })
      },
    radioChange3C: function (e) {
        this.setData({
            Q3:this.data.Q3*0
          }),
          this.setData({
            Q3:this.data.Q3+1
          })
      },
    radioChange4A: function (e) {
        this.setData({
          Q4:this.data.Q4*0
        }),
        this.setData({
          Q4:this.data.Q4+5
        })
        
      },
    radioChange4B: function (e) {
        this.setData({
            Q4:this.data.Q4*0
          }),
          this.setData({
            Q4:this.data.Q4+3
          })
      },
    radioChange4C: function (e) {
        this.setData({
            Q4:this.data.Q4*0
          }),
          this.setData({
            Q4:this.data.Q4+1
          })
      },
    radioChange5A: function (e) {
        this.setData({
          Q5:this.data.Q5*0
        }),
        this.setData({
          Q5:this.data.Q5+5
        })
        
      },
    radioChange5B: function (e) {
        this.setData({
            Q5:this.data.Q5*0
          }),
          this.setData({
            Q5:this.data.Q5+3
          })
      },
    radioChange5C: function (e) {
        this.setData({
            Q5:this.data.Q5*0
          }),
          this.setData({
            Q5:this.data.Q5+1
          })
      },
    radioChange6A: function (e) {
        this.setData({
          Q6:this.data.Q6*0
        }),
        this.setData({
          Q6:this.data.Q6+5
        })
        
      },
    radioChange6B: function (e) {
        this.setData({
            Q6:this.data.Q6*0
          }),
          this.setData({
            Q5:this.data.Q5+3
          })
      },
    radioChange6C: function (e) {
        this.setData({
            Q6:this.data.Q6*0
          }),
          this.setData({
            Q6:this.data.Q6+1
          })
      },
    radioChange7A: function (e) {
        this.setData({
          Q7:this.data.Q7*0
        }),
        this.setData({
          Q7:this.data.Q7+5
        })
        
      },
    radioChange7B: function (e) {
        this.setData({
            Q7:this.data.Q7*0
          }),
          this.setData({
            Q7:this.data.Q7+3
          })
      },
    radioChange7C: function (e) {
        this.setData({
            Q7:this.data.Q7*0
          }),
          this.setData({
            Q7:this.data.Q7+1
          })
      },
    radioChange8A: function (e) {
        this.setData({
          Q8:this.data.Q8*0
        }),
        this.setData({
          Q8:this.data.Q8+5
        })
        
      },
    radioChange8B: function (e) {
        this.setData({
            Q8:this.data.Q8*0
          }),
          this.setData({
            Q8:this.data.Q8+3
          })
      },
    radioChange8C: function (e) {
        this.setData({
            Q8:this.data.Q8*0
          }),
          this.setData({
            Q8:this.data.Q8+1
          })
      },
    radioChange9A: function (e) {
        this.setData({
          Q9:this.data.Q9*0
        }),
        this.setData({
          Q9:this.data.Q9+5
        })
        
      },
    radioChange9B: function (e) {
        this.setData({
            Q9:this.data.Q9*0
          }),
          this.setData({
            Q8:this.data.Q8+3
          })
      },
    radioChange9C: function (e) {
        this.setData({
            Q9:this.data.Q9*0
          }),
          this.setData({
            Q9:this.data.Q9+1
          })
      },
    radioChange10A: function (e) {
        this.setData({
          Q10:this.data.Q10*0
        }),
        this.setData({
          Q10:this.data.Q10+5
        })
        
      },
    radioChange10B: function (e) {
        this.setData({
            Q10:this.data.Q10*0
          }),
          this.setData({
            Q10:this.data.Q10+3
          })
      },
    radioChange10C: function (e) {
        this.setData({
            Q10:this.data.Q10*0
          }),
          this.setData({
            Q10:this.data.Q10+1
          })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})