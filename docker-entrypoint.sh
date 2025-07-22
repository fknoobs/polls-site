#!/bin/bash

# Apply migrations
npx prisma migrate deploy
npx prisma generate

exec "$@"