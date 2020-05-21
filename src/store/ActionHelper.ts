import DataHelper from "./DataHelper";
import ArticleData from "@/model/ArticleData";
import Category from "@/model/CateEnum";

class ActionHelper {
  // 1.负责数据处理
  dataHelper: DataHelper = new DataHelper("articles", "id");
  articles: Array<ArticleData>;
  // 2/负责业务处理

  constructor() {
    // 读取本地数据保存到articles中
    this.articles = this.readData();
  }

  readData(): Array<ArticleData> {
    const arrObj: Array<object> = this.dataHelper.read();

    // let arrs!: Array<ArticleData>;

    // 将Obj数组转换成ArticleData数组;
    const arr = arrObj.map((e: any) => {
      const item: ArticleData = new ArticleData();
      item.id = e.id;
      item.see = e.see;
      item.remove = e.remove;
      item.reply = e.reply;
      item.collect = e.collect;
      item.like = e.like;
      item.categoryId = e.categoryId;
      item.author = e.author;
      item.createTime = e.createTime;
      item.content = e.content;
      item.archive = e.archive;
      return item;
    });
    return arr;
  }

  // 3.新增笔记
  addData(item: ArticleData): number {
    this.articles.push(item);
    item.id = this.dataHelper.add(item);
    return item.id;
  }
  // 4.修改笔记
  editData(item: ArticleData): void {
    const editItem: ArticleData | undefined = this.articles.find((e: any) => {
      return item.id == e.id;
    });

    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.see = item.see;
      editItem.remove = item.remove;
      editItem.reply = item.reply;
      editItem.collect = item.collect;
      editItem.like = item.like;
      editItem.categoryId = item.categoryId;
      editItem.author = item.author;
      editItem.createTime = item.createTime;
      editItem.content = item.content;
      editItem.archive = item.archive;

      this.dataHelper.save(this.articles);
    }
  }

  //5.删除笔记
  remove(id: number): void {
    const index: number = this.articles.findIndex((e: any) => {
      return e.id === id;
    });

    if (index > -1) {
      this.articles.splice(index, 1);
      this.dataHelper.save(this.articles);
    }
  }

  getCategory(id: Category): string {
    return ["工作", "生活", "学习"][id];
  }
}

export default ActionHelper;
