// コンポーネント、クラスの参照
import { Component, EventEmitter, Output } from "@angular/core";
import { Phone } from "./phone";

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
  `
})

// コンポーネントクラス定義
export class PhoneInputComponent {
  // 追加するPhoneオブジェクト
  newPhone:Phone = new Phone();

  // 追加時に発生させるイベント
  @Output("onSubmitted") onSubmitted = new EventEmitter<Phone>();
//@Output() onSubmitted = new EventEmitter<Phone>(); // 省略形

  /**
   * 追加ボタンクリック時のハンドラ
   */
  onClick() {
    // newPhoneを引数にしてonSubmittedイベント発生
    this.onSubmitted.emit(this.newPhone);
    // newPhoneオブジェクトを再生成
    this.newPhone = new Phone();
  }
}