var wxCharts = require('../../../utils/wxcharts.js');

var category = require('../../../data/type.js');

var app = getApp();
var ringChart = null;
Page({
    data: {
      series: []
    },
  onLoad: function () {
    console.log(category)
    var {category:{lst}} = category
    console.log(lst)
    
    this.setData({
      series: lst
    })
  },
    touchHandler: function (e) {
        console.log(ringChart.getCurrentDataIndex(e));
    },
    updateData: function () {
        ringChart.updateData({
            title: {
                name: '80%'
            },
            subtitle: {
                color: '#ff0000'
            }
        });
    },     
    onReady: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        ringChart = new wxCharts({
            animation: true,
            canvasId: 'ringCanvas',
            type: 'ring',
            extra: {
                ringWidth: 25,
                pie: {
                    offsetAngle: -45
                }
            },
            title: {
                name: '70%',
                color: '#7cb5ec',
                fontSize: 25
            },
            subtitle: {
                name: '分类信息',
                color: '#666666',
                fontSize: 15
            },
          series: this.data.series, // Array required 数据列表
            disablePieStroke: true,
            width: windowWidth,
            height: 400,
            dataLabel: true,
            legend: true,
            background: '#f5f5f5',
            padding: 0
        });
        ringChart.addEventListener('renderComplete', () => {
            console.log('renderComplete');
        });
        setTimeout(() => {
            ringChart.stopAnimation();
        }, 500);
    }
});