// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        statisticResult: {
            default: null,
            type: cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // 展示获得的属性值
    onLoad () {
        let consistNode = cc.director.getScene().getChildByName('consistNode');
        this.statisticResult = cc.find("statistic", this.node);
        let str = "最终数值：\n";

        str += "勇气值：" + consistNode.getComponent('Statistic').getStatistic(0) + '\n';
        str += "健康值：" + consistNode.getComponent('Statistic').getStatistic(1) + '\n';
        str += "正义值：" + consistNode.getComponent('Statistic').getStatistic(2) + '\n';
        str += "自信值：" + consistNode.getComponent('Statistic').getStatistic(3);

        this.statisticResult.getComponent(cc.Label).string = str;
    },

    start () {

    },

    // update (dt) {},
});
