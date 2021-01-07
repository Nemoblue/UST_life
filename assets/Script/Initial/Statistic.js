// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// 这是一个常驻节点
cc.Class({
    extends: cc.Component,

    properties: {
        // 选择性别 1->male 0->female
        gender: 0,

        // 这些是四种先天属性： 勇气值， 健康值，正义值 ，自信值
        // 随场景保留属性值
        // 可以转换成后天属性
        bravery: 0,
        health: 0,
        justice: 0,
        confidence: 0,
    },

    // 获取属性 0:bravery 1:health 2:justice 3:confidence
    getStatistic(num) {
        switch(num) {
            case 0: return this.bravery; break;
            case 1: return this.health; break;
            case 2: return this.justice; break;
            case 3: return this.confidence; break;
            case 9: return this.gender; break;
            default: return 0;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.node);
    },

    start () {

    },

    // 设定性别
    setGenderMale() {
        this.gender = 1;
    },

    setGenderFemale() {
        this.gender = 0;
    },

    // 对属性进行加减
    setBravery(num) {
        this.bravery += num;
    },

    setHealth(num) {
        this.health += num;
    },

    setJustice(num) {
        this.justice += num;
    },

    setConfidence(num) {
        this.confidence += num;
    },

    // 将属性转换成后天属性
    setPostStatistic(){

    },

    // update (dt) {},
});
