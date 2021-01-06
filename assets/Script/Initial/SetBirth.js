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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.birthResult = cc.find('birthResult', this.node);
        this.birthResult.getComponent(cc.Label).string = this.setBirth();
    },

    // 设定出生（使用随机数）
    setBirth() {
        let random = Math.round(Math.random() * 100);   // 随机生成0~100的整数
        label = '随机数生成：' + random;
        if(random >= 0 && random < 20){  // 普通家庭
            label += '\n普通家庭';
        } else if (random >= 20 && random < 55){    // 中产家庭
            label += '\n中产家庭';
        } else if (random >= 55 && random < 90){    // 富裕家庭
            label += '\n富裕家庭';
        } else if (random >= 90 && random <= 100){  // 首富家庭
            label += '\n首富家庭';
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
