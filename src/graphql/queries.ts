/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserCalculation = /* GraphQL */ `
  query GetUserCalculation($id: ID!) {
    getUserCalculation(id: $id) {
      id
      username
      timestamp
      calculation
      createdAt
      updatedAt
    }
  }
`;
export const listUserCalculations = /* GraphQL */ `
  query ListUserCalculations(
    $filter: ModelUserCalculationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCalculations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        timestamp
        calculation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
