import { siteConfig } from "./site";
import { routeMeta, getRouteOgImage } from "./routes";

export const routeSeo = Object.fromEntries(
  Object.entries(routeMeta).map(([path, meta]) => [
    path,
    {
      ...meta,
      ogImage: getRouteOgImage(path),
    },
  ])
);

export { routeMeta, getRouteOgImage };
export { siteConfig };
