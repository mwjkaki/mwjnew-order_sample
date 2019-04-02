// コンポーネント、クラスの参照
import { Component, EventEmitter, Output } from "@angular/core";
import { Phone } from "./phone";
// サービスにするクラスの参照 ...（1）
import { Corrector } from "./corrector.service"
import { Logger } from "../logger.service"


// コンポーネントのメタデータ定義
@Component({
  selector: "phone-input",
  styles: ["div.component { background:#d7e3f4}"],
  template: `
  <div class="component">
    <h4>【PhoneInputComponent： 項目追加】</h4>
    <input type="text" placeholder="名前" [(ngModel)]="newPhone.name"><br/>
    <input type="text" placeholder="会社" [(ngModel)]="newPhone.vendor"><br/>
    <input type="text" placeholder="発売" [(ngModel)]="newPhone.delivery"><br/>
    <button (click)="onClick();">追加</button>
  </div>
  `,
   providers:  [ Corrector ] // Correctorクラスをサービスとして登録
})

// コンポーネントクラス定義
export class PhoneInputComponent {
  // 追加するPhoneオブジェクト
  newPhone:Phone = new Phone();
  /**
   * コンストラクター ...（1）
   * 依存性注入でcorrectorとloggerオブジェクトを受け取る
   */
  constructor(
    private corrector:Corrector,
    private logger:Logger) {
  }
  // 追加時に発生させるイベント
  @Output("onSubmitted") onSubmitted = new EventEmitter<Phone>();
//@Output() onSubmitted = new EventEmitter<Phone>(); // 省略形

  /**
   * 追加ボタンクリック時のハンドラ
   */
  onClick() {
      // Correctorサービスで、会社名を修正 ...（2）
    this.newPhone.vendor 
    = this.corrector.correctVendor(this.newPhone.vendor)
    // Loggerサービスで、修正後の会社名をログ出力 ...（3）
    this.logger.d("PhoneInput", this.newPhone.vendor);
    // newPhoneを引数にしてonSubmittedイベント発生
    this.onSubmitted.emit(this.newPhone);
    // newPhoneオブジェクトを再生成
    this.newPhone = new Phone();
  }
}