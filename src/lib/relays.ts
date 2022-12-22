// /*
// Note: if you'd like to add your relay, please add the alias too!
// use short alias, replace space with a dot `.`
// */

interface RelayInterface {
  name: string,
  alias: string,
}

export const relayList: RelayInterface[] = [
  { name: "wss://nostr-relay.nonce.academy", alias: 'nonce.academy' }
];
