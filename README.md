<p align="center">
  <img src="https://res.cloudinary.com/drhrbob2m/image/upload/v1675303246/favicons/apple-120x120-touch-icon_a8pjpk.png" />
</p>

# Quantum Assessment

1. [Overview](#overview)
2. [Goal](#goal)
3. [Tech Stack](#assessment-tech-stack)
4. [Getting started](#getting-starter)
5. [Configuration](#configuration-env-file)
6. [Tables](#tables)
7. [Sample Files](#sample-files)

## Overview

This repo will implement a simplified version of Quantum and its data ingestion and consolidation functionality. This version is highly simplified.

The production version uses industry-standard authentication and authorization engine, logging, and implements other best practices.

The purpose is to understand your engineering approach and familiarity with core APIs and workflows that would be the foundation of the overall project.

## Goal

As part of this assessment, I'd like you to implement the following functionality: a user should be able to upload files and his/her email to Quantum. Based on the email, Quantum should parse the file using a specific template and save the data in the appropriate table. If the email is not listed in section [Sample Data](#sample-data), reject the file and log a message to the `alerts` table.

The repo includes placeholder files that should implement the capability.

- `pages/index.tsx` implement Mantine's Drag and Drop feature to enable uploading of CSV and Excel files into the system

- `pages/api/files/upload.ts` API route implement the server-side portion of saving the file in a Google Drive, parse its content, and save it into a Hasura database

- `pages/alerts.tsx` should list all errors from the `alerts` table

- `pages/list.tsx` (no work needed) shows a server-side rendered listing of all files that have been uploaded

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

## Getting started

1. In the root of the project install dependencies with `yarn install`
2. Run the dev version with `yarn dev`
3. Visit the page at `http://localhost:3000`

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

The following tables have been set up in Hasura already. Note that in the sample XLSX files the `id` corresponds to the `questionnaireId` column in the `questionnaires.` In contrast, `questionnaires.id` column is a primary key and it's automatically and uniquely generated UUID.

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

| Column            | Type                                                  |
| ----------------- | ----------------------------------------------------- |
| address           | text                                                  |
| city              | text                                                  |
| country           | text                                                  |
| createdAt         | timestamp with time zone, default: now()              |
| id                | uuid, primary key, unique, default: gen_random_uuid() |
| input             | text                                                  |
| name              | text                                                  |
| partner           | text                                                  |
| position          | text                                                  |
| promptId          | text                                                  |
| questionBank      | text                                                  |
| questionnaireDate | date: YYYY-MM-DD                                      |
| questionnaireId   | text                                                  |
| response          | text                                                  |
| responseType      | text                                                  |
| state             | text                                                  |
| storeId           | text                                                  |
| storeNumber       | text                                                  |
| text              | text                                                  |
| updatedAt         | timestamp with time zone, default: now()              |
| zipCode           | text                                                  |

### lessons

| Column       | Type                                                  |
| ------------ | ----------------------------------------------------- |
| createdAt    | timestamp with time zone, default: now()              |
| id           | uuid, primary key, unique, default: gen_random_uuid() |
| updatedAt    | timestamp with time zone, default: now()              |
| class        | text                                                  |
| lesson       | text                                                  |
| lessonStatus | text                                                  |
| lessonDate   | date: YYYY-MM-DD                                      |
| user         | text                                                  |

### alerts

| Column    | Type                                                  |
| --------- | ----------------------------------------------------- |
| createdAt | timestamp with time zone, default: now()              |
| id        | uuid, primary key, unique, default: gen_random_uuid() |
| updatedAt | timestamp with time zone, default: now()              |
| filename  | text                                                  |
| message   | text                                                  |

## Sample files

The folder `demoData/` includes 3 sample files for your testing:

- `demoData1.xslx` should be used with email sample@ask.com and be parsed into the `questionnaires` table. The
- `demoData2.xslx` should be used with email sample@question.com and also be parsed into `questionnaires` table
  - Keep in mind that the structure of those two files is different even though they contain the same type of data. Please parse them accordingly so the data can be consolidated
- `demoData3.xslx` should be used with email sample@train.com and be parsed into the `lessons` table

When there are common columns across data (for example, the country column in `demoData1` and `demoData2`), see if you can standardize the values in them (eg, instead of saving UK and United Kingdom, force all UK mentions to be United Kingdom).
