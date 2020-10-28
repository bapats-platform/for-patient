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
<<<<<<< Updated upstream:pages/advice/main.js

        function get_advice_from(symptoms){
            let medicines = {
                "头疼" : {name:"阿莫西林", status:"胶囊",  quantity:'3粒/天', perioid:'10天'}, 
                "咳嗽" : {name:"头孢唑林", status:"注射计",  quantity:'1次/天', perioid:'20天'}, 
                "肾虚" : {name:"坚持运动", status:"有氧和无氧交替",  quantity:'30分钟/天', perioid:'20天'}, 
                "蛋疼" : {name:"坚持运动", status:"有氧和无氧交替",  quantity:'30分钟/天', perioid:'20天'}, 
                "便秘" : {name:"苯丙醇", status:"注射计",  quantity:'2次/天', perioid:'5天'},
            };
            let random = [
                {name:"板蓝根", status:"冲剂",  quantity:'2袋/天', perioid:'5天'},
                {name:"双黄连", status:"冲剂",  quantity:'1袋/天', perioid:'5天'},
                {name:"金银花", status:"冲剂",  quantity:'2袋/天', perioid:'5天'},
                {name:"水", status:"热",  quantity:'多喝', perioid:'每天'},
            ]
            let output = '';
            console.log(symptoms);
            for(let symptom in medicines) {
                if(!symptoms.includes(symptom)) continue;
                let advice = medicines[symptom];
                output += `${advice.name}(${advice.status}) ${advice.quantity} ${advice.perioid} \n`;
                console.log(output);
            }
            if(!output){
                let advice = random[Math.floor(Math.random() * random.length)];
                console.log(advice);
                output = `${advice.name}(${advice.status}) ${advice.quantity} ${advice.perioid} \n`
            }
            return output
        }

        let new_msg = this.data.messages;
        let pat_input = this.data.input;
        new_msg.push({type: "patient", txt: pat_input});
        this.setData({messages: new_msg, input: ""}); 
        let advices = `你好, 我们提供给您的建议如下: \n${get_advice_from(pat_input)}`; 
        new_msg.push({type: "doctor", txt: advices});
        this.setData({messages: new_msg});
=======
        let new_msg = this.data.messages.slice(0);
        new_msg.push({type: "patient", txt: this.data.input});
        this.setData({messages: new_msg, input: ""});
        new_msg.push({type: "doctor", txt: "打一顿就好了"});
        this.setData({messages: new_msg, input: ""});
>>>>>>> Stashed changes:pages/advice/advice.js
    }
})