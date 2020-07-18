/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSezzleType = /* GraphQL */ `
  subscription OnCreateSezzleType {
    onCreateSezzleType {
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
export const onUpdateSezzleType = /* GraphQL */ `
  subscription OnUpdateSezzleType {
    onUpdateSezzleType {
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
export const onDeleteSezzleType = /* GraphQL */ `
  subscription OnDeleteSezzleType {
    onDeleteSezzleType {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      data_timezone
      data_timestamp
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCalculation = /* GraphQL */ `
  subscription OnCreateUserCalculation {
    onCreateUserCalculation {
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
export const onUpdateUserCalculation = /* GraphQL */ `
  subscription OnUpdateUserCalculation {
    onUpdateUserCalculation {
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
export const onDeleteUserCalculation = /* GraphQL */ `
  subscription OnDeleteUserCalculation {
    onDeleteUserCalculation {
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
