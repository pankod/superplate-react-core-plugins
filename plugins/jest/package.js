module.exports = {
    apply(pkg, { ui }) {
        if (ui !== "antd") {
            delete pkg.jest.transformIgnorePatterns;
        }
        return pkg;
    },
};
