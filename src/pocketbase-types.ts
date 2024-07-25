/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Poll = "poll",
	PollOptions = "poll_options",
	PollVotes = "poll_votes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type PollRecord = {
	closed?: boolean
	description?: HTMLString
	slug: string
	title: string
}

export type PollOptionsRecord = {
	name: string
	poll: RecordIdString
	value: string
}

export type PollVotesRecord = {
	poll: RecordIdString
	poll_option: RecordIdString
	user_id: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type PollResponse<Texpand = unknown> = Required<PollRecord> & BaseSystemFields<Texpand>
export type PollOptionsResponse<Texpand = unknown> = Required<PollOptionsRecord> & BaseSystemFields<Texpand>
export type PollVotesResponse<Texpand = unknown> = Required<PollVotesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	poll: PollRecord
	poll_options: PollOptionsRecord
	poll_votes: PollVotesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	poll: PollResponse
	poll_options: PollOptionsResponse
	poll_votes: PollVotesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'poll'): RecordService<PollResponse>
	collection(idOrName: 'poll_options'): RecordService<PollOptionsResponse>
	collection(idOrName: 'poll_votes'): RecordService<PollVotesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
