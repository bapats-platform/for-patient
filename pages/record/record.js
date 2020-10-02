const app = getApp();

Page({
    data: {
        user:{}, 
        records:[],
    },
    onLoad: function () {
        this.setData({
            user: app.globalData.userInfo, 
            records: app.globalData.medicineRecords
        });
    }
});
