const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("./src"))
            .set("assets", resolve("./src/assets"))
            .set("common", resolve("./src/common"))
            .set("components", resolve("./src/components"))
            .set("network", resolve("./src/network"))
            .set("views", resolve("./src/views"))
    }

}