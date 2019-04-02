// InjectableデコレーターとLoggerサービスクラスの参照 ...（1）
import { Injectable } from "@angular/core";
import { Logger } from "../logger.service";

// 会社名の修正を行うサービス ...（2）
@Injectable()
export class Corrector {
  // 修正に用いる会社名の対照表 ...（3）
  private vendorCorrectionList = {
    "アスース": "エイスース",
    "エイサス": "エイスース",
    "サムソン": "サムスン"
  };

  // コンストラクター ...（4）
  constructor(private logger:Logger) {
  }

  // 会社名の誤記を修正 ...（5）
  correctVendor(vendor: any) {
    // ログ出力 ...（6）
    this.logger.d("Corrector", "vendor= " + vendor);
    // 対照表を検索
    var convertedVendor:any = this.vendorCorrectionList[vendor];
    // 対照表に存在しなければ入力された会社名をそのまま設定
    if (!convertedVendor) {
      convertedVendor = vendor;
    }
    // 会社名を返却
    return convertedVendor;
  }
}