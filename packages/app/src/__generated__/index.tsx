import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Long: any,
};

export type AggregateTransaction = {
   __typename?: 'AggregateTransaction',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createTransaction: Transaction,
  updateTransaction?: Maybe<Transaction>,
  deleteTransaction?: Maybe<Transaction>,
  upsertTransaction: Transaction,
  updateManyTransactions: BatchPayload,
  deleteManyTransactions: BatchPayload,
};


export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput
};


export type MutationUpdateTransactionArgs = {
  data: TransactionUpdateInput,
  where: TransactionWhereUniqueInput
};


export type MutationDeleteTransactionArgs = {
  where: TransactionWhereUniqueInput
};


export type MutationUpsertTransactionArgs = {
  where: TransactionWhereUniqueInput,
  create: TransactionCreateInput,
  update: TransactionUpdateInput
};


export type MutationUpdateManyTransactionsArgs = {
  data: TransactionUpdateManyMutationInput,
  where?: Maybe<TransactionWhereInput>
};


export type MutationDeleteManyTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  transactions: Array<Maybe<Transaction>>,
  transaction?: Maybe<Transaction>,
  transactionsConnection: TransactionConnection,
  node?: Maybe<Node>,
};


export type QueryTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
};


export type QueryTransactionsConnectionArgs = {
  where?: Maybe<TransactionWhereInput>,
  orderBy?: Maybe<TransactionOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  transaction?: Maybe<TransactionSubscriptionPayload>,
};


export type SubscriptionTransactionArgs = {
  where?: Maybe<TransactionSubscriptionWhereInput>
};

export type Transaction = Node & {
   __typename?: 'Transaction',
  id: Scalars['ID'],
  label: Scalars['String'],
  amount: Scalars['Float'],
};

export type TransactionConnection = {
   __typename?: 'TransactionConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TransactionEdge>>,
  aggregate: AggregateTransaction,
};

export type TransactionCreateInput = {
  id?: Maybe<Scalars['ID']>,
  label: Scalars['String'],
  amount: Scalars['Float'],
};

export type TransactionEdge = {
   __typename?: 'TransactionEdge',
  node: Transaction,
  cursor: Scalars['String'],
};

export enum TransactionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC'
}

export type TransactionPreviousValues = {
   __typename?: 'TransactionPreviousValues',
  id: Scalars['ID'],
  label: Scalars['String'],
  amount: Scalars['Float'],
};

export type TransactionSubscriptionPayload = {
   __typename?: 'TransactionSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Transaction>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TransactionPreviousValues>,
};

export type TransactionSubscriptionWhereInput = {
  AND?: Maybe<Array<TransactionSubscriptionWhereInput>>,
  OR?: Maybe<Array<TransactionSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TransactionSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TransactionWhereInput>,
};

export type TransactionUpdateInput = {
  label?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Float']>,
};

export type TransactionUpdateManyMutationInput = {
  label?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Float']>,
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<TransactionWhereInput>>,
  OR?: Maybe<Array<TransactionWhereInput>>,
  NOT?: Maybe<Array<TransactionWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  label?: Maybe<Scalars['String']>,
  label_not?: Maybe<Scalars['String']>,
  label_in?: Maybe<Array<Scalars['String']>>,
  label_not_in?: Maybe<Array<Scalars['String']>>,
  label_lt?: Maybe<Scalars['String']>,
  label_lte?: Maybe<Scalars['String']>,
  label_gt?: Maybe<Scalars['String']>,
  label_gte?: Maybe<Scalars['String']>,
  label_contains?: Maybe<Scalars['String']>,
  label_not_contains?: Maybe<Scalars['String']>,
  label_starts_with?: Maybe<Scalars['String']>,
  label_not_starts_with?: Maybe<Scalars['String']>,
  label_ends_with?: Maybe<Scalars['String']>,
  label_not_ends_with?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Float']>,
  amount_not?: Maybe<Scalars['Float']>,
  amount_in?: Maybe<Array<Scalars['Float']>>,
  amount_not_in?: Maybe<Array<Scalars['Float']>>,
  amount_lt?: Maybe<Scalars['Float']>,
  amount_lte?: Maybe<Scalars['Float']>,
  amount_gt?: Maybe<Scalars['Float']>,
  amount_gte?: Maybe<Scalars['Float']>,
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CreateTransactionMutationVariables = {
  data: TransactionCreateInput
};


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount'>
  ) }
);

export type DeleteAllTransactionsMutationVariables = {};


export type DeleteAllTransactionsMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyTransactions: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type DeleteTransactionMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTransactionMutation = (
  { __typename?: 'Mutation' }
  & { deleteTransaction: Maybe<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id'>
  )> }
);

export type GetTransactionsQueryVariables = {};


export type GetTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<Maybe<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'label'>
  )>> }
);


export const CreateTransactionDocument = gql`
    mutation createTransaction($data: TransactionCreateInput!) {
  createTransaction(data: $data) {
    id
    amount
  }
}
    `;
export type CreateTransactionMutationFn = ApolloReactCommon.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, baseOptions);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = ApolloReactCommon.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const DeleteAllTransactionsDocument = gql`
    mutation deleteAllTransactions {
  deleteManyTransactions(where: {}) {
    count
  }
}
    `;
export type DeleteAllTransactionsMutationFn = ApolloReactCommon.MutationFunction<DeleteAllTransactionsMutation, DeleteAllTransactionsMutationVariables>;

/**
 * __useDeleteAllTransactionsMutation__
 *
 * To run a mutation, you first call `useDeleteAllTransactionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllTransactionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllTransactionsMutation, { data, loading, error }] = useDeleteAllTransactionsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAllTransactionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAllTransactionsMutation, DeleteAllTransactionsMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAllTransactionsMutation, DeleteAllTransactionsMutationVariables>(DeleteAllTransactionsDocument, baseOptions);
      }
export type DeleteAllTransactionsMutationHookResult = ReturnType<typeof useDeleteAllTransactionsMutation>;
export type DeleteAllTransactionsMutationResult = ApolloReactCommon.MutationResult<DeleteAllTransactionsMutation>;
export type DeleteAllTransactionsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAllTransactionsMutation, DeleteAllTransactionsMutationVariables>;
export const DeleteTransactionDocument = gql`
    mutation deleteTransaction($id: ID!) {
  deleteTransaction(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTransactionMutationFn = ApolloReactCommon.MutationFunction<DeleteTransactionMutation, DeleteTransactionMutationVariables>;

/**
 * __useDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionMutation, { data, loading, error }] = useDeleteTransactionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTransactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTransactionMutation, DeleteTransactionMutationVariables>(DeleteTransactionDocument, baseOptions);
      }
export type DeleteTransactionMutationHookResult = ReturnType<typeof useDeleteTransactionMutation>;
export type DeleteTransactionMutationResult = ApolloReactCommon.MutationResult<DeleteTransactionMutation>;
export type DeleteTransactionMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>;
export const GetTransactionsDocument = gql`
    query getTransactions {
  transactions {
    id
    amount
    label
  }
}
    `;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
      }
export function useGetTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = ApolloReactCommon.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;