export const protocols = ["alex", "arkadiko"] as const;

export type Protocol = (typeof protocols)[number];

export const isProtocol = (value: string): value is Protocol =>
  protocols.includes(value as Protocol);

export const protocolsInfo = {
  alex: {
    name: "Alex",
    description:
      "Next Gen DeFi on Bitcoin via Stacks. Building Financial Infrastructure on Bitcoin through Stacks.",
    website: "https://alexgo.io/",
    x: "https://twitter.com/ALEXLabBTC",
  },
  arkadiko: {
    name: "Arkadiko",
    description:
      "Arkadiko is a decentralized, non-custodial liquidity protocol where users can collateralize their assets and mint a stablecoin called USDA.",
    website: "https://arkadiko.finance/",
    x: "https://twitter.com/ArkadikoFinance",
  },
} as const;
