/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSezzleType = /* GraphQL */ `
  query GetSezzleType($id: ID!) {
    getSezzleType(id: $id) {
      id
      title
      content
      price
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listSezzleTypes = /* GraphQL */ `
  query ListSezzleTypes(
    $filter: ModelSezzleTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSezzleTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        price
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        data_timezone
        data_timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCalculation = /* GraphQL */ `
  query GetUserCalculation($id: ID!) {
    getUserCalculation(id: $id) {
      id
      user {
        id
        username
        data_timezone
        data_timestamp
        createdAt
        updatedAt
      }
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
        user {
          id
          username
          data_timezone
          data_timestamp
          createdAt
          updatedAt
        }
        calculation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
