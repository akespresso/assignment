# Quantum Assessment

## Configuration (.env file)

### Preset in Codespace

```
HASURA_ADMIN_SECRET=
HASURA_URL=
```

### Set based on your Google Cloud project

```
PROJECT_ID=
CLIENT_EMAIL=
PRIVATE_KEY=
```

## Tables

Set up in Hasura

_Files_
| Column | Type |
| --- | ------ |
| id | uuid |
| fileName | text |
| url | text |
| email | text |
| status | text |
| createdAt | date |
| updatedAt | date |
