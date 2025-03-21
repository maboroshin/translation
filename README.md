* [Translation Platform Comparison](TranslationPlatform.md) (English)

# My translatoins
I make translation files for my favorite software. （お気に入りのソフトの翻訳をしています）

* [Notepad2](https://github.com/zufuliu/notepad2), ver Zufuliu / [Notepad3](https://github.com/rizonesoft/Notepad3) (Mainly these two software, but also the Mod and original.)

I also tried the following （また以下も未翻訳部分の翻訳をやってみた）★ are for good apps:
* ★[PortableApps.com Platform](https://portableapps.com/) (fixed include: PA installer, and NSIS installer)
* ★[Windows 10 Auto Dark Mode](https://github.com/Armin2208/Windows-Auto-Night-Mode/) (full translate) *Microsoft Store Community Choice Awards 2022*
* [µTorrent](https://portableapps.com/apps/internet/utorrent_portable) (most)
* ★[Transmission](https://portableapps.com/apps/internet/transmission-portable) (most)
* ~~[qBittorrent](https://portableapps.com/apps/internet/qbittorrent_portable) (most)~~ Abandoned due to edit war. Japanese has been replaced by an English phonetics and sentences are longer.
* ★[BeeBEEP](https://www.beebeep.net/) (full)
* [LameXP](https://github.com/lordmulder/LameXP) (full)
* [TeraCopy](https://www.codesector.com/teracopy) (About 50%)
* ★[Universal Extractor 2](https://github.com/Bioruebe/UniExtract2)
* [Q-Dir](https://www.softwareok.com/?seite=Freeware/Q-Dir) / [DesktopOK](https://www.softwareok.com/?seite=Freeware/DesktopOK) et by SoftwareOK
* [mp3DirectCut](https://github.com/maboroshin/mp3DirectCut)
* SUMo / DUMo / KCleaner / IDPhotoStudio by ~~[KCSoftware](https://www.kcsoftwares.com/?download)~~ : The developer quit.
* [ShellMenuView](https://www.nirsoft.net/utils/shell_menu_view.html), [ShellMenuNew](https://www.nirsoft.net/utils/shell_menu_new.html), [ShellExView](https://www.nirsoft.net/utils/shexview.html), [OpenWithView](https://www.nirsoft.net/utils/open_with_view.html), [RegistryChangesView](https://www.nirsoft.net/utils/registry_changes_view.html), [FileTypesMan](https://www.nirsoft.net/utils/file_types_manager.html) by NirSoft
* ★[Ditto](https://github.com/maboroshin/Ditto_JP)
* [DSyncronize](http://dimio.altervista.org/eng/) (full)
* [SciTE](https://github.com/moltenform/scite-files)
* ★[Twinkle Tray](https://github.com/xanderfrangos/twinkle-tray) (full)
* [CoreTemp](https://www.alcpu.com/CoreTemp/)
* ★[EarTrumpet](https://www.microsoft.com/ja-jp/p/eartrumpet/9nblggh516xp) (full) *Microsoft Store Community Choice Awards 2022*, *Window forest 2018 Bronze Prize* (窓の杜大賞2018年銅賞)
* ★[LosslessCut](https://github.com/mifi/lossless-cut) (full)
* ★[TranslucentTB](https://github.com/TranslucentTB/TranslucentTB/) (full) *Microsoft Store Community Choice Awards 2022*
* ★[Mica for Everyone](https://github.com/MicaForEveryone/MicaForEveryone) (full)

more... → [2023](../../wiki/)

## WordPress Plugins
* [Really Simple SSL](https://translate.wordpress.org/locale/ja/default/wp-plugins/really-simple-ssl/)
* [Companion Auto Update](https://translate.wordpress.org/locale/ja/default/wp-plugins/companion-auto-update/) / ~~[Easy Updates Manager](https://translate.wordpress.org/locale/ja/default/wp-plugins/stops-core-theme-and-plugin-updates/)~~ (I stopped because more extra effort as fewer announcements.)
* [Autoptimize](https://translate.wordpress.org/locale/ja/default/wp-plugins/autoptimize/)
* [ImageMagick Engine](https://translate.wordpress.org/locale/ja/default/wp-plugins/imagemagick-engine/)
* [WP YouTube Lyte](https://translate.wordpress.org/locale/ja/default/wp-plugins/wp-youtube-lyte/)
* [wp_head cleaner](https://translate.wordpress.org/locale/ja/default/wp-plugins/wp-head-cleaner/)
* [Search Regex](https://translate.wordpress.org/locale/ja/default/wp-plugins/search-regex/)
* [Simple Custom CSS and JS](https://translate.wordpress.org/locale/ja/default/wp-plugins/custom-css-js/)
* footnotes
* WP YouTube Lyte
* Optimize Database after Deleting Revisions

more...

# To Japanese translators

- 平文テキストファイルは、そのままテキストエディタで翻訳できる。しかし言語ファイル翻訳ツールは、原文をコピー、保存して次へなどショートカットキーによる作業の高速化ができるため欠かせません。
- `ini` ファイルは、[IniTranslator](https://portableapps.com/apps/development/initranslator-portable) が使えるし、このソフトはいくつかの形式をインポートできるし、自分で作る辞書機能もいい感じ。[公式の日本語化置き場](https://sourceforge.net/p/initranslator/language-files/14/)に最新の日本語化ファイルがある（一番下のJapanese.lng）。`[Menu]`の形式で括弧がある箇所は英語そのままします。これは節を示していて、英語と日本語のそれぞれのファイルで対応するということです。同じ文字列にしておく必要があります。
- `po` ファイルは [POEdit](https://poedit.net/) で翻訳する。`mo`ファイルにコンパイルされる。
- `ts` ファイルは  [Qt-Linguist](https://github.com/thurask/Qt-Linguist/releases) で。インストールなしのソフトです。 Ctrl + S でファイルを保存し、File -> Release で `qm` ファイルにコンパイルされる。
- `resx` ファイルは、マイクロソフトによる仕様。
1. 上記の IniTranslator のインポートが使える。推奨。reswも。ファイル -> インポート -> (選択) -> インポート -> (原文とコピーした翻訳ファイルを選択) -> OK
2. [ResXedit](https://wizardsoft.nl/products/resxedit), Copyright 2018, 追加のインストール不要。
3. Resx Editor, 1.2 (2013-05-02), 要 .net Framework 3.5。
4. [Simple Resx Editor](https://simpleresxeditor.blogspot.com/), 0.8 (2014-1-18), ファイルがないので[softpedia](https://www.softpedia.com/get/Programming/File-Editors/Simple-Resx-Editor.shtml)から。要 .net Framework 3.5。

翻訳したソフトウェアは、バージョンアップ検出ができると便利です。私は RSS でバージョンアップを取得しています。

[フリーソフト日本語化 Wiki](https://github.com/maboroshin/translation/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%BD%E3%83%95%E3%83%88%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96-Wiki) ― 各種フリーソフトの翻訳状況を把握する。

### 訳し方の覚書

 `&` はショートカットキーの指定なので、訳の後ろに半角括弧で持ってくる。システムトレイ上のメニューはこれが省略されているにも関わらず、一文字目のアルファベットのキーで選択できますので、これも半角括弧で指定します。言語ファイルがXMLファイルではこのショートカットキー指定の `&` は `&amp;` にします。`...` はダイアログが開く場合です。「終了」はそのソフトに重複がなければ分かりやすいよう X を割り当ててほしい（X, E, Q が多い様子）。あと全初期化など重大な機能には、誤爆を避けるためにショートカットを割り当てないという工夫もできる。
- ``&Open`` -> ``開く(&O)``
- ``&Setting...`` -> `設定(&S)...`
- ``E&xit...`` -> `終了(&X)...`
- ``&Open`` -> ``開く(&amp;O)`` (XML の場合)

翻訳作業としては、文脈を理解し -> 直訳 -> 推敲 となります。

（文脈の利用）利用者の記憶を利用するために、初期状態で Windows に入っているソフトの訳を使うといいです。ソフトごとに同じ機能なのに訳が違えば一から覚えないといけないからですね。簡単なのを埋める。
- Open 開く / View 表示 / Close 閉じる / Exit 終了

（文脈の利用）訳してみてカタカナ語は定訳を探し、言い回しをシンプル化します。個人的なサイトでなく、Microsoftのサイトで使用されているなどカタカナ語の定訳がある場合には、カタカナ語の採用も考慮します。辞書を引く。音訳を減らし、翻訳に昇華させる作業です。
- 選択されたオブジェクトの -> 選択項目の
- セレクテッドアイテム -> 選択項目
- Registory Hive - > レジストリのハイブ

混ぜ書きを減らす
- 全て選択 -> すべて選択
- 無い -> ない

’kakko’
- 「kakko」に直したり、kakko とする。後者のように日本語中のアルファベットは、特に括らなくても区別できます。

（文脈の利用）訳語の統一をはかる/前後を見る
- 同じアプリ内で、同じ単語に違う訳語を割り当てる必要はないでしょう。同じ言い回しがあれば、コピペで作った方が、読み手は理解しやすいでしょう。先行の翻訳で「詳細設定」と訳しているのに、別の個所で同じ単語を「高度な設定から変更してください」と違う訳を入れると読み手に通じない。

（文脈の利用）題に丸をうたない。
- ↑こんな感じに題に句点「。」があったりする。可能であれば実際の表示を見る、次点でコードを見て訳すということです。題やボタンの文字列の文は端的にし、丸がないほうがすっきり見えるでしょう。Please add ではなく add となっていたり、英文にも手掛かりがあるでしょう。コード中で title 用の文字列だという手掛かりがあることも。

その英語文字列以外の文脈を見て含めようということです。定訳やアプリ内での統一性、実際の表示や実行した機能など、その文字がどういう位置づけにあるのかを探る。文脈を含めて対応するものを特定していく。そうすれば、title という単語だけの翻訳でも「記事名」「題」「ファイル名」など最もふさわしく、もっと分かりやすいものを割り当てることができることもある。文字列の周りにある情報を元に意味を絞っていく。

逆にまずいのは、英語文字列だけをみて翻訳すると誤訳が入りやすくなります。大げさな例では、英語圏の開発者が機械翻訳を使ったアプリに Clear が「晴れ」と訳された例がありました。アプリの翻訳で Clear に多い実際の翻訳は「消去」など消す処理だと思いますが、この単語だけを機械翻訳すると「晴れ」になってしまうかもしれない。同様に、言語の選択肢の中の Japanese の訳が「日本の」になっていた。言語の選択であれば「日本語」が適切です。実際の機能が全部初期化していたら、「消去」でなく「全初期化」に意訳してもいい。

またよく見るのは、カタカナの発音にしてしまうことです。たとえば「ファーストアイテムをセレクト」では、翻訳ではなくて英語の発音をつなげただけの作業途中の状態です。日本語という文脈をもっと当てはめるとしっかり翻訳したと言える状態は「1つ目の項目を選択」とかになりますね。

アレンジしてみる。元通り訳してみるのは大事ですですが。長くなったら混ぜ書きをしたり。複雑な言い回しを短くしてみたり削る。文の推敲ですね。まったく分からない場合、実際にその機能を使用してみたり、検索してみる。WEBの翻訳サイトであれば、References からコードが見やすいものがあるので、分かる範囲で読んでみる。コードでは、文章内の引数（%sとか%1とか）は訳文直後に引数として並んでいることがあり、その引数名が total であれば個数、minut であれば時間だと想像できる。前者では「%1個の」とし、後者では「%1分間」という訳がふさわしいかもしれない。

根本的には、オープンソースというのは FREE、自由、無料 そういうものを目指しています。なので通常一般通じやすいと思われる、最大多数が理解できそうな普遍的な訳を目指した方がいいと思います。

辞書
* [英辞郎 on the WEB](https://eow.alc.co.jp/)（アルク）

### Web ベースの翻訳サービス

- GitHub のアカウントを持っておくとほかのサイトのログインにも使えます。右上ボタンから自分のリポジトリに Fork して、自分の Fork の言語化ファイルをペンのマークの Edit this file で編集する。日本語ファイルがない場合英語ファイルなどを改名して編集する（本家の文字コードを保つ）。ファイルをブラウザにドラッグ・ドロップすればアップロードできる。本家で上部の Pull requests を押す。緑の New pull requests を押し、次に compare across forks をクリック。右側の head repository で自分の Fork を選択。あとは自分でできるでしょう。プルリクエストのタイトルを他の人と揃えると他の人に分かりやすいでしょう。複数ファイルの編集時は Git のコマンドラインからやっています。規範 [GitHub Community Guidelines](https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-community-guidelines)

- [wordpress.org](https://translate.wordpress.org/) Shift+Enter で保存して次の翻訳。CTRL+Enter で原文を翻訳欄にコピー、PgDn, PgUp あるいは CTRL+Shift+↑ か ↓ で上下に移動など、一覧は [GlotPress 1.4 Keyboard shortcuts](https://github.com/GlotPress/GlotPress-WP/wiki/1.4-Keyboard-shortcuts)。[Wordress 翻訳 Guideline](https://ja.wordpress.org/team/handbook/translation/)があるのでそれを読む。私が作った [Wordpress.org translation count](Wordpress.orgTranslationCount.js) でサイト上に単純に通番をつけられます。
- [Transifex](https://www.transifex.com/) ここを使っているところは多いと思う。検索機能に日本語が通らない。Tab キーで保存と次へ。CTRL と矢印上下で移動。規範 [Transifex Community Guidelines](https://community.transifex.com/faq)
- [Crowdin](https://crowdin.com/) ここも似た感じで使いやすくショートカットキーもある。Activityの日本語絞り込みはURLに ?lang=25 を追加。 規範 [Crowdin Terms and Conditions](https://support.crowdin.com/terms/)
- [WebTranslateIt](https://webtranslateit.com/) Settings から AutoScroll を No に。あと同じく設定から固定幅フォントを使ってもいいかも。活動がない場合の除名時にメアドが公開されていたが、私が問い合わせたら非公開に修正されました。規範 [WebTranslateIt Terms of Service](https://webtranslateit.com/en/tos)
- [Weblate](https://hosted.weblate.org/) ここだけ Merge 時のログなどにメアドが公開される可能性があるので、望まない場合、メアドを別に取得するといいでしょう。Zen をクリックで一覧を表示。検索も少し使いにくい。規範なし？笑

## 多言語化に対応していない場合
* 使用: [Resource Hacker Portable](https://portableapps.com/apps/utilities/resource-hacker-portable) と [日本語化ファイル](https://github.com/Rukoto/Toy-Box)または[日本語化2](https://wwwcfe.hatenablog.com/entry/20100917/resourcehacker) （この日本語化ファイルは App\ResourceHacker\ResourceHacker.exe と同じフォルダに置きます） 

Resource Hacker（リソースディタ）を使用して、手動で日本語化するには、実行ファイル（```.exe``` または ```.dll```） をResource Hacker で開き、```Menu```、```Dialog```、```String Table``` を日本語化してみます。英語を日本語にします。括弧の ```"文字列"``` 内を翻訳していきます。この表示用文字列がない場合は、Resource Hacker ではなくさらにバイナリエディタを使う方法があります（ここでは解説しません）。

1か所やってみて、左サイドバーで別のリソース番号にフォーカスを移すと「コンパイルしますか？」と出るのでコンパイルし、それから「保存」します。ソフトを起動してみて日本語になっていれば最後まで続けましょう。ただし書き変えまくってると、ファイルが破損するのか、ウイルスに判定されるのか、たまに実行ファイルが実行できなくなる場合があるので、そうなると再び最初からすでに作って壊れたファイルからコピペして作っていきます。なので途中で何回も半翻訳済みの実行ファイルをコピーして保存していくといいです。

***実行ファイル内に複数の言語がある***場合、多言語化に対応している可能性がありどれかの言語を、「リソースの言語を変更」（Change Language for this Resource... F6）から以下に変更します。同様にコンパイルし保存し日本語が表示されるか試しましょう。
* ```Language``` : ```JAPANESE```
* ```Lang ID``` : ```1041``` （多くはこの番号でいいかと）

***リソースをまとめて文字列で出力する***には、例えば ```Menu``` を翻訳したら、メニューの「操作」（Action）から、「[Menu] グループを *.rc ファイルに保存」（Save [Menu] Group to an RC file）でテキスト形式で保存できます。```Menu```、```Dialog```、```String Table```を出力し、ひとつの ```.rc``` ファイルにまとめます。複数の言語がある場合には、```ENGLISH``` の部分は不要なので全部削除しておきます。オープンソースのソフトなら、ライセンスを継承して翻訳したリソースをアップロードすることに何も問題はないでしょう。これのファイルをコンパイルさせて読み込めばいいのではと思いました。「すべてのリソースを *.rc ファイルに保存」（Save All Resources...略）では、アイコンファイルとか多数出力されるので注意。

翻訳してない元の英語のままの ```.rc``` も出力しておくと、バージョンアップ時に [Mergly](http://mergely.com/editor) など差分検出ツールで更新の有無を検出できます。

***出力された文字列のリソースをコンパイルして読み込むには*** 。Resource Hacker で出力された ```.rc``` を読み込みます。メニューの「操作」（Action）から、「スクリプトをコンパイル」（Compile Script F5）、そしてバイナリ RES (```.res```) で保存します。Resource Hacker で実行ファイルを読み込み、「操作」の「リソース ファイル (*.res 略)から追加(R)」で、今バイナリにしたこの ```.res``` を追加します。ダイアログが出るので、「上書き」（Overwrite）と「すべて選択」（Check）を選択し、インポート（Import）、そして保存します。

オープンソースであれば、この形式でアップロードしておけば、誰でも引継ぎもできるしいいのではと思ったので。

以上の作業をコマンドラインで補助するには以下。

## If not support multilingualization
If the software does not support multilingualization, Software use for translation.
（もしソフトウェアが多言語に対応していない場合、翻訳に使うソフトウェアは以下）

* Use: [Resource Hacker Portable](https://portableapps.com/apps/utilities/resource-hacker-portable) , and [jp language file](https://github.com/Rukoto/Toy-Box) or [file2](https://wwwcfe.hatenablog.com/entry/20100917/resourcehacker)

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
