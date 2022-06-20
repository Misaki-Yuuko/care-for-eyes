// index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
    RDn:0,
    RDt:0,
    Avg:0,
    Time:0,
    D:0,
    OutD:0,
    OutT:0,
    D1:0,
    D2:0,
    D3:0,
    D4:0,
    D5:0,
    D6:0,
    D7:0,
    D8:0,
    D9:0,
    D10:0,
    D11:0,
    D12:0,
    D13:0,
    D14:0,
    D15:0,
    D16:0,
    D17:0,
    D18:0,
    D19:0,
    D20:0,
    D21:0,
    D22:0,
    D23:0,
    D24:0,
    D25:0,
    D26:0,
    D27:0,
    D28:0,
    D29:0,
    D30:0,
    D31:0
    },
    ChangeDay:function(event){
    console.log(event.detail.value)
    this.setData({
        D:event.detail.value
        })
    this.data.D=parseFloat(this.data.D)
    console.log(typeof this.data.D)
    },
    OutDay:function(event){
        console.log(event.detail.value)
        this.setData({
            OutD:event.detail.value
            })
        this.data.OutD=parseFloat(this.data.OutD)
        },

    ChangeTime:function(event){
        console.log(event.detail.value)
        this.setData({
        Time:event.detail.value
        })
        this.data.Time=parseFloat(this.data.Time)
        },

     Addtimes:function(){
     switch(this.data.D){
    case 1:
    this.setData({
    D1:this.data.Time
    });
    break;
    case 2:
    this.setData({
    D2:this.data.Time
    });
    break;
    case 3:
    this.setData({
    D3:this.data.Time
    });
    break;
    case 4:
    this.setData({
    D4:this.data.Time
    });
    break;
    case 5:
    this.setData({
    D5:this.data.Time
    });
    break;
    case 6:
    this.setData({
    D6:this.data.Time
    });
    break;
    case 7:
    this.setData({
    D7:this.data.Time
    });
    break;
    case 8:
    this.setData({
    D8:this.data.Time
    });
    break;
    case 9:
    this.setData({
    D9:this.data.Time
    });
    break;
    case 10:
    this.setData({
    D10:this.data.Time
    });
    break;
    case 11:
    this.setData({
    D11:this.data.Time
    });
    break;
    case 12:
    this.setData({
    D12:this.data.Time
    });
    break;
    case 13:
    this.setData({
    D13:this.data.Time
    });
    break;
    case 14:
    this.setData({
    D14:this.data.Time
    });
    break;
    case 15:
    this.setData({
    D15:this.data.Time
    });
    break;
    case 16:
    this.setData({
    D16:this.data.Time
    });
    break;
    case 17:
    this.setData({
    D17:this.data.Time
    });
    break;
    case 18:
    this.setData({
    D18:this.data.Time
    });
    break;
    case 19:
    this.setData({
    D19:this.data.Time
    });
    break;
    case 20:
    this.setData({
    D20:this.data.Time
    });
    break;
    case 21:
    this.setData({
    D21:this.data.Time
    });
    break;
    case 22:
    this.setData({
    D22:this.data.Time
    });
    break;
    case 23:
    this.setData({
    D23:this.data.Time
    });
    break;
    case 24:
    this.setData({
    D24:this.data.Time
    });
    break;
    case 25:
    this.setData({
    D25:this.data.Time
    });
    break;
    case 26:
    this.setData({
    D26:this.data.Time
    });
    break;
    case 27:
    this.setData({
    D27:this.data.Time
    });
    break;
    case 28:
    this.setData({
    D28:this.data.Time
    });
    break;
    case 29:
    this.setData({
    D29:this.data.Time
    });
    break;
    case 30:
    this.setData({
    D30:this.data.Time
    });
    break;
    case 31:
    this.setData({
    D31:this.data.Time
    });
    break;
     }
     console.log("本月一日使用时长：",this.data.D1)
     console.log("本月二日使用时长：",this.data.D2)
            },
    Gettimes:function(){
        switch(this.data.OutD){
            case 1:
            this.setData({
            OutT:this.data.D1
            });
            break;
            case 2:
            this.setData({
            OutT:this.data.D2
            });
            break;
            case 3:
            this.setData({
            OutT:this.data.D3
            });
            break;
            case 4:
            this.setData({
            OutT:this.data.D4
            });
            break;
            case 5:
            this.setData({
            OutT:this.data.D5
            });
            break;
            case 6:
            this.setData({
            OutT:this.data.D6
            });
            break;
            case 7:
            this.setData({
            OutT:this.data.D7
            });
            break;
            case 8:
            this.setData({
            OutT:this.data.D8
            });
            break;
            case 9:
            this.setData({
            OutT:this.data.D9
            });
            break;
            case 10:
            this.setData({
            OutT:this.data.D10
            });
            break;
            case 11:
            this.setData({
            OutT:this.data.D11
            });
            break;
            case 12:
            this.setData({
            OutT:this.data.D12
            });
            break;
            case 13:
            this.setData({
            OutT:this.data.D13
            });
            break;
            case 14:
            this.setData({
            OutT:this.data.D14
            });
            break;
            case 15:
            this.setData({
            OutT:this.data.D15
            });
            break;
            case 16:
            this.setData({
            OutT:this.data.D16
            });
            break;
            case 17:
            this.setData({
            OutT:this.data.D17
            });
            break;
            case 18:
            this.setData({
            OutT:this.data.D18
            });
            break;
            case 19:
            this.setData({
            OutT:this.data.D19
            });
            break;
            case 20:
            this.setData({
            OutT:this.data.D20
            });
            break;
            case 21:
            this.setData({
            OutT:this.data.D21
            });
            break;
            case 22:
            this.setData({
            OutT:this.data.D22
            });
            break;
            case 23:
            this.setData({
            OutT:this.data.D23
            });
            break;
            case 24:
            this.setData({
            OutT:this.data.D24
            });
            break;
            case 25:
            this.setData({
            OutT:this.data.D25
            });
            break;
            case 26:
            this.setData({
            OutT:this.data.D26
            });
            break;
            case 27:
            this.setData({
            OutT:this.data.D27
            });
            break;
            case 28:
            this.setData({
            OutT:this.data.D28
            });
            break;
            case 29:
            this.setData({
            OutT:this.data.D29
            });
            break;
            case 30:
            this.setData({
            OutT:this.data.D30
            });
            break;
            case 31:
            this.setData({
            OutT:this.data.D31
            });
            break;
             }
    },
 
    GetAvg:function(){
    this.setData({
            RDn:this.data.RDn*0,
            RDt:this.data.RDt*0,
            });
    console.log(this.data.RDt,1)
    this.setData({
            RDt:this.data.D1+this.data.D2+this.data.D3+this.data.D4+this.data.D5
            +this.data.D6+this.data.D7+this.data.D8+this.data.D9+this.data.D10
            +this.data.D11+this.data.D12+this.data.D13+this.data.D14+this.data.D15
            +this.data.D16+this.data.D17+this.data.D18+this.data.D19+this.data.D20
            +this.data.D21+this.data.D22+this.data.D23+this.data.D24+this.data.D25
            +this.data.D26+this.data.D27+this.data.D28+this.data.D29+this.data.D30
            +this.data.D31,

                });
   console.log(this.data.RDt,typeof this.data.D1,this.data.D2,2)
   if(this.data.D1!=0) {
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D2!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D3!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D4!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D5!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D6!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D7!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D8!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D9!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D10!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D11!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D12!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D13!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D14!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D15!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D16!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D17!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D18!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D19!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D20!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D21!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D22!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D23!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D24!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D25!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D26!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D27!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D28!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }  
   if(this.data.D29!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   if(this.data.D30!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   }
   else if(this.data.D31!=0){
    this.setData({
        RDn:this.data.RDn+1,
        });
   };
   this.setData({
   Avg:this.data.RDt/this.data.RDn    
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
    console.log(this.data[0],1)
    }
})