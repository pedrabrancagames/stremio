let app;
try {
    app = require("./server");
} catch (e) {
    console.error("Failed to import server:", e);
    app = (req, res) => {
        res.status(500).json({
            error: "Server initialization failed",
            message: e.message,
            stack: e.stack
        });
    };
}

module.exports = app;