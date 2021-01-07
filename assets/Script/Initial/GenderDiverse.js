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

        mateGender: {
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        consistNode = cc.director.getScene().getChildByName('consistNode');
        gender = consistNode.getComponent('Statistic').getStatistic(9);

        this.mateGender = cc.find("mateGender", this.node);
        let str = "";

        if(gender == 1) { // Male
            str = "此时你发现你解救的竟是隔壁班的校草。\n校草：谢谢你！你今天不来救我我都不知道怎么办了，         \n你是隔壁班的吧？以后有什么问题就来找我帮忙吧！ \n然后他留下了一个灿烂的微笑就害羞地跑开了。" 
        } else if(gender == 0){ // Female
            str = "此时你发现你解救的竟是隔壁班的校花。\n校花：呜呜，谢谢你！你今天不来救我我都不知道怎么办了，\n你是隔壁班的吧？以后有什么问题就来找我帮忙吧！ \n然后她留下了一个灿烂的微笑就害羞地跑开了。" 
        }

        this.mateGender.getComponent(cc.Label).string = str;
    },

    start () {

    },

    // update (dt) {},
});
