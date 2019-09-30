export const getRouterConfig = (BrowserRouter, StaticRouter) => {
  let Router = BrowserRouter;
  if (!window) { Router = StaticRouter; }
  return Router;
}
