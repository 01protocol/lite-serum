"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInstructions = exports.supportsSrmFeeDiscounts = exports.getFeeRates = exports.getFeeTier = exports.NEW_ORDER_V3_OWNER_INDEX = exports.NEW_ORDER_V3_OPEN_ORDERS_INDEX = exports.NEW_ORDER_OWNER_INDEX = exports.NEW_ORDER_OPEN_ORDERS_INDEX = exports.SETTLE_FUNDS_QUOTE_WALLET_INDEX = exports.SETTLE_FUNDS_BASE_WALLET_INDEX = exports.decodeInstruction = exports.DexInstructions = exports.MARKET_STATE_LAYOUT_V2 = exports.MARKET_STATE_LAYOUT_V3 = exports.OpenOrders = exports.Orderbook = exports.Market = void 0;
var market_1 = require("./market");
Object.defineProperty(exports, "Market", { enumerable: true, get: function () { return market_1.Market; } });
Object.defineProperty(exports, "Orderbook", { enumerable: true, get: function () { return market_1.Orderbook; } });
Object.defineProperty(exports, "OpenOrders", { enumerable: true, get: function () { return market_1.OpenOrders; } });
Object.defineProperty(exports, "MARKET_STATE_LAYOUT_V3", { enumerable: true, get: function () { return market_1.MARKET_STATE_LAYOUT_V3; } });
Object.defineProperty(exports, "MARKET_STATE_LAYOUT_V2", { enumerable: true, get: function () { return market_1.MARKET_STATE_LAYOUT_V2; } });
var instructions_1 = require("./instructions");
Object.defineProperty(exports, "DexInstructions", { enumerable: true, get: function () { return instructions_1.DexInstructions; } });
Object.defineProperty(exports, "decodeInstruction", { enumerable: true, get: function () { return instructions_1.decodeInstruction; } });
Object.defineProperty(exports, "SETTLE_FUNDS_BASE_WALLET_INDEX", { enumerable: true, get: function () { return instructions_1.SETTLE_FUNDS_BASE_WALLET_INDEX; } });
Object.defineProperty(exports, "SETTLE_FUNDS_QUOTE_WALLET_INDEX", { enumerable: true, get: function () { return instructions_1.SETTLE_FUNDS_QUOTE_WALLET_INDEX; } });
Object.defineProperty(exports, "NEW_ORDER_OPEN_ORDERS_INDEX", { enumerable: true, get: function () { return instructions_1.NEW_ORDER_OPEN_ORDERS_INDEX; } });
Object.defineProperty(exports, "NEW_ORDER_OWNER_INDEX", { enumerable: true, get: function () { return instructions_1.NEW_ORDER_OWNER_INDEX; } });
Object.defineProperty(exports, "NEW_ORDER_V3_OPEN_ORDERS_INDEX", { enumerable: true, get: function () { return instructions_1.NEW_ORDER_V3_OPEN_ORDERS_INDEX; } });
Object.defineProperty(exports, "NEW_ORDER_V3_OWNER_INDEX", { enumerable: true, get: function () { return instructions_1.NEW_ORDER_V3_OWNER_INDEX; } });
var fees_1 = require("./fees");
Object.defineProperty(exports, "getFeeTier", { enumerable: true, get: function () { return fees_1.getFeeTier; } });
Object.defineProperty(exports, "getFeeRates", { enumerable: true, get: function () { return fees_1.getFeeRates; } });
Object.defineProperty(exports, "supportsSrmFeeDiscounts", { enumerable: true, get: function () { return fees_1.supportsSrmFeeDiscounts; } });
exports.TokenInstructions = __importStar(require("./token-instructions"));
//# sourceMappingURL=index.js.map