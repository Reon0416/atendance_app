// import Module from "module";

// // Node fails to resolve Prisma's internal `#main-entry-point` specifier in this
// // environment, so rewrite it to the generated client's index file manually.
// const originalResolveFilename = (Module as any)._resolveFilename;
// const prismaMainEntry = require.resolve(".prisma/client/index.js");

// (Module as any)._resolveFilename = function patchedResolveFilename(
//   request: string,
//   parent: NodeModule | null,
//   isMain: boolean,
//   options: any
// ) {
//   if (request === "#main-entry-point") {
//     request = prismaMainEntry;
//   }
//   return originalResolveFilename.call(this, request, parent, isMain, options);
// };
