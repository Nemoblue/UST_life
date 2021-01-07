// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        birthResult: {
            default: null,
            type: cc.Lable
        },

        consistNode: {
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        consistNode = cc.director.getScene().getChildByName('consistNode'); // 常驻节点接口

        this.birthResult = cc.find('birthResult', this.node);
        this.birthResult.getComponent(cc.Label).string = this.setBirth();
    },

    // 设定出生（使用随机数）
    setBirth() {
        let random = Math.round(Math.random() * 100);   // 随机生成0~100的整数
        label = '随机数生成：' + random;
        if(random >= 0 && random < 20){  // 普通家庭
            label += '\n普通家庭\n爸妈都是普通打工人，但幽默的爸爸\n和厨艺超赞的妈妈总让你感到内心富足';
        } else if (random >= 20 && random < 55){    // 中产家庭
            label += '\n中产家庭\n爸妈是普通白领，热爱生活的他们总\n是把有限的资金规划地井井有条，每年\n的旅游都是必不可少的哦';
        } else if (random >= 55 && random < 90){    // 富裕家庭
            label += '\n富裕家庭\n你的爸爸是某创业公司合伙人，经济\n景气下公司赚了不少钱，从小你就养成\n了买东西不看价格的习惯，千金难买\n爷乐意！';
        } else if (random >= 90 && random <= 100){  // 首富家庭
            label += '\n首富家庭\n出身于全国财富top500家庭的你早就\n不知道金钱的概念，你也想像同龄人一\n样明白花钱带来的快乐，哎 ';
        }
        return label;
    },

    // 重新生成
    regenerate() {
        this.birthResult.getComponent(cc.Label).string = this.setBirth();
    },

    start () {

    },

    // update (dt) {},
});
