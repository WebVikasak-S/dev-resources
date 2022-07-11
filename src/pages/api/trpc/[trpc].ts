// src/pages/api/trpc/[trpc].ts
import { inferProcedureOutput } from '@trpc/server';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { AppRouter, appRouter } from '../../../server/router';
import { createContext } from '../../../server/router/context';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // send to bug reporting
      console.error('Something went wrong', error);
    }
  },
});

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter['_def']['queries']
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
