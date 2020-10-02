// pages/new/advice.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        messages: [
            {type: "doctor", txt: "请您描述当前您的症状或者问题, 我们的系统将基于ML模型和之前的药物记录为您推荐能够缓解症状的药物. "}
        ], 
        paths: {}, 
        input: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            paths: {
                doctor: "/assets/doctor.png", 
                patient: app.globalData.userInfo.avatarUrl
            }
        })
    },
    onInputChange: function(e){
        this.setData({input: e.detail.value});
    },
    onTapSend: function(){
        let new_msg = this.data.messages.slice(0);
        new_msg.push({type: "patient", txt: this.data.input});
        this.setData({messages: new_msg, input: ""});
        new_msg.push({type: "doctor", txt: "打一顿就好了"});
        this.setData({messages: new_msg});
    }
})