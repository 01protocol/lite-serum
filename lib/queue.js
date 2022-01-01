"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeEventQueue = exports.decodeRequestQueue = void 0;
const buffer_layout_1 = require("buffer-layout");
const layout_1 = require("./layout");
const REQUEST_QUEUE_HEADER = (0, buffer_layout_1.struct)([
    (0, buffer_layout_1.blob)(5),
    (0, layout_1.accountFlagsLayout)('accountFlags'),
    (0, buffer_layout_1.u32)('head'),
    (0, layout_1.zeros)(4),
    (0, buffer_layout_1.u32)('count'),
    (0, layout_1.zeros)(4),
    (0, buffer_layout_1.u32)('nextSeqNum'),
    (0, layout_1.zeros)(4),
]);
const REQUEST_FLAGS = (0, buffer_layout_1.bits)((0, buffer_layout_1.u8)(), false, 'requestFlags');
REQUEST_FLAGS.addBoolean('newOrder');
REQUEST_FLAGS.addBoolean('cancelOrder');
REQUEST_FLAGS.addBoolean('bid');
REQUEST_FLAGS.addBoolean('postOnly');
REQUEST_FLAGS.addBoolean('ioc');
const REQUEST = (0, buffer_layout_1.struct)([
    REQUEST_FLAGS,
    (0, buffer_layout_1.u8)('openOrdersSlot'),
    (0, buffer_layout_1.u8)('feeTier'),
    (0, buffer_layout_1.blob)(5),
    (0, layout_1.u64)('maxBaseSizeOrCancelId'),
    (0, layout_1.u64)('nativeQuoteQuantityLocked'),
    (0, layout_1.u128)('orderId'),
    (0, layout_1.publicKeyLayout)('openOrders'),
    (0, layout_1.u64)('clientOrderId'),
]);
const EVENT_QUEUE_HEADER = (0, buffer_layout_1.struct)([
    (0, buffer_layout_1.blob)(5),
    (0, layout_1.accountFlagsLayout)('accountFlags'),
    (0, buffer_layout_1.u32)('head'),
    (0, layout_1.zeros)(4),
    (0, buffer_layout_1.u32)('count'),
    (0, layout_1.zeros)(4),
    (0, buffer_layout_1.u32)('seqNum'),
    (0, layout_1.zeros)(4),
]);
const EVENT_FLAGS = (0, buffer_layout_1.bits)((0, buffer_layout_1.u8)(), false, 'eventFlags');
EVENT_FLAGS.addBoolean('fill');
EVENT_FLAGS.addBoolean('out');
EVENT_FLAGS.addBoolean('bid');
EVENT_FLAGS.addBoolean('maker');
const EVENT = (0, buffer_layout_1.struct)([
    EVENT_FLAGS,
    (0, buffer_layout_1.u8)('openOrdersSlot'),
    (0, buffer_layout_1.u8)('feeTier'),
    (0, buffer_layout_1.blob)(5),
    (0, layout_1.u64)('nativeQuantityReleased'),
    (0, layout_1.u64)('nativeQuantityPaid'),
    (0, layout_1.u64)('nativeFeeOrRebate'),
    (0, layout_1.u128)('orderId'),
    (0, layout_1.publicKeyLayout)('openOrders'),
    (0, layout_1.u64)('clientOrderId'),
]);
function decodeQueueItem(headerLayout, nodeLayout, buffer, nodeIndex) {
    return nodeLayout.decode(buffer, headerLayout.span + nodeIndex * nodeLayout.span);
}
function decodeQueue(headerLayout, nodeLayout, buffer, history) {
    const header = headerLayout.decode(buffer);
    const allocLen = Math.floor((buffer.length - headerLayout.span) / nodeLayout.span);
    const nodes = [];
    if (history) {
        for (let i = 0; i < Math.min(history, allocLen); ++i) {
            const nodeIndex = (header.head + header.count + allocLen - 1 - i) % allocLen;
            nodes.push(decodeQueueItem(headerLayout, nodeLayout, buffer, nodeIndex));
        }
    }
    else {
        for (let i = 0; i < header.count; ++i) {
            const nodeIndex = (header.head + i) % allocLen;
            nodes.push(decodeQueueItem(headerLayout, nodeLayout, buffer, nodeIndex));
        }
    }
    return { header, nodes };
}
function decodeRequestQueue(buffer, history) {
    const { header, nodes } = decodeQueue(REQUEST_QUEUE_HEADER, REQUEST, buffer, history);
    if (!header.accountFlags.initialized || !header.accountFlags.requestQueue) {
        throw new Error('Invalid requests queue');
    }
    return nodes;
}
exports.decodeRequestQueue = decodeRequestQueue;
function decodeEventQueue(buffer, history) {
    const { header, nodes } = decodeQueue(EVENT_QUEUE_HEADER, EVENT, buffer, history);
    if (!header.accountFlags.initialized || !header.accountFlags.eventQueue) {
        throw new Error('Invalid events queue');
    }
    return nodes;
}
exports.decodeEventQueue = decodeEventQueue;
//# sourceMappingURL=queue.js.map