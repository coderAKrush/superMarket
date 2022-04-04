// 要求生成300*400的图片，图片内容为序号
// 生成的数量以传入的值为准
// 导入mockjs


var Mock = require('mockjs')
// 随机函数
let Random = Mock.Random
// 开始生成数据，设置为一个function，每次调用函数的时候就能随机生成数据
let getPicture = function (n) {
   // 保存图片的数组
   let list = []
   // 循环填充list
   for(let i = 0;i<n;i++) {
     let text = Random.csentence(3,5)
     // 生成单张图片数据，图片大小300*400
     var data = Random.image('300x150', '#38a1db', `所有图片中第${i+1}张内容为${text}`)
     // 放入list
    //  console.log(data)
     list.push(data)
   }
   // 返回list
   return list
}
export default getPicture
