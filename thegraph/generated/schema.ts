// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Tx extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tx entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Tx entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tx", id.toString(), this);
  }

  static load(id: string): Tx | null {
    return store.get("Tx", id) as Tx | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ticker(): string {
    let value = this.get("ticker");
    return value.toString();
  }

  set ticker(value: string) {
    this.set("ticker", Value.fromString(value));
  }

  get fixedRateCompoundDeposit(): string | null {
    let value = this.get("fixedRateCompoundDeposit");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fixedRateCompoundDeposit(value: string | null) {
    if (value === null) {
      this.unset("fixedRateCompoundDeposit");
    } else {
      this.set("fixedRateCompoundDeposit", Value.fromString(value as string));
    }
  }
}

export class Ticker extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ticker entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ticker entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ticker", id.toString(), this);
  }

  static load(id: string): Ticker | null {
    return store.get("Ticker", id) as Ticker | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get margin(): BigInt {
    let value = this.get("margin");
    return value.toBigInt();
  }

  set margin(value: BigInt) {
    this.set("margin", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get params(): Array<BigInt> {
    let value = this.get("params");
    return value.toBigIntArray();
  }

  set params(value: Array<BigInt>) {
    this.set("params", Value.fromBigIntArray(value));
  }

  get oracleId(): Bytes {
    let value = this.get("oracleId");
    return value.toBytes();
  }

  set oracleId(value: Bytes) {
    this.set("oracleId", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get syntheticId(): Bytes {
    let value = this.get("syntheticId");
    return value.toBytes();
  }

  set syntheticId(value: Bytes) {
    this.set("syntheticId", Value.fromBytes(value));
  }

  get longTokenId(): string {
    let value = this.get("longTokenId");
    return value.toString();
  }

  set longTokenId(value: string) {
    this.set("longTokenId", Value.fromString(value));
  }

  get shortTokenId(): string {
    let value = this.get("shortTokenId");
    return value.toString();
  }

  set shortTokenId(value: string) {
    this.set("shortTokenId", Value.fromString(value));
  }

  get tokenIds(): Array<string> {
    let value = this.get("tokenIds");
    return value.toStringArray();
  }

  set tokenIds(value: Array<string>) {
    this.set("tokenIds", Value.fromStringArray(value));
  }

  get tx(): string {
    let value = this.get("tx");
    return value.toString();
  }

  set tx(value: string) {
    this.set("tx", Value.fromString(value));
  }
}

export class TokenId extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenId entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenId entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenId", id.toString(), this);
  }

  static load(id: string): TokenId | null {
    return store.get("TokenId", id) as TokenId | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ticker(): string | null {
    let value = this.get("ticker");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ticker(value: string | null) {
    if (value === null) {
      this.unset("ticker");
    } else {
      this.set("ticker", Value.fromString(value as string));
    }
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Position entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Position entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Position", id.toString(), this);
  }

  static load(id: string): Position | null {
    return store.get("Position", id) as Position | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }

  get fixedRateCompoundDeposits(): Array<string> {
    let value = this.get("fixedRateCompoundDeposits");
    return value.toStringArray();
  }

  set fixedRateCompoundDeposits(value: Array<string>) {
    this.set("fixedRateCompoundDeposits", Value.fromStringArray(value));
  }
}

export class Summary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Summary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Summary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Summary", id.toString(), this);
  }

  static load(id: string): Summary | null {
    return store.get("Summary", id) as Summary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTickers(): BigInt {
    let value = this.get("totalTickers");
    return value.toBigInt();
  }

  set totalTickers(value: BigInt) {
    this.set("totalTickers", Value.fromBigInt(value));
  }

  get totalUsers(): BigInt {
    let value = this.get("totalUsers");
    return value.toBigInt();
  }

  set totalUsers(value: BigInt) {
    this.set("totalUsers", Value.fromBigInt(value));
  }
}

export class FixedRateCompoundDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save FixedRateCompoundDeposit entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FixedRateCompoundDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FixedRateCompoundDeposit", id.toString(), this);
  }

  static load(id: string): FixedRateCompoundDeposit | null {
    return store.get(
      "FixedRateCompoundDeposit",
      id
    ) as FixedRateCompoundDeposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositId(): BigInt {
    let value = this.get("depositId");
    return value.toBigInt();
  }

  set depositId(value: BigInt) {
    this.set("depositId", Value.fromBigInt(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get cToken(): Bytes {
    let value = this.get("cToken");
    return value.toBytes();
  }

  set cToken(value: Bytes) {
    this.set("cToken", Value.fromBytes(value));
  }

  get cTokenAmount(): BigInt {
    let value = this.get("cTokenAmount");
    return value.toBigInt();
  }

  set cTokenAmount(value: BigInt) {
    this.set("cTokenAmount", Value.fromBigInt(value));
  }

  get tx(): string {
    let value = this.get("tx");
    return value.toString();
  }

  set tx(value: string) {
    this.set("tx", Value.fromString(value));
  }
}
