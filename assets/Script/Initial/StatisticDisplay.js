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

        consistNode: {
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // 展示获得的属性值
    onLoad () {
        consistNode = cc.director.getScene().getChildByName('consistNode'); // 常驻节点接口
        
        this.statisticResult = cc.find("statistic", this.node);
        this.statisticResult.getComponent(cc.Label).string = this.setString();
    },

    // 需根据转换方程调整输出字符串
    setString() {
        let str = "勇气值：" + consistNode.getComponent('Statistic').getStatistic(0) + '\t';
        str += "健康值：" + consistNode.getComponent('Statistic').getStatistic(1) + '\n';
        str += "正义值：" + consistNode.getComponent('Statistic').getStatistic(2) + '\t';
        str += "自信值：" + consistNode.getComponent('Statistic').getStatistic(3);
        return str;
    },

    start () {

    },

    // update (dt) {},
});
