// pages/cart/cart.js
Page({

  /**
   * Page initial data
   */
  data: {
    input: '', 
    filtered: [], 
    medicines: [
      {
        branch: "强必林", 
        name: "阿莫西林", 
        eng: "Amoxicillin",
        type: "胶囊", 
        quantity: "0.25g*24粒", 
        price: "9.00", 
        symptoms: "下呼吸系统感染, 下呼吸道感染, 上呼吸道感染, 皮肤软组织感染, 咽炎, 伤寒, 鼻窦炎, 淋病", 
        usage: "口服。成人一次0.5g/2粒 ,每6~8小时1次，一日剂量不超过4g (16粒)。小儿一日剂量按体重20~40mg/kg，每8小时1次;3个月以下婴儿一日剂量按体重30mg/kg，每12小时1次。肾功能严重损害患者需调整给药剂量，其中内生肌酐清除率为10~30ml/分钟的患者每12小时0.25~0.5g(1~2粒)...详见说明书。"
      },
      {
        branch: "东鲁堂", 
        name: "二甲双胍格列本脲", 
        eng: "MetforminHydrochlorideandGlibenclamideTablets",
        type: "胶囊", 
        quantity: "0.25g*24粒", 
        price: "7.00",
        symptoms: "控制血糖, 夜尿增多, 高血糖, 口渴多尿, 多饮", 
        usage: "口服，就餐时服用。仅用于2型糖尿病的二线治疗:推荐开始剂量为一日两次，一次两片(5mg/500mg)。但是，对于以前服用过格列本脲或/和二甲双胍的病人，本药的首次剂量不应超过以前服用的格列本脲或/和二甲双胍的剂量，以避免发生低血糖。剂量增加应为每两周一次，每次增加不超过两片(5mg/500g)，直至达到对病人高血糖良好控制的最低剂量。一日最大剂量不超过八片(20mg/2000mg)。"
      },
      {
        branch: "先强严灵", 
        name: "头孢克肟", 
        eng: "Cefixime",
        type: "分散片", 
        quantity: "0.1g*8片", 
        price: " 30.70",
        symptoms: "发热, 上呼吸道感染, 肾盂肾炎, 急性发作慢性支气管炎, 肺炎, 中耳炎, 尿道炎, 膀胱炎, 胆囊炎, 猩红热鼻窦炎", 
        usage: "成人及体重30公斤以上儿童用量: 口服，每次100mg，每日2次;成人重症感染者可增加至每次200mg，每日二次。"
      }, 
      {
        branch: "泰瑞特", 
        name: "苯丙醇", 
        eng:"Phenylpropanol",
        type: "软胶囊", 
        quantity: "0.1g*100粒", 
        price: "25.00",
        symptoms: "慢性胆囊炎的辅助治疗", 
        usage: "口服，成人一次1~2粒，一日3次。餐后服用。"
      }, 
      {
        branch: "上海信谊", 
        name: "盐酸美西律", 
        eng:"MexiletineHydrochloride",
        type: "片剂", 
        quantity: "0.5mg*100片", 
        price: "29.00",
        symptoms: "慢性室性心律失常, 早搏心动过速, 慢心律", 
        usage: "口服。首次4-6片，必要时2小时后再服2-4片。一般维持量每日约8-16片，分2-3次服。成人极量为每日24片，分次口服。1 本品在危及生命的心律失常患者中有使心律失常恶化的可能。在程序刺激试验中，此种情况见于10%的患者，但不比其他抗心律失常药高。2 对诊断的干扰：过量时心电图可产生P-R间期延长及QRS波增宽。门冬氨酸氨基转移酶增高。偶有抗核抗体阳性。3 下列情况应慎用：①室内传导阻滞;②严重窦性心动过缓;③严重肝或肾功能障碍;④肝血流量减低;⑤严重心衰或低血压;⑥癫痫。4 用药期间应注意随访检查：①血压;②心电图;③血药浓度。"
      }, 
      {
        branch: "赛治", 
        name: "甲巯咪唑", 
        eng:"Thiamazole",
        type: "片剂", 
        quantity: "0.1g*50片", 
        price: "32.00",
        symptoms: "甲亢, 甲状腺功能亢进, 甲状腺增大", 
        usage: "甲状腺功能亢进症的药物治疗，尤其适用于不伴有或伴有轻度甲状腺増大(甲状腺肿)的患者及年轻患者。用于各种类型的甲状腺功能亢进症的手术前准备, 甲状腺功能亢进症患者拟采用放射性碘治疗时的准备用药，以预防治疗后甲状腺毒性危象的发生。 放射砜治疗后间歇期的治疗。 在个别的情况下，因患者一般状况或个人原因不能采用常规的治疗措施，或因患者拒绝接受常规的治疗措施时，由于对甲巯咪唑片剂(在尽可能低的剂量)耐受性良好，可用于甲状腺功能亢进症的长期治疗。 对于必须使用碘照射(如使用含碘造影剂检查)的有甲状腺功能亢进病史的患者和功能自主性甲状腺瘤患者作为预防性用药。"
      }, 
      {
        branch: "欧意", 
        name: "诺氟沙星", 
        eng:"Norfloxacin",
        type: "胶囊", 
        quantity: "0.1g*24粒", 
        price: "8.90",
        symptoms: "泌尿系统感染, 其他沙门菌感染, 前列腺炎伤寒, 尿路感染, 敏感淋病肠道感染, 消炎尿道, 炎菌尿", 
        usage: "用法用量:1.大肠埃希菌、肺炎克雷伯菌及奇异变形菌所致的急性单纯性下尿路感染次400mg(4粒),一日2次，疗程3日。2.其他病原菌所致的单纯性尿路感染剂量同上，疗程7~10日。3.复杂性尿路感染剂量同上，疗程10~21日。4.单纯性淋球菌性尿道炎单次800~1200mg(8~12粒)。5.急性及慢性前列腺炎一次400mg(4粒)，一日2次，疗程28日。6.肠道感染一次300~400mg(3~4粒)，一日2次，疗程5~7日。7.伤寒沙门菌感染一800~1200mg(8~12粒)，分2~3次服用，疗程14~21日。"
      }, 
      {
        branch: "老拨云堂", 
        name: "加替沙星", 
        eng:"Gatifloxacin",
        type: "滴眼液", 
        quantity: "5ml*1支", 
        price: "17.30",
        symptoms: "红肿角膜炎, 急性细菌性结膜炎, 敏感角膜溃疡, 感染眼流泪抗菌, 急性结膜炎, 眼痛眼痒麦, 粒肿发炎", 
        usage: "第1~2天:清醒状态下，2小时1次，1次1滴，每天8次;第3~7天:清醒状态下，每天4次，1次1滴。1.本品只限于滴眼用，不能结膜下注射使用，也不能直接注入眼前节。2.包括加替沙星在内的喹诺类药物全身给药(如口服和静脉给药)偶尔可出现严重的不良反应，有些患者在第一次用药后出现。一些反应伴随着心衰、意识丧失、血管性水肿(包括喉头、咽、面部水肿)、气管梗阻、呼吸困难、荨麻诊、瘙痒。出现过敏症状，立即停药。3.避免使用接触镜，避免眼睛、手指和其物品污染溶器瓶口。4.像其他抗生素一样，长期应用可能导致非敏感菌如真菌的过度生长,如出现二重感染应停止使用本品，改变治疗。"
      }, 
    ]
  },
  onLoad: function(){
    this.setData({filtered: this.data.medicines});
  }, 
  onInputChange: function(event) {
    let newInput = event.detail.value; 
    if (!newInput && this.data.filtered.length < this.data.medicines.length) 
      this.setData({filtered: this.data.medicines});
    this.setData({input: newInput});
  },
  onSearchButtonTap: function(){
    let inputStr = this.data.input; 
    let newFiltered = []; 
    for(let goods of this.data.medicines){
      if (!goods.name.includes(inputStr)) continue; 
      newFiltered.push(goods); 
    }
    this.setData({filtered: newFiltered}); 
  }, 
  onGoodsTap: function(event){
    let g_index = event.currentTarget.dataset.index;
    let goods = this.data.filtered[g_index]; 
    let goodsJson = JSON.stringify(goods)
    wx.navigateTo({
      url: `goods/sub?json=${goodsJson}`,
    })
  }
})