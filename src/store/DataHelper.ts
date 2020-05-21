import ArticleData from "@/model/ArticleData";
import makeAjax from "./makeAjax";

class DataHelper {
  dataKey: string;
  primaryKey: string;
  article: Array<object>;
  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey;
    this.primaryKey = primaryKey;
    this.article = makeAjax({ url: "article", data: {} })
  }

  // makeAjax()
  //       .then((res: object) => {

  //         this.article = res.data;
  //         console.log(this.article)
  //       })
  //       .catch((err: any) => {
  //         console.log(err);
  //       })

  read(): Array<object> {
    console.log(this.article)
    if (this.article === undefined) {
      // 根据dataKey读取本地数据
      const arrstr: string | null = localStorage.getItem(this.dataKey);
      // 将读取的json数组字符串转换成数组对象

      if (arrstr !== null) {
        this.article = JSON.parse(arrstr);
        return this.article;
      }
    }
    // 将数组对象返回
    return this.article;
  }

  save(arr: Array<object>): void {
    // 将数组对象转换成json数组字符串
    const str: string = JSON.stringify(arr);
    // 将转换成json数组字符串存入localStoage中
    localStorage.setItem(this.dataKey, str);
  }

  add(conStr: ArticleData): number {
    // 1.读取本地现有数据
    const arr: any = this.read();
    // 2.创建一个文章对象,并设置相应属性
    const obj: object = {
      author: conStr.author,
      see: conStr.see,
      remove: conStr.remove,
      reply: conStr.reply,
      collect: conStr.collect,
      like: conStr.like,
      categoryId: conStr.categoryId,
      content: conStr.content,
      createTime: conStr.createTime,
      archive: conStr.archive,
      [this.primaryKey]:
        arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1
    };
    // 3.自动生成主键
    const newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
    // obj[this.primaryKey] = newId;
    // 4.将生成了主建的评论对象追加到数组中
    arr.push(obj);

    axios.post("http://localhost:9600/" + "article/insert", obj);
    this.save(arr);

    return newId;
  }

  remove(id: number | string): boolean {
    const arr: any = this.read();

    const index = arr.findIndex((e: any) => {
      return e[this.primaryKey] == id;
    });
    if (index > -1) {
      arr.splice(index, 1);
      this.save(arr);
      return true;
    }
    return false;
  }
}

export default DataHelper;
