"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", api_1.default);
const port = process.env.PORT;
const mongoURL = process.env.MONGO_URL || "";
const application_name = process.env.APPLICATION_NAME;
mongoose_1.default.connect(mongoURL)
    .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(port, () => console.log(`${application_name} listening on ${port}`));
})
    .catch(err => {
    console.log("Failed to connect MongoDB Atlas", err);
    process.exit(1);
});
