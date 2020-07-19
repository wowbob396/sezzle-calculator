/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userCalculationCreated = /* GraphQL */ `
  subscription UserCalculationCreated($username: String!) {
    userCalculationCreated(username: $username) {
      id
      username
      timestamp
      calculation
      createdAt
      updatedAt
    }
  }
`;
