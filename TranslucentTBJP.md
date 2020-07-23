# 文書の情報
- 翻訳者 (translater): maboroshin (https://pc.genkaku.in/)
- ライセンス (License): 元のソフトと同様に GPL v3 に従います。
- 元の文書 (Original document): https://github.com/TranslucentTB/TranslucentTB/blob/master/README.md

# TranslucentTB 説明書の日本語訳

[![Build status](https://ci.appveyor.com/api/projects/status/9yym3vr6s5gc7vk3/branch/release?svg=true)](https://ci.appveyor.com/project/sylveon/translucenttb/branch/release)
[![Join on Discord](https://img.shields.io/discord/304387206552879116.svg)][Discord]
[![Join on Gitter](https://badges.gitter.im/TranslucentTB/Lobby.svg)][Gitter]
[![Total downloads](https://img.shields.io/github/downloads/TranslucentTB/TranslucentTB/total.svg)](https://github.com/TranslucentTB/TranslucentTB/releases)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/TranslucentTB.svg)](https://liberapay.com/TranslucentTB/)

Windows のタスクバーを透明/半透明にする軽快なソフトです（数MBのメモリで動作し、CPUもほとんど使いません）。Windows10専用です。

サンプル画像は以下です。あなたもこのようにカスタマイズできます。

![blur](https://i.imgur.com/r4ZJjnL.png) ![transparent](https://i.imgur.com/eLGTtwp.png) ![acrylic](https://i.imgur.com/M15IPJW.png)

## 特徴

- 先進的な**カラーピッカー**は、タスクバーの色を変更するために、alpha と即時のプレビューに対応しています。
- **タスクバーの状態** (いずれかが選択できます。標準以外は、どれも色を変更できます):
  - **透かし** (Blur): タスクバーを少しぼかします。
  - **透明** (Clear): タスクバーを透明にします。
  - **標準** (Normal): 通常のウィンドウのスタイルです。 (TranslucentTB を使っていないのと同じ)
  - **不透明** (Opaque): 不透明にします。
  - **フルーエント** (Fluent): 2018年4月の Windows 10 更新プログラム以降でのみ。マイクロソフトが提唱しているフルーエントデザイン風の見栄えになります。
- **動的**モード (Dynamic、ダイナミック) (併用できます):
  - **ダイナミック・ウインドウ**: 何らかのウィンドウが最大化されたら、タスクバーを変更します。
  - **ダイナミック・スタート・メニュー**: スタートメニューを開いたときに変更します。
  - **ダイナミック・Cortana**: Cortana (無効になっていれば検索)使用時に変更します。
  - **ダイナミック・タイムライン/ Task View**: タイムラインを開いている時に変更します。
- **Aero Peek** を表示/非表示では、 **お好み** あるいは **動的** にカスタマイズできます。

ここで動作の説明を見ることができます。 [短い動画](https://gfycat.com/TidyFelineCrownofthornsstarfish)・[長い動画](https://gfycat.com/ConsciousCriminalDassie)

## ダウンロード

本プログラムは、[Microsoft Store](https://www.microsoft.com/store/apps/9PF4KZ2VN4W9) から自由にダウンロードでき、ここから入手することで自動更新や設定の同期といった利点があります。

また、これまでのようにダウンロードしたければ、[Git の Releases](https://github.com/TranslucentTB/TranslucentTB/releases) からダウンロードできます。

最新のテスト段階のビルドをお望みならば、[AppVeyor page](https://ci.appveyor.com/project/sylveon/translucenttb) (`Configuration: Release` > `Artifacts` > `TranslucentTB-setup.exe`) で入手できます。これらのビルドは動作しないか、部分的に完成した機能が含まれているでしょう。自己責任で使用してください。

## OSのスタートアップに追加

OS の起動時に TranslucentTB を起動するには、TranslucentTB のトレイアイコンの右クリックメニューから、Open at boot をチェックしてください。灰色になって反応しない場合、タスクマネージャーかあなたの所属機関によって無効化されています。

## 寄付

[私たちは自由主義の報酬制です](https://liberapay.com/TranslucentTB/)。TranslucentTB を大切だと感じ、私たちの開発をサポートしてくださるなら、寄付を歓迎しています。

## セキュリティ

過剰に敏感な一部のウイルス対策ソフトは、悪意のあるプログラムだと目くじらを立てるかもしれません。しかしそうではありません！20万人以上の利用者が安全にダウンロードしています。ソースコードは公開されており、自分でコンパイルして動作することもできます。セキュリティ面の審査も歓迎します。

コンパイルについて・・

## ソースコードからのビルド

You can checkout one of the available branches. However, it is recommended to use `release`, as the code here is stable and has been passed through peer review.

Via [git](https://git-scm.com):

```sh
$ git clone -b [branch-you-want] https://github.com/TranslucentTB/TranslucentTB
Cloning into 'TranslucentTB'...
remote: Counting objects: 909, done.
remote: Compressing objects: 100% (40/40), done.
remote: Total 909 (delta 44), reused 61 (delta 35), pack-reused 834
Receiving objects: 100% (909/909), 383.94 KiB | 2.78 MiB/s, done.
Resolving deltas: 100% (624/624), done.
```

You can also download a zip archive of each branch by clicking on the `Clone or download` button while browsing the branch's files.

Now that you have the source, you will need Visual Studio 2017. [You can get the free community edition here](https://www.visualstudio.com/vs/community/).
Check the following workloads:

- Desktop development with C++
- .NET desktop development

You also need to install the following individual components:

- Any of the VC++ 2017 toolsets (latest prefered)
- Windows 10 SDK (10.0.17134.0)
- .NET Framework 4.6.2 SDK
- .NET Framework 4.6.2 targeting pack

You also need the [Clang compiler for Windows](http://releases.llvm.org/download.html) and [Inno Setup](http://jrsoftware.org/isdl.php).

<!-- markdownlint-disable MD033 -->
Once you have that installed, open `TranslucentTB.sln`, and press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the solution.
<!-- markdownlint-enable MD033 -->

The output will be in either the Debug or Release folder (depending on which solution configuration is currently active).

To build the desktop installer, run the DesktopInstallerBuilder project.

To build the Microsoft Store app package, build the solution with the Store configuration.

## 貢献

If you would like to contribute, everyone is welcome to! If you are considering a major feature, need guidance, or want to talk an idea out, don't hesitate to jump on [Discord], [Gitter], or file an issue here. The main contributors are often on [Discord], [Gitter] and GitHub, so we should reply fairly quickly.
At this time we have no plans of expanding this beyond the taskbar.

When contributing, please respect the style used by the codebase. Quick rundown:

- Allman braces everywhere, even on one line blocks:

  ```cpp
  // Bad!
  if (condition) {
      statement;
  }
  
  // Bad!
  if (condition) statement;
  
  // Bad!
  if (condition)
      statement;
  
  // Good!
  if (condition)
  {
      statement;
  }
  ```

- The only exception to this rule is the opening brace of a class, enumeration, namespace or structure, in which K&R braces apply:

  ```cpp
  class Foo {
      // content
  };
  
  struct Bar {
      // content
  };
  
  namespace Baz {
      // content
  }

  enum Foobar {
      // content
  };
  ```

- lvalue, rvalue and pointer qualifiers are next to the variable name:

  ```cpp
  std::wstring &foo;
  std::wstring &&bar;
  std::wstring *baz;
  ```

- Indentation style is 4 spaces large tabs, and your editor should enforce it with this repo's `.editorconfig` automatically.

When trying to debug the main program, it might seem confusing at first because the two projects listed for launch in the header are StorePackage and DesktopInstallerBuilder. Just right-click the TranslucentTB project and select "Set as startup project".

## 謝辞

TranslucentTB is a team effort! It is the result of the collective efforts of many people:

- [@ethanhs](https://github.com/ethanhs),
- [@sylveon](https://github.com/sylveon),
- [@MrAksel](https://github.com/MrAksel),
- [@denosawr](https://github.com/denosawr),
- [@PFCKrutonium](https://github.com/PFCKrutonium),
- and last but not least, all of [our contributors](https://github.com/TranslucentTB/TranslucentTB/graphs/contributors)!

Thanks to [@dAKirby309](https://github.com/dAKirby309) for making the icon! You can find more of his stuff on [his DeviantArt profile](https://dakirby309.deviantart.com/).

The color picker used comes from [this great CodeProject article](https://www.codeproject.com/Articles/9207/An-HSV-RGBA-colour-picker).
We've modernized it a bit, with per-monitor high DPI awareness, faster (and hardware-accelerated) drawing as well as allowing to input any valid HTML color code or [name](https://www.w3schools.com/colors/colors_names.asp).

The picture we used for the installer screenshot is by [Michael D Beckwith](https://unsplash.com/photos/M-nHIqkO4-o) from [Unsplash](https://unsplash.com/).

We use [Inno Setup Dependency Installer](https://github.com/stfx/innodependencyinstaller) to install the Visual C++ redistribuable.

### 類似ソフト

If you are looking for something that modifies more than just the taskbar, there are several programs out there.

[Taskbar Tools](https://github.com/Elestriel/TaskbarTools) is a similar program written in C#. However, it seems to be unmaintaned.

You may have seen similar translucency abilities from programs such as StartIsBack, Start10 and the now defunct Classic Shell. All of these are great programs, but I don't need the start-replacement features, so I wrote this.
TranslucentTB also allows for more customizability over the taskbar with features such as Dynamic Windows, Dynamic Peek and Dynamic Start that these programs don't have. The storage and memory impact is also lesser.

### ライセンス

このプログラムは、GPL v3 のライセンスのフリーなソフトウェアです。詳細は [LICENSE.md](LICENSE.md) ファイルをご確認ください。

[Discord]: https://discord.gg/w95DGTK
[Gitter]: https://gitter.im/TranslucentTB/L
