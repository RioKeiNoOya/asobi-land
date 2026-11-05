あそびランド Ver.1.0

【iPadだけで使う方法】
1. GitHubで新しいPublicリポジトリを作成します（個人情報を登録しないでください）。
2. このフォルダ内の7ファイル（index.html、style.css、app.js、sw.js、manifest.webmanifest、icon-192.png、icon-512.png）をリポジトリ直下にアップロードします。
3. GitHubの Settings > Pages > Build and deployment > Deploy from a branch で main / (root) を選び、Saveします。
4. 表示された https://ユーザー名.github.io/リポジトリ名/ にiPadのSafariでアクセスします。
5. Safariの共有メニューから「ホーム画面に追加」を選びます。
6. 初回はネット接続した状態でアプリを開き、画像選択画面の鍵を3秒長押しして画像を追加してください。
7. その後はホーム画面からオフラインで起動できます（初回キャッシュ完了後）。

【注意】
- GitHub Pagesは公開URLです。アプリ本体にはキャラクター画像を同梱していません。
- 追加画像はiPadのIndexedDBに保存され、GitHubにはアップロードされません。
- SafariのWebサイトデータを削除すると保存画像が消えることがあります。
- ホーム画面から起動したアプリとSafariタブでは保存領域が異なる場合があります。画像はホーム画面のアプリから追加してください。
- このアプリは簡易な家庭内利用向けです。画像のバックアップ・エクスポートは未実装です。

【検索エンジン対策】
- index.html に noindex / nofollow / noarchive / noimageindex を設定済みです。
- 検索エンジンに掲載しないよう指示しますが、非公開・アクセス制限ではありません。
- 公開URLをSNSや他のサイトに掲載しないでください。
- GitHubのPublicリポジトリはコードが公開され、GitHub内の検索対象になる場合があります。

更新：難易度選択（かんたん4ピース・ふつう9ピース・むずかしい16ピース）。画像選択後に難易度を選びます。検索除外用noindex設定は維持しています。
