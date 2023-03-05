# 本リポジトリに関して
自由に改変してご使用ください。
不具合などがあれば教えていただきたいです！
可能でしたら、issuesを立てて頂いたら対応やコメントさせていただきます。

随時改変していきますので、おかしい部分や変更した方が良い部分があれば
教えていただければ幸いです。。

参考にさせていただいたサイトの運営者の方ありがとうございました。


## 本コーディングフォーマットの利用用途
* 静的なページのコーディング
* LPのコーディング
* 動的処理が含まないページ

<hr>

### 事前準備
| インストールするもの |バージョン| 参考サイト |
| ------------------ | :----------------------------: | :------------------------- |
| n（node/npm）<br>| 18.0.0 | https://cly7796.net/blog/other/try-using-n/


#### 各バージョン
webpack5
npm 8.8.0
node.js v18.1.0
Homebrew 3.4.11

<hr>

### 手順
1.プロジェクトフォルダをvs codeで開く

2.ターミナル or vs codeのターミナルでnpm install でパッケージのインストール
```
$ npm install
```

3.srcのディレクトリを開く
ディレクトリ構造
※TOPとcompanyの場合の例

>
>root/
>　├ pages/
>　│　└ index.html　＝　TOPページ
>　│　└ company　＝　例）会社概要のディレクトリ
>　│　　　　└ index.html
>　│　　　　└ access.html
>　├ img/
>　│　└ index/
>　│　│　└mv.png
>　│　└ company/
>　│　　　　└mv.png
>　│　　　　└access_map.png
>　├ js/
>　│ └ lib/
>　│ │ └ slick.js
>　│ └ common.js
>　│ └ top.js
>　└ scss/
>　  　└ common.scss　＝　共通部分(ヘッダー・フッターなどなど)
>　  　│　└ reset.css　＝　リセットCSS
>　  　│ 　└ _variable.scss　＝　共通部分(ヘッダー・フッターなどなど)
>　  　└ index.scss　＝　TOPページのみ
>　  　└ company.scss　＝　例）会社概要
>　  　└ lib/
>　　 　└ swiper-bundle.min.css

<hr>

### 外部のライブラリを使用する場合
外部のライブラリを使用する場合は、
例）swiperを追加する場合
webpack.config.jsの「CopyPlugin」の設定に記述を追加


<hr>

### ビルド方法
プロジェクトのフォルダごとvscodeでファイルを開く。
ターミナル or vscode上でターミナルを開く。

ビルド
```
$ npx webpack
```
<br>
ファイルを監視
```
$ npx webpack --watch
$ npx webpack serve --hot
```
<br>
ローカルサーバ起動
```
$ npx webpack serve --open
```

ビルドすることでdistのディレクトリ内にファイルが自動生成されます。

### 本番公開時
webpack.config.jsの module.exports の　mode を
productionに変更してビルドしてください。

<hr>

### scssファイルのインクルード
各ファイルのscssのインクルードは下記の構成になっております。
ディレクトリ内にある_innit.scssにまとめております。

<hr>

### CSSコード制約
.stylelintrcにCSSの記述を制約
* block-no-empty：空のブロックを禁止
* at-rule-no-unknown：不明なアットルールを禁止
* scss/at-rule-no-unknown：SCSSでの不要なアットルールを禁止
* indentation：半角スペース 4個
* color-no-invalid-hex：無効な16進数の色指定を禁止
* font-family-no-duplicate-names：font-familyの重複を禁止
* font-family-no-missing-generic-family-keyword：総称フォント名が指定されていないとエラー

参考：https://iwb.jp/css-stylelint-vscode-settings-rules/

単位に関しては、"unit-allowed-list": ["rem", "%", "vh", "px"],　で設定されているもののみ許可されております。
こちら以外にも単位として入力が必要な場合は、指定してください。

フォントサイズは、declaration-property-unit-allowed-list　で指定したものが許可されそれ以外は許可しないようにしております。

<hr>

### JSコード検証
.eslintrc.jsonにJavaScriptの検証設定をしております。

<hr>

### コード整形設定
.prettierrcにコードの整形設定を記述しております。

参考：https://www.mitomex.blog/prettier-options/

<hr>

### 参考サイト
参考サイトで記載させていただきましたサイト運営者の方ありがとうございます。

https://webdrawer.net/tools/webpack.html
https://haniwaman.com/webpack-sass/#index_id26
https://github.com/webdrawer-kashu/webpack
https://qiita.com/takeshisakuma/items/e1ba5dbe052c6194bb79
https://brainlog.jp/programming/css/post-2498/
https://github.com/takeshisakuma/webpack_for_webdesign
https://chaika.hatenablog.com/entry/2020/11/23/083000