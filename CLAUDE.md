@AGENTS.md

## Database
After any changes to models in `prisma/schema.prisma`, always run:
```bash
yarn prisma migrate dev --name <migration_name>
```
