/*
 *
 * Copyright © 2022-present, DESSADER.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * File: cssLoader.js
 * Created: 15.06.2022
 * Author: DESSADER
 * Contacts:
 *    Email: dessader.work@gmail.com
 *    Telegram: @dessader_work
 *    GitHub: github.com/Dessader
 *
 */

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    { loader: MiniCSSExtractPlugin.loader },
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    { loader: "postcss-loader" }
  ]
};
