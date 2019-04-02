// モジュール参照 ...（1）
import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";

// コンポーネント参照 ...（2）
import { PhoneDetailComponent } from "./phonedetail.component";
import { PhoneInputComponent }  from "./phoneinput.component";

// モジュールのメタデータ定義 ...（3）
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ PhoneDetailComponent, PhoneInputComponent ],
  exports:      [ PhoneDetailComponent, PhoneInputComponent ]
})

// モジュールクラス定義
export class PhoneUtilModule { }