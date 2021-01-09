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
        // gay = "?"


        // 这些是四种先天属性： 勇气值， 健康值，正义值 ，自信值
        // 随场景保留属性值
        // 可以转换成后天属性
        bravery: 0,
        health: 0,
        justice: 0,
        confidence: 0,

        // 回合数
        round: 0,
        // 上过的课及其成绩，以courseTaken作为obj保存，每门课新增属性，增加分数（课程id：letter)
        courseTaken: {
            default: null
        },
        // 专业: 新入学的是 'fresh', 日后根据专业变更
        major: "fresh",
        // doubleMajor: "null",
        // 绩点
        cga: 0,
        // 总学分
        credit: 0
        
        
    },

    // 获取属性 0:bravery 1:health 2:justice 3:confidence 9:gender
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

    //获取当前回合数
    getround(){
        return this.round;
    },
    // 获取绩点
    getCGA() {
        return this.cga;
    },
    // 获取已经上的课和绩点
    getCourseTaken() {
        return this.courseTaken;
    },
    // 获取专业
    getMajor() {
        return this.major;
    },

    getCredit(){
        return this.credit;
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

    //集成方法，根据属性名增减数值
    setPropertiesByName(name, num) {

    },

    //集成方法，根据属性id增减数值
    setPropertiesById(id, num){
        switch(id) {
            case 0: this.bravery += num; break;
            case 1: this.health += num; break;
            case 2: this.justice += num; break;
            case 3: this.confidence += num; break;
            default: 0;
        }
    },

    // 将属性转换成后天属性
    setPostStatistic(){

    },

    // update (dt) {},
});
