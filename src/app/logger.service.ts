// サービスを指定するためのデコレーター ...（1）
import { Injectable } from "@angular/core";

// ログ出力を行うクラス ...（2）
@Injectable()
export class Logger {

  // デバッグログ出力（Android風）...（3）
  d(tag: any, msg: any) {
    console.debug("【" + tag + "】: " + msg);
  }
}