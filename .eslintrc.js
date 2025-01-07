module.exports = {
    "extends": "next/core-web-vitals",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            process.platform === "win32" ? "windows" : "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "import/no-anonymous-default-export": "off"
    }
}