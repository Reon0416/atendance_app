"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// Import directly from the generated Prisma client to avoid the new
// `#main-entry-point` indirection that fails to resolve in our runtime.
const client_1 = require("../node_modules/.prisma/client");
exports.prisma = new client_1.PrismaClient();
