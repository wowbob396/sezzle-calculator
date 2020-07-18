/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSezzleType = /* GraphQL */ `
  mutation CreateSezzleType($input: CreateSezzleTypeInput!) {
    createSezzleType(input: $input) {
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
export const updateSezzleType = /* GraphQL */ `
  mutation UpdateSezzleType($input: UpdateSezzleTypeInput!) {
    updateSezzleType(input: $input) {
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
export const deleteSezzleType = /* GraphQL */ `
  mutation DeleteSezzleType($input: DeleteSezzleTypeInput!) {
    deleteSezzleType(input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const createUserCalculation = /* GraphQL */ `
  mutation CreateUserCalculation($input: CreateUserCalculationInput!) {
    createUserCalculation(input: $input) {
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
export const updateUserCalculation = /* GraphQL */ `
  mutation UpdateUserCalculation($input: UpdateUserCalculationInput!) {
    updateUserCalculation(input: $input) {
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
export const deleteUserCalculation = /* GraphQL */ `
  mutation DeleteUserCalculation($input: DeleteUserCalculationInput!) {
    deleteUserCalculation(input: $input) {
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
