import type { PollOptionsResponse, PollResponse, PollVotesResponse } from "../../../pocketbase-types"

export type Option = PollOptionsResponse
export type Poll = PollResponse
export type Vote = PollVotesResponse

export type PollProps = Poll & {
    options: Option[]
    votes: Vote[]
}