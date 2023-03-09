# Quantum Assessment

1. [Overview](#overview)
2. [Goal](#goal)
3. [Tech Stack](#assessment-tech-stack)
4. [Configuration](#configuration-env-file)
5. [Tables](#tables)

## Overview

This repo will implement a simplified version of Quantum and its data ingestion and consolidation functionality. This version is highly simplified.

The production version uses industry-standard authentication and authorization engine, logging, and implements other best practices.

The purpose is to understand your engineering approach and familiarity with core APIs and workflows that would be the foundation of the overall project.

## Goal

As part of this assessment, I'd like you to implement the following functionality: a user should be able to upload files and his/her email to Quantum. Based on the email, Quantum should parse the file using a specific template and save the data in the appropriate table.

The repo includes a placeholder files that should implement the capability.

- `pages/index.tsx` implement Mantine's Drag and Drop feature to enable uploading of CSV and Excel files into the system

- `pages/api/files/upload.ts` API route implement the server-side portion of saving the file in a Google Drive, parse its content, and save it into a Hasura database

- `pages/list.tsx` shows a server-side rendered listing of all files that have been uploaded

I have added placeholders or comments with more specific, but still high-level instructions.

It's up to you to organize your code and to bring in other dependencies as needed. Provide basic Jest tests for the core functions.

I have set up a demo Hasura Cloud instance for you, no configuration is needed. An Apollo Client is configured in the repo to connect to it. You will need to get your own Google Cloud Storage credentials (see [Configuration](#configuration-env-file) section below).

## Assessment tech stack

- [Next.js](https://nextjs.org/) for front-end and back-end
- [Hasura Cloud](https://hasura.io/) for GraphQL database on top of PostgreSQL
- [Tailwind](https://tailwindui.com/) for layout design
- [Mantine](https://mantine.dev/) as a components library
- [Apollo Client](https://www.apollographql.com/docs/react/) for accessing Hasura
- [Google Cloud Storage](https://cloud.google.com/storage/docs) for storing the raw files

## Configuration (.env file)

### Preset in Codespace

Used in `lib/apollo.ts`

```
HASURA_ADMIN_SECRET=
HASURA_URL=
```

### Set based on your Google Cloud project

Used in `lib/storage.ts`

```
PROJECT_ID=
CLIENT_EMAIL=
PRIVATE_KEY=
```

## Tables

The following tables have been set up in Hasura already. No

### files

| Column    | Type                                                  |
| --------- | ----------------------------------------------------- |
| createdAt | timestamp with time zone, default: now()              |
| email     | text                                                  |
| fileName  | text                                                  |
| id        | uuid, primary key, unique, default: gen_random_uuid() |
| status    | text                                                  |
| updatedAt | timestamp with time zone, default: now()              |
| url       | text                                                  |

### questionnaires

| Column          | Type                                                  |
| --------------- | ----------------------------------------------------- |
| address         | text                                                  |
| city            | text                                                  |
| createdAt       | timestamp with time zone, default: now()              |
| id              | uuid, primary key, unique, default: gen_random_uuid() |
| input           | text                                                  |
| name            | text                                                  |
| partner         | text                                                  |
| position        | text                                                  |
| promptId        | text                                                  |
| questionBank    | text                                                  |
| questionnaireId | text                                                  |
| response        | text                                                  |
| responseType    | text                                                  |
| state           | text                                                  |
| storeId         | text                                                  |
| storeNumber     | text                                                  |
| text            | text                                                  |
| updatedAt       | timestamp with time zone, default: now()              |
| zipCode         | text                                                  |

###
