// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    toBirth() {
        cc.director.loadScene("Birth");
    },

    toStage_1() {
        cc.director.loadScene("Stage_1");
    },

    toStage_2() {
        cc.director.loadScene("Stage_2");
    },

    toStage_3_1() {
        cc.director.loadScene("Stage_3.1");
    },

    toStage_3_2() {
        cc.director.loadScene("Stage_3.2");
    },

    toStage_4() {
        cc.director.loadScene("Stage_4");
    },

    toStage_5() {
        cc.director.loadScene("Stage_5");
    },

    toStage_6() {
        cc.director.loadScene("Stage_6");
    },

    toStage_7() {
        cc.director.loadScene("Stage_7");
    },

    toStage_Final() {
        cc.director.loadScene("Stage_Final");
    },

    toCourse() {
        cc.director.loadScene("Course");
    }
    // update (dt) {},
});
