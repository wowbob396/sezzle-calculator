/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserCalculationInput = {
  id?: string | null,
  username: string,
  timestamp: string,
  calculation: string,
};

export type UpdateUserCalculationInput = {
  id: string,
  username?: string | null,
  timestamp?: string | null,
  calculation?: string | null,
};

export type DeleteUserCalculationInput = {
  id?: string | null,
};

export type ModelUserCalculationFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  timestamp?: ModelStringFilterInput | null,
  calculation?: ModelStringFilterInput | null,
  and?: Array< ModelUserCalculationFilterInput | null > | null,
  or?: Array< ModelUserCalculationFilterInput | null > | null,
  not?: ModelUserCalculationFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserCalculationMutationVariables = {
  input: CreateUserCalculationInput,
};

export type CreateUserCalculationMutation = {
  createUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    username: string,
    timestamp: string,
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserCalculationMutationVariables = {
  input: UpdateUserCalculationInput,
};

export type UpdateUserCalculationMutation = {
  updateUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    username: string,
    timestamp: string,
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserCalculationMutationVariables = {
  input: DeleteUserCalculationInput,
};

export type DeleteUserCalculationMutation = {
  deleteUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    username: string,
    timestamp: string,
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserCalculationQueryVariables = {
  id: string,
};

export type GetUserCalculationQuery = {
  getUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    username: string,
    timestamp: string,
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserCalculationsQueryVariables = {
  filter?: ModelUserCalculationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCalculationsQuery = {
  listUserCalculations:  {
    __typename: "ModelUserCalculationConnection",
    items:  Array< {
      __typename: "UserCalculation",
      id: string,
      username: string,
      timestamp: string,
      calculation: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UserCalculationCreatedSubscriptionVariables = {
  username: string,
};

export type UserCalculationCreatedSubscription = {
  userCalculationCreated:  {
    __typename: "UserCalculation",
    id: string,
    username: string,
    timestamp: string,
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
