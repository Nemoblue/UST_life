// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        consistNode: {
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        consistNode = cc.director.getScene().getChildByName('consistNode'); // 常驻节点接口
    },

    start () {

    },

    // 针对不同选项增加/减少属性值：正数为增，负数为减，默认为1
    S1_option_1() { // +勇气值，健康值，自信值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setHealth(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S1_option_2() { // +勇敢值，自信值，正义值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
        consistNode.getComponent('Statistic').setJustice(1);
    },

    S1_option_3() { // +正义值，健康值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setHealth(1);
    },

    S2_option_1() { // +健康值
        consistNode.getComponent('Statistic').setHealth(1);
    },

    S2_option_2() { // +勇气值，正义值，自信值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S2_option_3() { // +正义值，自信值，健康值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setConfidence(1);
        consistNode.getComponent('Statistic').setHealth(1);
    },

    S3_option_1() { // +正义值，自信值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S3_option_2() { // +健康值，自信值 
        consistNode.getComponent('Statistic').setHealth(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S3_option_3() { // +勇气值，自信值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S4_option_1() { // +勇气值，自信值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S4_option_2() { // +正义值
        consistNode.getComponent('Statistic').setJustice(1);
    },

    S4_option_3() { // +健康值
        consistNode.getComponent('Statistic').setHealth(1);
    },

    S5_option_1() { // +勇气值，自信值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S5_option_2() { // +正义值，自信值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S5_option_3() { // +正义值
        consistNode.getComponent('Statistic').setJustice(1);
    },

    S6_option_1() { // +正义值，勇气值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setBravery(1);
    },

    S6_option_2() { // +健康值，勇气值，自信值
        consistNode.getComponent('Statistic').setHealth(1);
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S6_option_3() { // +正义值，自信值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S7_option_1() { // +正义值，健康值
        consistNode.getComponent('Statistic').setJustice(1);
        consistNode.getComponent('Statistic').setHealth(1);
    },

    S7_option_2() { // +健康值，勇气值，自信值
        consistNode.getComponent('Statistic').setHealth(1);
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setConfidence(1);
    },

    S7_option_3() { // +勇气值，正义值
        consistNode.getComponent('Statistic').setBravery(1);
        consistNode.getComponent('Statistic').setJustice(1);
    },

    // update (dt) {},
});
