const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');


module.exports = {
    // development:開発 cssの圧縮なし
    // production:本番 cssの圧縮あり
	mode: 'development',
    //開発環境のlocalhostを開く
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        hot: true,
        open: true,
        liveReload: true,
    },
    //source-map タイプのソースマップを出力
    devtool: 'source-map',
    // node_modules を監視（watch）対象から除外
    watchOptions: {
        ignored: /node_modules/  //正規表現で指定
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    //エントリポイント
    entry: {
        // コンパイル対象のファイルを指定 scssファイルを追加した場合行を追加
        'common': path.resolve(__dirname, './src/js/common.js'),
        'top': path.resolve(__dirname, './src/js/top.js'),
        'style': path.resolve(__dirname, './src/scss/style.scss'),
        'company': path.resolve(__dirname, './src/scss/company.scss')
    },
    //出力先
    output: {
        path: path.resolve(__dirname, './dist/'), // 出力先フォルダを絶対パスで指定
        filename: 'js/[name].js' // [name]にはentry:で指定したキーが入る
    },
    // cacheを有効
    cache: true,
	module: {
		rules: [
            {
                enforce: 'pre',
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                fix: true, //autofixモードの有効化
                failOnError: true //エラー検出時にビルド中断
                }
            },
			{
                // scss・sass・cssのファイル指定
				test: /\.s[ac]ss$/i,
                // 使用するローダーの指定
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			}
		],
	},
    target: 'web',

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),

        // distフォルダ内のファイルの削除 ビルドする度に自動で削除
        new CleanWebpackPlugin({ verbose: true }),

        new RemoveEmptyScriptsPlugin(),

        // ファイルを別階層にコピーする
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },
                { from: 'src/pages', to: '' },
                { from: 'src/js/lib', to: 'js/lib' },
                { from: 'src/scss/lib', to: 'css/lib' },
            ],
        }),

        new StylelintPlugin({
            configFile: '.stylelintrc',
            fix: true,
        }),
	],
};