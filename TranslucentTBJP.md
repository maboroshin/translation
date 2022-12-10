# 文書の情報
- 翻訳者 (translater): maboroshin (https://pc.genkaku.in/)
- ライセンス (License): 元のソフトと同様に GPL v3 に従います。
- 元の文書 (Original document): https://github.com/TranslucentTB/TranslucentTB/blob/master/README.md
- 元の文書の日時 (Original date): 2022年11月27日: Commits on  Nov 27, 2022
- 2022年のバージョン用の説明書。（2021年11月に多言語化を実装、気付いて2022年4月に私が日本語化、12月にバージョンアップで公開）

# TranslucentTB 説明書の日本語訳

[![Total downloads](https://img.shields.io/github/downloads/TranslucentTB/TranslucentTB/total.svg)](https://github.com/TranslucentTB/TranslucentTB/releases)<!--Deleted in original-->
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/TranslucentTB.svg)](https://liberapay.com/TranslucentTB/)
[![Join on Discord](https://discordapp.com/api/guilds/304387206552879116/widget.png?style=shield)][Discord]
[![Build Status](https://dev.azure.com/sylve0n/TranslucentTB/_apis/build/status/TranslucentTB.TranslucentTB?branchName=develop)](https://dev.azure.com/sylve0n/TranslucentTB/_build/latest?definitionId=4&branchName=develop)
[![CodeFactor](https://www.codefactor.io/repository/github/translucenttb/translucenttb/badge/develop)](https://www.codefactor.io/repository/github/translucenttb/translucenttb/overview/develop)

![Microsoft Store App Awards 2022 - Community Choice Award: Open Platform (runner up)](https://user-images.githubusercontent.com/6440374/180880766-4380b2cf-4d9e-4d07-8986-a9b34cb6244a.png#gh-dark-mode-only)![Microsoft Store App Awards 2022 - Community Choice Award: Open Platform (runner up)](https://user-images.githubusercontent.com/6440374/180880839-355c472c-0b7a-4aae-88e5-0234001cb281.png#gh-light-mode-only)

Windows のタスクバーを透明/半透明にする軽快なソフトです（数MBのメモリで動作し、CPUもほとんど使いません）。Windows10、Windows 11 用です。

サンプル画像は以下です。このようにカスタマイズできます。

![blur](https://i.imgur.com/r4ZJjnL.png) ![transparent](https://i.imgur.com/eLGTtwp.png) ![acrylic](https://i.imgur.com/M15IPJW.png)

## 特徴

- 先進的な**カラーピッカー**は、タスクバーの色を変更するために、アルファ(透過)と即時プレビューに対応しています。
- **タスクバーの状態** (いずれかが選択できます。通常以外は、どれも色を変更できます):
  - **通常** (Normal): 通常のウィンドウのスタイルです。 (TranslucentTB を使っていないのと同じ)
  - **不透明** (Opaque): 色つきタスクバーで、透明化はなし。
  - **透明** (Clear): 色つきタスクバー（訳注: 透明度100%も可能）
  - **透かし** (Blur): タスクバーを少しぼかします。Windows 10 と Windows 11 build 22000 のみ。
  - **アクリル** (Acrylic): タスクバーの見た目を、Microsoftの フルーエント (Fluent) デザインのガイドラインに準拠した感じにします。（訳注:2020年以前の選択名 フルーエント）
- **動的**モード (併用できます。訳注: つまりタスクバーの状態を固定せず状態に応じて自動で変更させる):
  - **ウインドウ表示**: デスクトップ上でウィンドウを開いているなら、タスクバーを変更します。
  - **ウインドウ最大化**: 何らかのウィンドウが最大化 (Maximise) されたら、タスクバーを変更します。
  - **スタートを開いたら**: スタートメニューを開いたとき (Start opened) に、タスクバーを変更します。
  - **検索を開いたら**: 検索メニュー（以前はCortana）を開いたら、タスクバーを変更します。
  - **タスクビューを開いたら**: タスクビュー（以前はタイムライン）を開いたら、タスクバーを変更します。
- Windows 10では、その時有効な動的な状態によって Aero Peek ボタンを表示/非表示にする機能を追加。
- Windows 11では、その時有効な動的な状態によって、タスクバー用の線を表示/非表示にする機能を追加。
- [RoundedTB](https://github.com/torchgm/RoundedTB) に互換！
- [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher) に互換！

## スクリーンショット

<img src="https://i.imgur.com/QbG7KQA.png" alt="windows 11 アクリル" width="243"> <img src="https://i.imgur.com/zabZ52s.png" alt="windows 11 透明" width="243">

![windows 10 アクリル](https://i.imgur.com/M15IPJW.png) ![windows 10 透明](https://i.imgur.com/eLGTtwp.png) ![windows 10 透かし](https://i.imgur.com/r4ZJjnL.png)

## ダウンロード
[<img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Get it from Microsoft" height="104">](https://apps.microsoft.com/store/detail/9PF4KZ2VN4W9)

本プログラムは、[Microsoft Store](https://www.microsoft.com/store/apps/9PF4KZ2VN4W9) から自由にダウンロードでき、ここから入手することで自動更新され便利です。

代わりに、`TranslucentTB.appinstaller` を [GitHubの releases](https://github.com/TranslucentTB/TranslucentTB/releases) からダウンとロードしインストールすることもできます。

ポータブル版の `TranslucentTB.zip` も [GitHubの releases](https://github.com/TranslucentTB/TranslucentTB/releases) から入手できますが、Windows 11 でのみ動作します。

また、これまでのようにダウンロードしたければ、[Git の Releases](https://github.com/TranslucentTB/TranslucentTB/releases) からダウンロードできます。

最新のテスト段階のビルドをお望みならば、[Azure Pipelines のページ](https://dev.azure.com/sylve0n/TranslucentTB/_build?definitionId=4) から入手できます。これらのビルドには、動作しないか、部分的に完成した機能が含まれていることがあります。自己責任で使用してください。

## OSのスタートアップに追加

OS の起動時に TranslucentTB を起動するには、TranslucentTB のトレイアイコンの右クリックメニューから、「起動時に実行」(Open at boot) にチェックを入れてください。灰色になっていて有効化できない場合、あなたの所属機関によって無効化されています。

ポータブル版では、`%AppData%\Microsoft\Windows\Start Menu\Programs\Startup` に、実行ファイルへのショートカットを作成することでスタートアップに追加できます。

## 寄付と貢献者

[Liberapayを用意しています](https://liberapay.com/TranslucentTB/)。TranslucentTB を大切だと感じ私たちの開発をサポートしてくださるなら、寄付を歓迎しています。

ソースコードに貢献したい場合、[貢献の手引き](CONTRIBUTING.md)があります。

## セキュリティ

過剰に敏感な一部のウイルス対策ソフトは、悪意のあるプログラムだと目くじらを立てるかもしれません。しかしそうではありません！1000万人以上の利用者が安全にダウンロードしています。ソースコードは公開されており、[自分でコンパイル](https://github.com/TranslucentTB/TranslucentTB/blob/release/CONTRIBUTING.md#building-from-source)して動作させることもできます。セキュリティ面の審査も歓迎します。

## 謝辞

TranslucentTB は大勢の人々の取り組みによる産物です！:

- [@ethanhs](https://github.com/ethanhs),
- [@sylveon](https://github.com/sylveon),
- [@MrAksel](https://github.com/MrAksel),
- [@denosawr](https://github.com/denosawr),
- 最後になりますが、[ほかのすべての貢献者の方々も](https://github.com/TranslucentTB/TranslucentTB/graphs/contributors)!

アイコン作成者の[@dAKirby309](https://github.com/dAKirby309)に感謝！[彼のDeviantArt内のプロフィール](https://www.deviantart.com/dakirby309)から、彼のすべての作品が見れます。

### ライセンス

このプログラムは、GPL v3 のライセンスのフリーなソフトウェアです。詳細は [ライセンスのファイル](https://github.com/TranslucentTB/TranslucentTB/blob/release/LICENSE.md) をご確認ください。

[Discord]: https://discord.gg/TranslucentTB

# TranslucentTB 日本語化してコンパイル時のメモ
- SDK 10.0.22543 が Windows11なので使えない。未確認。
- git bash に SSH など登録
- Visual Studio 2022 Community インストール
- TranslucentTB は release ではなく develop を clone
~~~
git clone -b develop git@github.com:maboroshin/TranslucentTB.git
~~~

- git bash では、vcpkg などは円記号 \\ ではなく、スラッシュ/ に置換して使う。また、現在のフォルダのファイルを実行する場合、起点を表す ./ を用いる。
~~~
git clone https://github.com/Microsoft/vcpkg.git
./vcpkg/bootstrap-vcpkg.bat
./vcpkg/vcpkg install --overlay-triplets=TranslucentTB/vcpkg/triplets --triplet x64-windows-ttb --overlay-ports=TranslucentTB/vcpkg/ports --head detours gtest member-thunk rapidjson spdlog wil
./vcpkg/vcpkg integrate install
~~~
