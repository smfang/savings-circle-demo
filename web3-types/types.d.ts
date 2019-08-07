/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { EventLog } from "web3-core";
import BN from "bn.js";
import { EstimateGasOptions, EventOptions } from "web3-eth-contract";
import { EventEmitter } from "events";
// @ts-ignore
import PromiEvent from "web3-core-promievent";
export type Callback<T> = (error: Error, result: T) => void;
export interface TransactionObject<T> {
  arguments: any[];
  call(options?: EstimateGasOptions): Promise<T>;
  send(options?: EstimateGasOptions): PromiEvent<T>;
  estimateGas(options?: EstimateGasOptions): Promise<number>;
  encodeABI(): string;
}
export interface ContractEventLog<T> extends EventLog {
  returnValues: T;
}
export interface ContractEventEmitter<T> extends EventEmitter {
  on(
    event: "data" | "changed",
    listener: (event: ContractEventLog<T>) => void
  ): this;
  on(event: "error", listener: (error: Error) => void): this;
}
export type ContractEvent<T> = (
  options?: EventOptions,
  cb?: Callback<ContractEventLog<T>>
) => ContractEventEmitter<T>;