// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: function(data){
        console.log('login',data)
      },
      fail: function(err){
        console.log('err', err)        
      }
    })
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
  
  },
  onGotUserInfo: function (e) {
    console.log(e.detail)
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
    var nickName = e.detail.userInfo.nickName
    var city = e.detail.userInfo.city
    var province = e.detail.userInfo.province
    var country = e.detail.userInfo.country
    var gender = e.detail.userInfo.gender
    var language = e.detail.userInfo.language

    var userinfo = {
      nickName: e.detail.userInfo.nickName,
      city: e.detail.userInfo.city,
      province: e.detail.userInfo.province,
      country: e.detail.userInfo.country,
      gender: e.detail.userInfo.gender,
      language: e.detail.userInfo.language,
    }
    console.log(userinfo)
    wx.getUserInfo({
      success:function(data){
        console.log('data', data)
      }
    })
  }
})