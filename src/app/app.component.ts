import { Component } from "@angular/core";
import { Phone } from "./phoneutil/phone";
import { Logger } from "./logger.service";

@Component({
  selector: "my-app",
  template: `
    <h1>Angular 2 サンプル3</h1>
    <ul>
      <li *ngFor="let phone of phones">
        <!-- 一覧表示にリンクを設定 -->
        <a href="#" (click)='onClick(phone)'>{{phone.name}} ({{phone.vendor}})</a>
      </li>
    </ul>

    <!-- 詳細表示 -->
    <phone-detail [phone]="selectedPhone"></phone-detail>

    <!-- 新規入力 -->
    <phone-input (onSubmitted)="onSubmittedPhoneInput($event)"></phone-input>
  `
})

export class AppComponent {
  // 選択肢
  phones: Phone[] = [
    { "name": "Galaxy S7 Edge", "vendor": "サムスン", "delivery": "2016年5月" },
    { "name": "SAMURAI REI", "vendor": "フリーテル", "delivery": "2016年5月" },
    { "name": "Xperia X Performance", "vendor": "ソニー", "delivery": "2016年6月" },
    { "name": "arrows M03", "vendor": "富士通", "delivery": "2016年7月" }
  ];
  /**
  * コンストラクター ...（1）
  * 依存性注入でloggerオブジェクトを受け取る
  */  
  constructor(private logger: Logger) {
  }
  // 選択されたPhoneオブジェクト
  selectedPhone: Phone;

  /**
   * 選択肢クリック時のイベントハンドラ
   */
  onClick(phone: Phone) {
    // Loggerサービスで、選択されたスマートフォン名をログ出力 ...（2）
    this.logger.d("App", phone.name);
    this.selectedPhone = phone;
  }

  /**
   * PhoneInputComponentのonSubmittedイベントハンドラ
   */
  onSubmittedPhoneInput(phone: Phone) {
    this.phones.push(phone);
  }
}
