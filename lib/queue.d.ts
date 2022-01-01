/// <reference types="node" />
import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
export interface Event {
    eventFlags: {
        fill: boolean;
        out: boolean;
        bid: boolean;
        maker: boolean;
    };
    seqNum?: number;
    orderId: BN;
    openOrders: PublicKey;
    openOrdersSlot: number;
    feeTier: number;
    nativeQuantityReleased: BN;
    nativeQuantityPaid: BN;
    nativeFeeOrRebate: BN;
}
export declare function decodeRequestQueue(buffer: Buffer, history?: number): any[];
export declare function decodeEventQueue(buffer: Buffer, history?: number): Event[];
//# sourceMappingURL=queue.d.ts.map