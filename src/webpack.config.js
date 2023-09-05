// const path = require('path');
//
//
// let mode = 'development'; // По умолчанию режим development
// if (process.env.NODE_ENV === 'production') { // Режим production, если
//                                              // при запуске вебпака было указано --mode=production
//     mode = 'production';
// }
//
// module.exports = {
//     entry: './src/index.tsx', // Указываем точку входа - главный модуль приложения,
//     // в который импортируются все остальные
//     mode,
//     output: {
//
//         path: path.resolve(__dirname, 'dist'), // Директория, в которой будет
//         // размещаться итоговый бандл, папка dist в корне приложения
//         clean: true, // Очищает директорию dist перед обновлением бандла
//         // Свойство стало доступно с версии 5.20.0, до этого использовался
//         // CleanWebpackPlugin
//     },
//
//     devtool: 'source-map',
//
//     devServer: {
//         hot: true, // Включает автоматическую перезагрузку страницы при изменениях
//     }
// }
//

module.exports = {
    module: {
        rules: [
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // В зависимости от вашего предпочтения
                        name: 'media/[name].[hash:8].[ext]',
                    },
                },
            },
        ],
    },
};
