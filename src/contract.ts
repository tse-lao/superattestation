import {
  ApprovalForAll as ApprovalForAllEvent,
  SchemaRegistered as SchemaRegisteredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  schemaSubscription as schemaSubscriptionEvent
} from "../generated/Contract/Contract"
import {
  ApprovalForAll,
  SchemaRegistered,
  TransferBatch,
  TransferSingle,
  URI,
  schemaSubscription
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSchemaRegistered(event: SchemaRegisteredEvent): void {
  let entity = new SchemaRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.description = event.params.description
  entity.tags = event.params.tags
  entity.schemaUID = event.params.schemaUID
  entity.resolver = event.params.resolver
  entity.attestResolutionDays = event.params.attestResolutionDays
  entity.schema = event.params.schema
  entity.mintPrice = event.params.mintPrice
  entity.attestReward = event.params.attestReward
  entity.isMintable = event.params.isMintable

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.Contract_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.Contract_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleschemaSubscription(event: schemaSubscriptionEvent): void {
  let entity = new schemaSubscription(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.schemaUID = event.params.schemaUID
  entity.subscriptionEndAt = event.params.subscriptionEndAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
