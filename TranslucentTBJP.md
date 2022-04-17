# 文書の情報
- 翻訳者 (translater): maboroshin (https://pc.genkaku.in/)
- ライセンス (License): 元のソフトと同様に GPL v3 に従います。
- 元の文書 (Original document): https://github.com/TranslucentTB/TranslucentTB/blob/master/README.md
- 元の文書の日時 (Original date): 2022年2月23日: [Commits on Feb 23, 2022](https://github.com/TranslucentTB/TranslucentTB/commits/release/README.md)
- ソフトウェア本体では、[2022年4月に私が日本語化を追加済みでバージョンアップ公開待ち](https://github.com/TranslucentTB/TranslucentTB/pull/592) (2021年11月に多言語化したので)

# TranslucentTB 説明書の日本語訳

[![Liberapay patrons](https://img.shields.io/liberapay/patrons/TranslucentTB.svg)](https://liberapay.com/TranslucentTB/)
[![Join on Discord](https://discordapp.com/api/guilds/304387206552879116/widget.png?style=shield)][Discord]
[![Join on Gitter](https://badges.gitter.im/TranslucentTB/Lobby.svg)][Gitter]
[![Total downloads](https://img.shields.io/github/downloads/TranslucentTB/TranslucentTB/total.svg)](https://github.com/TranslucentTB/TranslucentTB/releases)
[![Build Status](https://dev.azure.com/sylve0n/TranslucentTB/_apis/build/status/TranslucentTB.TranslucentTB?branchName=develop)](https://dev.azure.com/sylve0n/TranslucentTB/_build/latest?definitionId=4&branchName=develop)
[![CodeFactor](https://www.codefactor.io/repository/github/translucenttb/translucenttb/badge/develop)](https://www.codefactor.io/repository/github/translucenttb/translucenttb/overview/develop)

> [**マルウェアの疑いについて**、権限使用に関する説明(英語)](https://github.com/TranslucentTB/TranslucentTB/issues/350) (訳注: Windows Store によくある警告表示が拡大解釈されているだけとのこと)

Windows のタスクバーを透明/半透明にする軽快なソフトです（数MBのメモリで動作し、CPUもほとんど使いません）。Windows10用です（訳注: 更新履歴では Windows 11 用に更新されている）。

サンプル画像は以下です。このようにカスタマイズできます。

![blur](https://i.imgur.com/r4ZJjnL.png) ![transparent](https://i.imgur.com/eLGTtwp.png) ![acrylic](https://i.imgur.com/M15IPJW.png)

## 特徴

- 先進的な**カラーピッカー**は、タスクバーの色を変更するために、アルファ(透過)と即時プレビューに対応しています。
- **タスクバーの状態** (いずれかが選択できます。標準以外は、どれも色を変更できます):
  - **標準** (Normal): 通常のウィンドウのスタイルです。 (TranslucentTB を使っていないのと同じ)
  - **不透明** (Opaque): 色つきタスクバーで、透明化はなし。
  - **透明** (Clear): 色つきタスクバー（訳注: 透明度100%も可能）
  - **透かし** (Blur): タスクバーを少しぼかします。
  - **アクリル風** (Acrylic): タスクバーの見た目を、Microsoftの フルーエント(Fluent)デザインのガイドライン風に準拠した感じにします。（訳注:2020年以前の選択名 フルーエント）
- **動的**モード (併用できます。訳注: つまりタスクバーの状態を固定せず状態に応じて自動で変更させる):
  - **動的・ウインドウ**: 何らかのウィンドウが表示(Visible)または最大化(Maximise)されたら、タスクバーを変更します。
  - **動的・スタート・メニュー**: スタートメニューを開いたとき(Start opened)に変更します。
  - **動的・Cortana**: Cortana (無効になっていれば検索の)使用時(Search opened)に変更します。
  - **動的・タイムライン**: タイムラインを開いている時(Time View opened)に変更します。
- **Aero Peek ボタン** の表示/非表示では、 有効化した動的モードによって表示されます。(訳注: タスクバーの右端に出る、デスクトップを表示するボタン)
- [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher) に互換性あり！

ここで動作の説明を見ることができます。 [短い動画](https://gfycat.com/TidyFelineCrownofthornsstarfish)・[長い動画](https://gfycat.com/ConsciousCriminalDassie)

## ダウンロード

本プログラムは、[Microsoft Store](https://www.microsoft.com/store/apps/9PF4KZ2VN4W9) から自由にダウンロードでき、ここから入手することで自動更新や設定の同期といった利点があります。

また、これまでのようにダウンロードしたければ、[Git の Releases](https://github.com/TranslucentTB/TranslucentTB/releases) からダウンロードできます。

最新のテスト段階のビルドをお望みならば、[Azure Pipelines のページ](https://dev.azure.com/sylve0n/TranslucentTB/_build?definitionId=4) から入手できます。これらのビルドには、動作しないか、部分的に完成した機能が含まれていることがあります。自己責任で使用してください。

## OSのスタートアップに追加

OS の起動時に TranslucentTB を起動するには、TranslucentTB のトレイアイコンの右クリックメニューから、Open at boot にチェックを入れてください。灰色になっていて有効化できない場合、あなたの所属機関によって無効化されています。

## 寄付

[Liberapayを用意しています](https://liberapay.com/TranslucentTB/)。TranslucentTB を大切だと感じ私たちの開発をサポートしてくださるなら、寄付を歓迎しています。

## セキュリティ

過剰に敏感な一部のウイルス対策ソフトは、悪意のあるプログラムだと目くじらを立てるかもしれません。しかしそうではありません！200万人以上の利用者が安全にダウンロードしています。ソースコードは公開されており、[自分でコンパイル](https://github.com/TranslucentTB/TranslucentTB/blob/release/CONTRIBUTING.md#building-from-source)して動作させることもできます。セキュリティ面の審査も歓迎します。

## 謝辞

TranslucentTB は大勢の人々の取り組みによる産物です！:

- [@ethanhs](https://github.com/ethanhs),
- [@sylveon](https://github.com/sylveon),
- [@MrAksel](https://github.com/MrAksel),
- [@denosawr](https://github.com/denosawr),
- [@PFCKrutonium](https://github.com/PFCKrutonium),
- 最後になりますが、[ほかのすべての貢献者の方々も](https://github.com/TranslucentTB/TranslucentTB/graphs/contributors)!

アイコン作成者の[@dAKirby309](https://github.com/dAKirby309)に感謝！[彼のDeviantArt内のプロフィール](https://www.deviantart.com/dakirby309)から、彼のすべての作品が見れます。

### 類似ソフト

タスクバーを変更する以上のものを探している場合、いくつかのプログラムがあります。

- [TaskbarX](https://github.com/ChrisAnd1998/TaskbarX) もタスクバーの見た目を変更しますが、TranslucentTB の動的モードはありません。
- [Taskbar Tools](https://github.com/Elestriel/TaskbarTools) C# で書かれた同様のプログラムです。しかし開発停止しているようです。
 
StartIsBack や Start10、今では機能していない Classic Shell などのソフトで、同様の透明化の機能を見たことがあるかもしれません。これらは素晴らしいソフトですが、スタートを置き換える機能は私には不要でした。そこで私は TranslucentTB を作りました。また TranslucentTB では、それらのソフトにはない動的変更の機能によって、よりタスクバーをカスタマイズできます。ディスク容量とメモリへの影響も少ないです。

### ライセンス

このプログラムは、GPL v3 のライセンスのフリーなソフトウェアです。詳細は [ライセンス](https://github.com/TranslucentTB/TranslucentTB/blob/release/LICENSE.md) ファイルをご確認ください。

[Discord]: https://discord.gg/TranslucentTB
[Gitter]: https://gitter.im/TranslucentTB/L


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
