// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
    将课程的数据存储在 CourseData.json文件中，读取文件信息并显示
*/

cc.Class({
    extends: cc.Component,

    properties: {
        courseData: {
            default: null,
            type: cc.JsonAsset,
        },

        consistNode: {
            default: null,
            type: cc.Label,
        },
        
        //保存当前学期可以选择的课程
        courseList: [],

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

    onLoad () {
        this.generateCourseList();
    },

    start () {

    },
    // 生成可选课程列表，调取courseData.json 目前为简化版，后期会加入筛选条件
    generateCourseList(){
        var json = this.courseData.json;
        for(let i in json.Major){
            for(let j in json.Major[i]){
                this.courseList.push(j);
            }
        }
    },

    // update (dt) {},
});
