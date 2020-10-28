const app = getApp();

Page({
    data: {
        user:{}, 
        records:[],
    },
    onLoad: function () {
        this.setData({
            user: app.globalData.userInfo, 
            records: [
                {name: "阿莫西林", type: "pill", count: "1000mg"},
                {name: "格列本脲", type: "tablet", count: "300mg"}, 
                {name: "头孢唑林", type: "syringe", count: "2000mg"}, 
                {name: "苯丙醇", type: "syringe", count: "2400mg"}, 
                {name: "美西律", type: "tablet", count: "3420mg"}, 
                {name: "甲巯咪唑", type: "powder",  count: "400mg"}, 
                {name: "诺氟沙星", type: "tablet", count: "2130mg"}
              ]
        });
    }
});
