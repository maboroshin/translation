# translatoins
I make translation files for my favorite software. （お気に入りのソフトの翻訳をしています）

* [Notepad2](https://github.com/zufuliu/notepad2), ver Zufuliu / [Notepad3](https://github.com/rizonesoft/Notepad3) (Mainly these two software, but also the Mod and original.)

I also tried the following （また以下も未翻訳部分の翻訳をやってみた）:
* [PortableApps.com Platform](https://portableapps.com/) (fixed include: PA installer, and NSIS installer)
* [Windows 10 Auto Dark Mode](https://github.com/Armin2208/Windows-Auto-Night-Mode/) (full translate)
* [BeeBEEP](https://www.beebeep.net/) (full translate)
* [µTorrent](https://portableapps.com/apps/internet/utorrent_portable) (most)
* [Transmission](https://portableapps.com/apps/internet/transmission-portable) (most)
* ~~[qBittorrent](https://portableapps.com/apps/internet/qbittorrent_portable) (most)~~ Abandoned due to edit war. Japanese has been replaced by an English phonetics and sentences are longer.
* [LAN Messenger](https://github.com/maboroshin/lanmessenger_JP) (full translate)
* [BeeBEEP](https://www.beebeep.net/) (full translate)
* [LameXP](https://github.com/lordmulder/LameXP) (full translate)
* [Universal Extractor 2](https://github.com/Bioruebe/UniExtract2)
* [Q-Dir](https://www.softwareok.com/?seite=Freeware/Q-Dir) / [DesktopOK](https://www.softwareok.com/?seite=Freeware/DesktopOK) et by SoftwareOK
* [mp3DirectCut](https://github.com/maboroshin/mp3DirectCut)
* SUMo / DUMo / KCleaner / IDPhotoStudio et by [KCSoftware](https://www.kcsoftwares.com/?download)
* [ShellMenuView](https://www.nirsoft.net/utils/shell_menu_view.html), [ShellMenuNew](https://www.nirsoft.net/utils/shell_menu_new.html), [ShellExView](https://www.nirsoft.net/utils/shexview.html), [OpenWithView](https://www.nirsoft.net/utils/open_with_view.html), [RegistryChangesView](https://www.nirsoft.net/utils/registry_changes_view.html), [FileTypesMan](https://www.nirsoft.net/utils/file_types_manager.html) by NirSoft
* [Ditto](https://github.com/maboroshin/Ditto_JP)
* [DSyncronize](http://dimio.altervista.org/eng/) (full translate)
* [SciTE](https://github.com/mirror/scite)
* [Twinkle Tray](https://github.com/xanderfrangos/twinkle-tray) (full translate)
more...

## WordPress Plugins
* [Really Simple SSL](https://translate.wordpress.org/locale/ja/default/wp-plugins/really-simple-ssl/)
* [Easy Updates Manager](https://translate.wordpress.org/locale/ja/default/wp-plugins/stops-core-theme-and-plugin-updates/)
* [Autoptimize](https://translate.wordpress.org/locale/ja/default/wp-plugins/autoptimize/)
* [ImageMagick Engine](https://translate.wordpress.org/locale/ja/default/wp-plugins/imagemagick-engine/)
* [WP YouTube Lyte](https://translate.wordpress.org/locale/ja/default/wp-plugins/wp-youtube-lyte/)
* [wp_head cleaner](https://translate.wordpress.org/locale/ja/default/wp-plugins/wp-head-cleaner/)
* [Search Regex](https://translate.wordpress.org/locale/ja/default/wp-plugins/search-regex/)
* [Simple Custom CSS and JS](https://translate.wordpress.org/locale/ja/default/wp-plugins/custom-css-js/)

# To Japanese translators

- 平文テキストファイルは、そのままテキストエディタで翻訳できる。しかし言語ファイル翻訳ツールは、原文をコピー、保存して次へなどショートカットキーによる作業の高速化ができるため欠かせません。
- `ini` ファイルは、[IniTranslator](https://portableapps.com/apps/development/initranslator-portable) が使えるし、このソフトはいくつかの形式をインポートできるし、自分で作る辞書機能もいい感じ。[公式の日本語化置き場](https://sourceforge.net/p/initranslator/language-files/14/)に最新の日本語化ファイルがある（一番下のJapanese.lng）。
- `po` ファイルは [POEditor](https://poedit.net/) で翻訳する。`mo`ファイルにコンパイルされる。
- `ts` ファイルは  [Qt-Linguist](https://github.com/thurask/Qt-Linguist/releases) で。インストールなしのソフトです。 Ctrl + S でファイルを保存し、File -> Release で `qm` ファイルにコンパイルされる。
- `resx` ファイルは、マイクロソフトによる仕様。
1. 上記の IniTranslator のインポートが使える。
2. [ResXedit](https://wizardsoft.nl/products/resxedit), Copyright 2018, 追加のインストール不要.
3. Resx Editor, 1.2 (2013-05-02), 要 .net Framework 3.5.
4. [Simple Resx Editor](https://simpleresxeditor.blogspot.com/), 0.8 (2014-1-18), ファイルがないので[softpedia](https://www.softpedia.com/get/Programming/File-Editors/Simple-Resx-Editor.shtml)から, 要 .net Framework 3.5.

翻訳したソフトウェアは、バージョンアップ検出ができると便利です。私は RSS でバージョンアップを取得しています。

### Web ベース

- GitHub のアカウントを持っておくとほかのサイトのログインにも使えます。右上ボタンから自分のリポジトリに Fork して、自分の Fork の言語化ファイルをペンのマークの Edit this file で編集する。日本語ファイルがない場合英語ファイルなどを改名して編集する（本家の文字コードを保つ）。ファイルをブラウザにドラッグ・ドロップすればアップロードできる。本家で上部の Pull requests を押す。緑の New pull requests を押し、次に compare across forks をクリック。右側の head repository で自分の Fork を選択。あとは自分でできるでしょう。プルリクエストのタイトルを他の人と揃えると他の人に分かりやすいでしょう。複数ファイルの編集時は Git のコマンドラインからやっています。

- [Transifex](https://www.transifex.com/) ここを使っているところは多いと思う。検索機能に日本語が通らない。Tab キーで保存と次へ。CTRL と矢印上下で移動。
- [Crowdin](https://crowdin.com/) ここも似た感じで使いやすくショートカットキーもある。
- [Weblate](https://hosted.weblate.org/) ここだけ Merge 時のログなどにメアドが公開される可能性があるので、望まない場合、メアドを別に取得するといいでしょう。Zen をクリックで一覧を表示。検索も少し使いにくい。
- [WebTranslateIt](https://webtranslateit.com/en) Settings から AutoScroll を No に。あと同じく設定から固定幅フォントを使ってもいいかも。活動がない場合の除名時にメアドが公開されていたが、私が問い合わせたら非公開に修正されました。
- [wordpress.org](https://translate.wordpress.org/) Shift+Enter で保存して次の翻訳。CTRL+Enter で原文を翻訳欄にコピー、PgDn, PgUpで上下に移動など、一覧は[GlotPress 1.4 Keyboard shortcuts](https://github.com/GlotPress/GlotPress-WP/wiki/1.4-Keyboard-shortcuts)。Wordress は翻訳ガイドラインがあるのでそれを読む。

### 訳し方の覚書

 `&` はショートカットキーの指定なので、訳の後ろに半角括弧で持ってくる。システムトレイ上のメニューはこれが省略されているにも関わらず、一文字目のアルファベットのキーで選択できますので、これも半角括弧で指定します。言語ファイルがXMLファイルではこのショートカットキー指定の `&` は `&amp;` にします。`...` はダイアログが開く場合です。「終了」はそのソフトに重複がなければ分かりやすいよう X を割り当ててほしい（X, E, Q が多い様子）。あと全初期化など重大な機能には、誤爆を避けるためにショートカットを割り当てないという工夫もできる。
- ``&Open`` -> ``開く(&O)``
- ``&Setting...`` -> `設定(&S)...`
- ``E&xit...`` -> `終了(&X)...`
- ``&Open`` -> ``開く(&amp;O)`` (XML の場合)

利用者の記憶を利用するために、初期状態で Windows に入っているソフトの訳を使うといいです。ソフトごとに同じ機能なのに訳が違えば一から覚えないといけないからですね。簡単なのを埋める。
- Open 開く / View 表示 / Close 閉じる / Exit 終了

訳してみてカタカナ語は定訳を探し、言い回しをシンプル化します。個人的なサイトでなく、Microsoftのサイトで使用されているなどカタカナ語の定訳がある場合には、カタカナ語の採用も考慮します。
- 選択されたオブジェクトの -> 選択項目の
- Registory Hive - > レジストリのハイブ

混ぜ書きを減らす
- 全て選択 -> すべて選択
- 無い -> ない

’kakko’
- 「kakko」に直したり、kakko とする（後者は括らなくても区別できる）。

アレンジしてみる。元通り訳してみるのは大事です。長くなったら混ぜ書きをしたり。短くしてみたり削る。まったく分からない場合、実際にその機能を使用してみたり、検索してみる。WEBの翻訳サイトであれば、References からコードが見れるので、分かる範囲で読んでみる。コードでは、文章内の引数は訳文直後に引数として並んでいることがあり、その引数名が total であれば個数、time であれば時間だと想像できる。

根本的には、オープンソースというのは FREE、自由、無料 そういうものを目指しています。なので通常一般通じやすいと思われる、最大多数が理解できそうな普遍的な訳を目指した方がいいと思います。

## If not support multilingualization
If the software does not support multilingualization, Software use for translation.
（もしソフトウェアが多言語に対応していない場合、翻訳に使うソフトウェアは以下）

* [Resource Hacker Portable](https://portableapps.com/apps/utilities/resource-hacker-portable) , and [jp patch](https://wwwcfe.hatenablog.com/entry/20100917/resourcehacker)

You can also translate ***manually*** on Resource Hacker. However, you can also use the command line, Using a ***batch***. It will be easier to detect changes.

1. Extract resources:

```
SET rh=R:\anyPath\ResourceHacker.exe
SET file1=Notepad2.4.19.06r2148.x64.en
%rh% -open ../%file1%/Notepad2.exe -save %file1%.Menu.rc -action extract -mask Menu,,
%rh% -open ../%file1%/Notepad2.exe -save %file1%.Dialog.rc -action extract -mask Dialog,,
%rh% -open ../%file1%/Notepad2.exe -save %file1%.StringTable.rc -action extract -mask StringTable,,
copy %file1%*.rc %file1%.ALL.rc
```

2. Detect changes with [Mergly](http://mergely.com/editor) etc. Compare the contents of the current version with the previous version.

Then, You open the `.rc` file with a text editor and translate it. Or rewrite `.exe` with Resource Hacker. Then...

3. For example, You rewrote the `Menu.rc` extracted above. Then compile this.
```
%rh% -open %rcAnyPath% -save %file1%.Menu.res -action compile
```

3. For example, You rewrote the `exe`. Then extract this.
```
%rh% -open ../%file2%/Notepad2.exe -save %file1%.Menu.res -action extract -mask Menu,,
```

4. Replace resources:

```
SET rh=R:\anyPath\ResourceHacker.exe
%rh% -script ReplaceExe.ini
```

`ReplaceExe.ini` contents:

```
[FILENAMES]
Exe=../Notepad2.4.19.06r2148.x86.en/Notepad2.exe
SaveAs=../Notepad2.4.19.06r2148.x86.jp/Notepad2.exe
[COMMANDS]
-addoverwrite Notepad2.4.19.06r2148.x64.jp.Menu.res, Menu,,
-addoverwrite Notepad2.4.19.06r2148.x64.jp.Dialog.res, Dialog,,
-addoverwrite Notepad2.4.19.06r2148.x64.jp.StringTable.res, StringTable,,
```
