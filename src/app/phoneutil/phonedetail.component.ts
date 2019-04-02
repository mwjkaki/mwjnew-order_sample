// Angular 2のコンポーネント参照
import { Component, Input } from "@angular/core";
// Phoneクラスの参照
import { Phone } from "./phone";

// コンポーネントのメタデータ定義
@Component({
  selector: "phone-detail",
  styles: ["div.component { background:#ffd5d5}"],
  template: `
  <div class="component" *ngIf="phone">
    <h4>【PhoneDetailComponent： 詳細表示】</h4>
    <ul>
      <li>名前： {{phone.name}}</li>
      <li>会社： {{phone.vendor}}</li>
      <li>発売： {{phone.delivery}}</li>
    </ul>
  `
})

// コンポーネントクラス定義
export class PhoneDetailComponent {
  // phone-detailディレクティブの「phone」属性でPhoneオブジェクトを指定する記述
  @Input("phone") phone: Phone;
//@Input() phone:Phone; // 省略形
}