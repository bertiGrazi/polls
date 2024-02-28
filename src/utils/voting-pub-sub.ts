type Message = { pollOptionId: string, votes: number }
type Subscriber = (message: Message) => void 

class VotingPubSub {
  private channels: Record<string, Subscriber[]> = {}

  subscribe(pollId:string, subscribe: Subscriber) {
    if (!this.channels[pollId]) {
      this.channels[pollId] = []
    }

    this.channels[pollId].push(subscribe)
  }

  publish(pollID: string, message: Message) {
    if (!this.channels[pollID]) {
      return;
    }  for (const subscribe of this.channels[pollID]) {
      subscribe(message)
    }
  }
}

export const voting = new VotingPubSub()