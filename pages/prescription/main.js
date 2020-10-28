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
                {
                    hospital: "养和医院", 
                    date: "2020-09-21", 
                    prescription: "可考虑应用可待因，其能直接抑制延脑的咳嗽中枢，镇咳作用强大而迅速，其强度约为吗啡的1/4。每日3片, 持续20天"
                },
                {
                    hospital: "仁安医院", 
                    date: "2020-09-30", 
                    prescription: "可及时应用司坦类黏液调节剂：如羧甲司坦或祛痰剂如氨溴索，以降低痰液黏度，使痰液易于排出。每日3片, 持续20天"
                },
                {
                    hospital: "港安医院", 
                    date: "2020-10-6", 
                    prescription: "服用抗菌药物（抗生素、磺胺药、氟喹诺酮类），消除炎症；或采取对抗过敏原（抗组胺药、‘肾上腺皮质激素）每日3片, 持续20天"
                },
                {
                    hospital: "浸信会医院", 
                    date: "2020-10-15", 
                    prescription: "服用抗菌药物（抗生素、磺胺药、氟喹诺酮类），消除炎症；或采取对抗过敏原（抗组胺药、‘肾上腺皮质激素）每日3片, 持续20天"
                },
                {
                    hospital: "圣保禄医院", 
                    date: "2020-10-19", 
                    prescription: "可及时应用司坦类黏液调节剂：如羧甲司坦或祛痰剂如氨溴索，以降低痰液黏度，使痰液易于排出。每日3片, 持续20天"
                },
                {
                    hospital: "明德医院", 
                    date: "2020-10-21", 
                    prescription: "可考虑应用可待因，其能直接抑制延脑的咳嗽中枢，镇咳作用强大而迅速，其强度约为吗啡的1/4。每日3片, 持续20天"
                },
                {
                    hospital: "嘉诺撒医院", 
                    date: "2020-10-25", 
                    prescription: "可及时应用司坦类黏液调节剂：如羧甲司坦或祛痰剂如氨溴索，以降低痰液黏度，使痰液易于排出。每日3片, 持续20天"
                }
              ]
        });
    }, 
    onTapPrescription(event){
        let record = this.data.records[event.currentTarget.dataset.index]
        wx.showModal({
            title: record.hospital,
            content: record.prescription
          })
    }
});
