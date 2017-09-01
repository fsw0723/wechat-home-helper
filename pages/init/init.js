var pageObject = {
  data: {
  },
  redirectToCreate: function() {
    wx.navigateTo({
      url: '../create/create'
    })
  },
  redirectToJoin: function () {
    wx.navigateTo({
      url: '../join/join'
    })
  }
}

Page(pageObject)