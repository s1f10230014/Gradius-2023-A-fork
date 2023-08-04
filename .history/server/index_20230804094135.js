"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/velona/dist/index.js
var require_dist = __commonJS({
  "node_modules/velona/dist/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spread = exports && exports.__spread || function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.depend = void 0;
    var depend13 = function(dependencies, cb) {
      var fn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return cb.apply(void 0, __spread([dependencies], args));
      };
      fn.inject = function(deps) {
        return typeof deps === "function" ? exports.depend(__assign(__assign({}, dependencies), deps(dependencies)), cb) : exports.depend(__assign(__assign({}, dependencies), deps), cb);
      };
      return fn;
    };
    exports.depend = depend13;
  }
});

// service/envValues.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var PORT = +(process.env.PORT ?? "8080");
var API_BASE_PATH = process.env.API_BASE_PATH ?? "";
var API_ORIGIN = process.env.API_ORIGIN ?? "";
var CORS_ORIGIN = process.env.CORS_ORIGIN ?? "";
var FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST;
var FIREBASE_SERVER_KEY = process.env.FIREBASE_SERVER_KEY ?? "";

// middleware/firebaseAdmin.ts
var import_firebase_admin = __toESM(require("firebase-admin"));
var firebaseAdmin = import_firebase_admin.default.initializeApp(
  FIREBASE_AUTH_EMULATOR_HOST !== void 0 ? { projectId: "emulator" } : { credential: import_firebase_admin.default.credential.cert(JSON.parse(FIREBASE_SERVER_KEY)) }
);
var getUserModel = async (cookieVal) => {
  const auth = firebaseAdmin.auth();
  const idToken = await auth.verifySessionCookie(cookieVal ?? "", true).catch(() => null);
  return idToken && await auth.getUser(idToken.uid);
};

// service/idParsers.ts
var import_zod = require("zod");
var UserIdParser = import_zod.z.string().brand();
var taskIdParser = import_zod.z.string().brand();
var EnemyIdParser = import_zod.z.string().brand();

// api/me/$relay.ts
var import_velona = __toESM(require_dist());
function defineHooks(hooks, cb) {
  return cb && typeof hooks !== "function" ? (0, import_velona.depend)(hooks, cb) : hooks;
}
function defineController(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona.depend)(methods, cb) : methods;
}

// api/me/hooks.ts
var hooks_default = defineHooks(() => ({
  preHandler: async (req, res) => {
    const user = await getUserModel(req.cookies.session);
    if (!user) {
      res.status(401).send();
      return;
    }
    req.user = {
      id: UserIdParser.parse(user.uid),
      email: user.email ?? "",
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  }
}));

// api/tasks/_taskId@string/validators.ts
var import_zod2 = require("zod");

// api/tasks/_taskId@string/$relay.ts
var import_velona2 = __toESM(require_dist());
function defineValidators(validator) {
  return validator;
}
function defineController2(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona2.depend)(methods, cb) : methods;
}

// api/tasks/_taskId@string/validators.ts
var validators_default = defineValidators(() => ({
  params: import_zod2.z.object({ taskId: import_zod2.z.string() })
}));

// api/$relay.ts
var import_velona3 = __toESM(require_dist());
function defineController3(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona3.depend)(methods, cb) : methods;
}

// api/controller.ts
var controller_default = defineController3(() => ({
  get: () => ({ status: 200, body: "" })
}));

// service/prismaClient.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();

// repository/enemyRepository.ts
var import_zod3 = require("zod");
var toEnemyModel = (prismaEnemy) => ({
  id: EnemyIdParser.parse(prismaEnemy.id),
  pos: import_zod3.z.object({
    x: import_zod3.z.number(),
    y: import_zod3.z.number()
  }).parse(prismaEnemy.pos),
  speed: import_zod3.z.number().parse(prismaEnemy.speed),
  hp: import_zod3.z.number().parse(prismaEnemy.hp),
  radius: import_zod3.z.number().parse(prismaEnemy.radius)
});
var enemyRepository = {
  getEnemies: async () => {
    const prismaEnemy = await prismaClient.enemy.findMany();
    return prismaEnemy.map(toEnemyModel);
  },
  save: async (enemy) => {
    await prismaClient.enemy.upsert({
      where: { id: enemy.id },
      update: {
        pos: enemy.pos,
        speed: enemy.speed,
        hp: enemy.hp,
        radius: enemy.radius
      },
      create: {
        id: enemy.id,
        pos: enemy.pos,
        speed: enemy.speed,
        hp: enemy.hp,
        radius: enemy.radius
      }
    });
  },
  declare: async (id) => {
    await prismaClient.enemy.delete({
      where: { id }
    });
  }
};

// usecase/enemyUsecase.ts
var import_crypto = require("crypto");
var enemyUsecase = {
  getEnemies: async () => {
    return await enemyRepository.getEnemies();
  }
};
console.log("R");
setInterval(() => {
  create_enemy();
}, 9e3);
setInterval(() => {
  move_Enemy();
  delete_off_screen_enemy();
}, 100);
var enemy_first_pos_x = 1800;
var enemy_speed = 5;
var enemy_radius = 20;
var enemy_hp = 10;
var create_enemy = async () => {
  const new_enemy = {
    id: EnemyIdParser.parse((0, import_crypto.randomUUID)()),
    pos: { x: enemy_first_pos_x, y: Math.floor(Math.random() * 690) + 1 },
    speed: enemy_speed,
    hp: enemy_hp,
    radius: enemy_radius
  };
  await enemyRepository.save(new_enemy);
};
var move_Enemy = async () => {
  const enemies = await enemyRepository.getEnemies();
  for (const enemy of enemies) {
    const moved_enemy = {
      ...enemy,
      pos: { x: enemy.pos.x - 8, y: enemy.pos.y }
    };
    await enemyRepository.save(moved_enemy);
  }
};
var delete_off_screen_enemy = async () => {
  let enemies = await enemyRepository.getEnemies();
  enemies = enemies.filter((enemy) => {
    if (enemy.pos.x < 50) {
      enemyRepository.declare(enemy.id);
      return false;
    } else {
      return true;
    }
  });
  enemies.map((enemy) => enemyRepository.save(enemy));
};

// api/check/$relay.ts
var import_velona4 = __toESM(require_dist());
function defineController4(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona4.depend)(methods, cb) : methods;
}

// api/check/controller.ts
var controller_default2 = defineController4(() => ({
  get: async () => ({ status: 200, body: await enemyUsecase.getEnemies() })
}));

// api/health/$relay.ts
var import_velona5 = __toESM(require_dist());
function defineController5(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona5.depend)(methods, cb) : methods;
}

// api/health/controller.ts
var controller_default3 = defineController5(() => ({
  get: () => ({ status: 200, body: "ok" })
}));

// api/ip/controller.ts
var import_ip = __toESM(require("ip"));

// api/ip/$relay.ts
var import_velona6 = __toESM(require_dist());
function defineController6(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona6.depend)(methods, cb) : methods;
}

// api/ip/controller.ts
var controller_default4 = defineController6(() => ({
  get: () => ({ status: 200, body: import_ip.default.address() })
}));

// api/me/controller.ts
var controller_default5 = defineController(() => ({
  get: ({ user }) => {
    return { status: 200, body: user };
  }
}));

// api/rooms/$relay.ts
var import_velona7 = __toESM(require_dist());
function defineController7(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona7.depend)(methods, cb) : methods;
}

// api/rooms/controller.ts
var controller_default6 = defineController7(() => ({
  get: () => ({ status: 200, body: "Hello" })
}));

// usecase/playerUsecase.ts
var position = [[50, 500]];
var gunPosition = [[]];
var gunShot = async () => {
  console.log("gunShot\u52D5\u4F5C");
  gunPosition.push([position[0][0] + 50, position[0][1] + 25]);
};
setInterval(() => {
  moveGun();
}, 5);
var moveGun = () => {
  const newGunPosition = [];
  for (const s of gunPosition) {
    s[0] + 1 <= 1500 && newGunPosition.push([s[0] + 1, s[1]]);
  }
  gunPosition = newGunPosition;
  return gunPosition;
};
var roomUsecase = (() => {
  return {
    pushbutton: async (movedirection) => {
      let result = "";
      if (movedirection === "push") {
        result = "PUSH \u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
        gunShot();
      } else if (movedirection === "up") {
        position[0][1] -= 50;
        result = "UP \u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
      } else if (movedirection === "left") {
        position[0][0] -= 10;
        result = "LEFT \u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
      } else if (movedirection === "right") {
        position[0][0] += 10;
        result = "RIGHT \u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
      } else {
        position[0][1] += 50;
        result = "DOWN \u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F";
      }
      return result;
    }
  };
})();

// api/rooms/control/$relay.ts
var import_velona8 = __toESM(require_dist());
function defineController8(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona8.depend)(methods, cb) : methods;
}

// api/rooms/control/controller.ts
var controller_default7 = defineController8(() => ({
  post: async ({ body }) => {
    return {
      status: 200,
      body: await roomUsecase.pushbutton(body)
    };
  }
}));

// api/rooms/gunPosition/$relay.ts
var import_velona9 = __toESM(require_dist());
function defineController9(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona9.depend)(methods, cb) : methods;
}

// api/rooms/gunPosition/controller.ts
var controller_default8 = defineController9(() => ({
  get: () => ({ status: 200, body: gunPosition }),
  post: async () => {
    await gunShot();
    return { status: 200, body: gunPosition };
  }
}));

// api/rooms/playerPosition/$relay.ts
var import_velona10 = __toESM(require_dist());
function defineController10(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona10.depend)(methods, cb) : methods;
}

// api/rooms/playerPosition/controller.ts
var controller_default9 = defineController10(() => ({
  get: () => ({ status: 200, body: position })
}));

// api/session/$relay.ts
var import_velona11 = __toESM(require_dist());
function defineController11(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona11.depend)(methods, cb) : methods;
}

// api/session/controller.ts
var options = {
  httpOnly: true,
  secure: true,
  path: "/",
  sameSite: "none"
};
var controller_default10 = defineController11(() => ({
  post: {
    hooks: {
      preHandler: async (req, reply) => {
        const auth = firebaseAdmin.auth();
        const expiresIn = 60 * 60 * 24 * 5 * 1e3;
        const id = req.body?.id ?? "";
        const sessionCookie = await auth.createSessionCookie(id, { expiresIn });
        reply.setCookie("session", sessionCookie, {
          ...options,
          expires: new Date(Date.now() + expiresIn)
        });
      }
    },
    handler: () => {
      return { status: 200, body: { status: "success" } };
    }
  },
  delete: {
    hooks: {
      preHandler: async (req, reply) => {
        const auth = firebaseAdmin.auth();
        const sessionId = req.cookies.session ?? "";
        const decodedClaims = await auth.verifySessionCookie(sessionId).catch(() => null);
        if (decodedClaims)
          await auth.revokeRefreshTokens(decodedClaims.sub);
        reply.clearCookie("session", options);
      }
    },
    handler: () => {
      return { status: 200, body: { status: "success" } };
    }
  }
}));

// repository/tasksRepository.ts
var import_crypto2 = require("crypto");
var toModel = (prismaTask) => ({
  id: taskIdParser.parse(prismaTask.id),
  label: prismaTask.label,
  done: prismaTask.done,
  created: prismaTask.createdAt.getTime()
});
var getTasks = async (limit) => {
  const prismaTasks = await prismaClient.task.findMany({
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  return prismaTasks.map(toModel);
};
var createTask = async (label) => {
  const prismaTask = await prismaClient.task.create({
    data: { id: (0, import_crypto2.randomUUID)(), done: false, label, createdAt: new Date() }
  });
  return toModel(prismaTask);
};
var updateTask = async (id, partialTask) => {
  const prismaTask = await prismaClient.task.update({ where: { id }, data: partialTask });
  return toModel(prismaTask);
};
var deleteTask = async (id) => {
  const prismaTask = await prismaClient.task.delete({ where: { id } });
  return toModel(prismaTask);
};

// api/tasks/$relay.ts
var import_velona12 = __toESM(require_dist());
function defineController12(methods, cb) {
  return cb && typeof methods !== "function" ? (0, import_velona12.depend)(methods, cb) : methods;
}

// api/tasks/controller.ts
var controller_default11 = defineController12(() => ({
  get: async ({ query }) => ({ status: 200, body: await getTasks(query?.limit) }),
  post: async ({ body }) => ({ status: 201, body: await createTask(body.label) })
}));

// api/tasks/_taskId@string/controller.ts
var controller_default12 = defineController2(() => ({
  patch: async ({ body, params }) => {
    await updateTask(params.taskId, body);
    return { status: 204 };
  },
  delete: async ({ params }) => {
    await deleteTask(params.taskId);
    return { status: 204 };
  }
}));

// $server.ts
var parseNumberTypeQueryParams = (numberTypeParams) => (req, reply, done) => {
  const query = req.query;
  for (const [key, isOptional, isArray] of numberTypeParams) {
    const param = isArray ? query[`${key}[]`] ?? query[key] : query[key];
    if (isArray) {
      if (!isOptional && param === void 0) {
        query[key] = [];
      } else if (!isOptional || param !== void 0) {
        const vals = (Array.isArray(param) ? param : [param]).map(Number);
        if (vals.some(isNaN)) {
          reply.code(400).send();
          return;
        }
        query[key] = vals;
      }
      delete query[`${key}[]`];
    } else if (!isOptional || param !== void 0) {
      const val = Number(param);
      if (isNaN(val)) {
        reply.code(400).send();
        return;
      }
      query[key] = val;
    }
  }
  done();
};
var callParserIfExistsQuery = (parser) => (req, reply, done) => Object.keys(req.query).length ? parser(req, reply, done) : done();
var validatorCompiler = ({ schema }) => (data) => {
  const result = schema.safeParse(data);
  return result.success ? { value: result.data } : { error: result.error };
};
var methodToHandler = (methodCallback) => (req, reply) => {
  const data = methodCallback(req);
  if (data.headers)
    reply.headers(data.headers);
  reply.code(data.status).send(data.body);
};
var asyncMethodToHandler = (methodCallback) => async (req, reply) => {
  const data = await methodCallback(req);
  if (data.headers)
    reply.headers(data.headers);
  reply.code(data.status).send(data.body);
};
var server_default = (fastify, options2 = {}) => {
  const basePath = options2.basePath ?? "";
  const hooks0 = hooks_default(fastify);
  const validators0 = validators_default(fastify);
  const controller0 = controller_default(fastify);
  const controller1 = controller_default2(fastify);
  const controller2 = controller_default3(fastify);
  const controller3 = controller_default4(fastify);
  const controller4 = controller_default5(fastify);
  const controller5 = controller_default6(fastify);
  const controller6 = controller_default7(fastify);
  const controller7 = controller_default8(fastify);
  const controller8 = controller_default9(fastify);
  const controller9 = controller_default10(fastify);
  const controller10 = controller_default11(fastify);
  const controller11 = controller_default12(fastify);
  fastify.get(
    basePath || "/",
    methodToHandler(controller0.get)
  );
  fastify.get(
    `${basePath}/check`,
    asyncMethodToHandler(controller1.get)
  );
  fastify.get(
    `${basePath}/health`,
    methodToHandler(controller2.get)
  );
  fastify.get(
    `${basePath}/ip`,
    methodToHandler(controller3.get)
  );
  fastify.get(
    `${basePath}/me`,
    {
      preHandler: hooks0.preHandler
    },
    methodToHandler(controller4.get)
  );
  fastify.get(
    `${basePath}/rooms`,
    methodToHandler(controller5.get)
  );
  fastify.post(
    `${basePath}/rooms/control`,
    asyncMethodToHandler(controller6.post)
  );
  fastify.get(
    `${basePath}/rooms/gunPosition`,
    methodToHandler(controller7.get)
  );
  fastify.post(
    `${basePath}/rooms/gunPosition`,
    asyncMethodToHandler(controller7.post)
  );
  fastify.get(
    `${basePath}/rooms/playerPosition`,
    methodToHandler(controller8.get)
  );
  fastify.post(
    `${basePath}/session`,
    {
      preHandler: controller9.post.hooks.preHandler
    },
    methodToHandler(controller9.post.handler)
  );
  fastify.delete(
    `${basePath}/session`,
    {
      preHandler: controller9.delete.hooks.preHandler
    },
    methodToHandler(controller9.delete.handler)
  );
  fastify.get(
    `${basePath}/tasks`,
    {
      preValidation: callParserIfExistsQuery(parseNumberTypeQueryParams([["limit", true, false]]))
    },
    asyncMethodToHandler(controller10.get)
  );
  fastify.post(
    `${basePath}/tasks`,
    asyncMethodToHandler(controller10.post)
  );
  fastify.patch(
    `${basePath}/tasks/:taskId`,
    {
      schema: {
        params: validators0.params
      },
      validatorCompiler
    },
    asyncMethodToHandler(controller11.patch)
  );
  fastify.delete(
    `${basePath}/tasks/:taskId`,
    {
      schema: {
        params: validators0.params
      },
      validatorCompiler
    },
    asyncMethodToHandler(controller11.delete)
  );
  return fastify;
};

// service/app.ts
var import_cookie = __toESM(require("@fastify/cookie"));
var import_cors = __toESM(require("@fastify/cors"));
var import_helmet = __toESM(require("@fastify/helmet"));
var import_fastify = __toESM(require("fastify"));
var init = (serverFactory) => {
  const app = (0, import_fastify.default)({ serverFactory });
  app.register(import_helmet.default);
  app.register(import_cors.default, { origin: CORS_ORIGIN, credentials: true });
  app.register(import_cookie.default);
  server_default(app, { basePath: API_BASE_PATH });
  return app;
};

// entrypoints/index.ts
init().listen({ port: PORT, host: "0.0.0.0" });
