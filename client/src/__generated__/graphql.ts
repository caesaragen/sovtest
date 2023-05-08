/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PeopleResult = {
  __typename?: 'PeopleResult';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Person>>>;
};

export type Person = {
  __typename?: 'Person';
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  mass?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allPeople?: Maybe<PeopleResult>;
  getPerson?: Maybe<Person>;
};


export type QueryAllPeopleArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPersonArgs = {
  name: Scalars['String'];
};
