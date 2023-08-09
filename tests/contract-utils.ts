import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  SchemaRegistered,
  TransferBatch,
  TransferSingle,
  URI,
  schemaSubscription
} from "../generated/Contract/Contract"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createSchemaRegisteredEvent(
  name: string,
  description: string,
  tags: Array<string>,
  schemaUID: Bytes,
  resolver: Address,
  attestResolutionDays: BigInt,
  schema: string,
  mintPrice: BigInt,
  attestReward: BigInt,
  isMintable: boolean
): SchemaRegistered {
  let schemaRegisteredEvent = changetype<SchemaRegistered>(newMockEvent())

  schemaRegisteredEvent.parameters = new Array()

  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam("tags", ethereum.Value.fromStringArray(tags))
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "schemaUID",
      ethereum.Value.fromFixedBytes(schemaUID)
    )
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "attestResolutionDays",
      ethereum.Value.fromUnsignedBigInt(attestResolutionDays)
    )
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam("schema", ethereum.Value.fromString(schema))
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice",
      ethereum.Value.fromUnsignedBigInt(mintPrice)
    )
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "attestReward",
      ethereum.Value.fromUnsignedBigInt(attestReward)
    )
  )
  schemaRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "isMintable",
      ethereum.Value.fromBoolean(isMintable)
    )
  )

  return schemaRegisteredEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createschemaSubscriptionEvent(
  user: Address,
  schemaUID: Bytes,
  subscriptionEndAt: BigInt
): schemaSubscription {
  let schemaSubscriptionEvent = changetype<schemaSubscription>(newMockEvent())

  schemaSubscriptionEvent.parameters = new Array()

  schemaSubscriptionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  schemaSubscriptionEvent.parameters.push(
    new ethereum.EventParam(
      "schemaUID",
      ethereum.Value.fromFixedBytes(schemaUID)
    )
  )
  schemaSubscriptionEvent.parameters.push(
    new ethereum.EventParam(
      "subscriptionEndAt",
      ethereum.Value.fromUnsignedBigInt(subscriptionEndAt)
    )
  )

  return schemaSubscriptionEvent
}
