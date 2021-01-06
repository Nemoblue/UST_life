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

    // update (dt) {},
});
