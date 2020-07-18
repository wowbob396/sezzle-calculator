/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSezzleTypeInput = {
  id?: string | null,
  title: string,
  content: string,
  price?: number | null,
  rating?: number | null,
};

export type UpdateSezzleTypeInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  price?: number | null,
  rating?: number | null,
};

export type DeleteSezzleTypeInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  data_timezone: string,
  data_timestamp: number,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  data_timezone?: string | null,
  data_timestamp?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateUserCalculationInput = {
  id?: string | null,
  calculation: string,
};

export type UpdateUserCalculationInput = {
  id: string,
  calculation?: string | null,
};

export type DeleteUserCalculationInput = {
  id?: string | null,
};

export type ModelSezzleTypeFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  price?: ModelIntFilterInput | null,
  rating?: ModelFloatFilterInput | null,
  and?: Array< ModelSezzleTypeFilterInput | null > | null,
  or?: Array< ModelSezzleTypeFilterInput | null > | null,
  not?: ModelSezzleTypeFilterInput | null,
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

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  data_timezone?: ModelStringFilterInput | null,
  data_timestamp?: ModelIntFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserCalculationFilterInput = {
  id?: ModelIDFilterInput | null,
  calculation?: ModelStringFilterInput | null,
  and?: Array< ModelUserCalculationFilterInput | null > | null,
  or?: Array< ModelUserCalculationFilterInput | null > | null,
  not?: ModelUserCalculationFilterInput | null,
};

export type CreateSezzleTypeMutationVariables = {
  input: CreateSezzleTypeInput,
};

export type CreateSezzleTypeMutation = {
  createSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSezzleTypeMutationVariables = {
  input: UpdateSezzleTypeInput,
};

export type UpdateSezzleTypeMutation = {
  updateSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSezzleTypeMutationVariables = {
  input: DeleteSezzleTypeInput,
};

export type DeleteSezzleTypeMutation = {
  deleteSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCalculationMutationVariables = {
  input: CreateUserCalculationInput,
};

export type CreateUserCalculationMutation = {
  createUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSezzleTypeQueryVariables = {
  id: string,
};

export type GetSezzleTypeQuery = {
  getSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSezzleTypesQueryVariables = {
  filter?: ModelSezzleTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSezzleTypesQuery = {
  listSezzleTypes:  {
    __typename: "ModelSezzleTypeConnection",
    items:  Array< {
      __typename: "SezzleType",
      id: string,
      title: string,
      content: string,
      price: number | null,
      rating: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserCalculationQueryVariables = {
  id: string,
};

export type GetUserCalculationQuery = {
  getUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
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
      user:  {
        __typename: "User",
        id: string,
        username: string,
        data_timezone: string,
        data_timestamp: number,
        createdAt: string,
        updatedAt: string,
      },
      calculation: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSezzleTypeSubscription = {
  onCreateSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSezzleTypeSubscription = {
  onUpdateSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSezzleTypeSubscription = {
  onDeleteSezzleType:  {
    __typename: "SezzleType",
    id: string,
    title: string,
    content: string,
    price: number | null,
    rating: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    data_timezone: string,
    data_timestamp: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCalculationSubscription = {
  onCreateUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserCalculationSubscription = {
  onUpdateUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserCalculationSubscription = {
  onDeleteUserCalculation:  {
    __typename: "UserCalculation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      data_timezone: string,
      data_timestamp: number,
      createdAt: string,
      updatedAt: string,
    },
    calculation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
