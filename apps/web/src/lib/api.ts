import type { ContractCallTransaction } from "@stacks/stacks-blockchain-api-types";
import type { Protocol } from "@stackspulse/protocols";

/**
 * `/api/protocols/users`
 */

export type ProtocolUsersRouteResponse = {
  protocol_name: Protocol;
  unique_senders: number;
}[];

export type ProtocolUsersRouteQuery = {
  /**
   * Date range to query
   */
  date: "7d" | "30d" | "all";
  /**
   * Limit the number of results returned, defaults to 10
   * Minimum: 1
   * Maximum: 100
   */
  limit?: number;
};

/**
 * `/api/transactions`
 */

export type TransactionsRouteResponse = (ContractCallTransaction & {
  protocol: Protocol;
})[];

/**
 * `/api/transactions/stats`
 */

export type TransactionStatsRouteResponse = {
  count: number;
  unique_senders: number;
};

export type TransactionStatsRouteQuery = {
  protocol?: Protocol;
};

/**
 * `/api/protocols/stackingdao`
 */

export type StackingDAOProtocolStatsResponse = {
  month: string;
  deposits: number;
  withdrawals: number;
}[];
