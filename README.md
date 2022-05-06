# steps to reproduce

1. `npm ci`
2. `npm run prisma-generate`
3. `npm run web-dev`
4. navigate to [http://localhost:3000/api/test](http://localhost:3000/api/test)

the console will output:

```
wait  - compiling /api/test...
wait  - compiling...
event - compiled client and server successfully in 549 ms (151 modules)
error - Error: ENOENT: no such file or directory, open '/opt/dev/workspaces/web/.next/cache/webpack/client-development/schema.prisma'
```
