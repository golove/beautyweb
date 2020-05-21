import Category from "./CateEnum";

class ArticleData {
  id!: number;
  categoryId!: Category;
  content!: object;
  createTime!: string;
  archive!: boolean;
  author!: object;
  like!: Array<any>;
  collect!: Array<any>;
  reply!: Array<any>;
  see!: number;
  remove!: boolean;

  constructor(
    id = -1,
    categoryId: Category = -1,
    author: object = {},
    content: object = {},
    archive = false,
    remove = false,
    see = 0,
    reply: Array<any> = [],
    collect: Array<any> = [],
    like: Array<any> = []
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.author = author;
    this.content = content;
    this.archive = archive;
    this.createTime = this.timeToString(Date.now());
    this.see = see;
    this.remove = remove;
    this.reply = reply;
    this.collect = collect;
    this.like = like;
  }
  timeToString(time: number): string {
    //将时间戳转换成时间对象
    const T = new Date(time);
    //将时间对象使用getXXX方法一次获取年月日时分秒;然后拼接成想要的格式
    const timeStr = `${T.getFullYear()}-${T.getMonth() +
      1}-${T.getDate()} ${T.getHours()}:${T.getMinutes()}`;
    return timeStr;
  }
}

export default ArticleData;
