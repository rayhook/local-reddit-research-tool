
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Subreddit
 * 
 */
export type Subreddit = $Result.DefaultSelection<Prisma.$SubredditPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model SearchQuery
 * 
 */
export type SearchQuery = $Result.DefaultSelection<Prisma.$SearchQueryPayload>
/**
 * Model ApiCall
 * 
 */
export type ApiCall = $Result.DefaultSelection<Prisma.$ApiCallPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Subreddits
 * const subreddits = await prisma.subreddit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Subreddits
   * const subreddits = await prisma.subreddit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.subreddit`: Exposes CRUD operations for the **Subreddit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subreddits
    * const subreddits = await prisma.subreddit.findMany()
    * ```
    */
  get subreddit(): Prisma.SubredditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchQuery`: Exposes CRUD operations for the **SearchQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchQueries
    * const searchQueries = await prisma.searchQuery.findMany()
    * ```
    */
  get searchQuery(): Prisma.SearchQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiCall`: Exposes CRUD operations for the **ApiCall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiCalls
    * const apiCalls = await prisma.apiCall.findMany()
    * ```
    */
  get apiCall(): Prisma.ApiCallDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Subreddit: 'Subreddit',
    Post: 'Post',
    SearchQuery: 'SearchQuery',
    ApiCall: 'ApiCall'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "subreddit" | "post" | "searchQuery" | "apiCall"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Subreddit: {
        payload: Prisma.$SubredditPayload<ExtArgs>
        fields: Prisma.SubredditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubredditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubredditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          findFirst: {
            args: Prisma.SubredditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubredditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          findMany: {
            args: Prisma.SubredditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          create: {
            args: Prisma.SubredditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          createMany: {
            args: Prisma.SubredditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubredditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          delete: {
            args: Prisma.SubredditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          update: {
            args: Prisma.SubredditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          deleteMany: {
            args: Prisma.SubredditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubredditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubredditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>[]
          }
          upsert: {
            args: Prisma.SubredditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubredditPayload>
          }
          aggregate: {
            args: Prisma.SubredditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubreddit>
          }
          groupBy: {
            args: Prisma.SubredditGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubredditGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubredditCountArgs<ExtArgs>
            result: $Utils.Optional<SubredditCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      SearchQuery: {
        payload: Prisma.$SearchQueryPayload<ExtArgs>
        fields: Prisma.SearchQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findFirst: {
            args: Prisma.SearchQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          findMany: {
            args: Prisma.SearchQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          create: {
            args: Prisma.SearchQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          createMany: {
            args: Prisma.SearchQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          delete: {
            args: Prisma.SearchQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          update: {
            args: Prisma.SearchQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          deleteMany: {
            args: Prisma.SearchQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>[]
          }
          upsert: {
            args: Prisma.SearchQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchQueryPayload>
          }
          aggregate: {
            args: Prisma.SearchQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchQuery>
          }
          groupBy: {
            args: Prisma.SearchQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchQueryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchQueryCountAggregateOutputType> | number
          }
        }
      }
      ApiCall: {
        payload: Prisma.$ApiCallPayload<ExtArgs>
        fields: Prisma.ApiCallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiCallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiCallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          findFirst: {
            args: Prisma.ApiCallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiCallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          findMany: {
            args: Prisma.ApiCallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          create: {
            args: Prisma.ApiCallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          createMany: {
            args: Prisma.ApiCallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          delete: {
            args: Prisma.ApiCallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          update: {
            args: Prisma.ApiCallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          deleteMany: {
            args: Prisma.ApiCallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiCallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiCallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>[]
          }
          upsert: {
            args: Prisma.ApiCallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiCallPayload>
          }
          aggregate: {
            args: Prisma.ApiCallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiCall>
          }
          groupBy: {
            args: Prisma.ApiCallGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiCallGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCallCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCallCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    subreddit?: SubredditOmit
    post?: PostOmit
    searchQuery?: SearchQueryOmit
    apiCall?: ApiCallOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SubredditCountOutputType
   */

  export type SubredditCountOutputType = {
    posts: number
  }

  export type SubredditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | SubredditCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * SubredditCountOutputType without action
   */
  export type SubredditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubredditCountOutputType
     */
    select?: SubredditCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubredditCountOutputType without action
   */
  export type SubredditCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Subreddit
   */

  export type AggregateSubreddit = {
    _count: SubredditCountAggregateOutputType | null
    _avg: SubredditAvgAggregateOutputType | null
    _sum: SubredditSumAggregateOutputType | null
    _min: SubredditMinAggregateOutputType | null
    _max: SubredditMaxAggregateOutputType | null
  }

  export type SubredditAvgAggregateOutputType = {
    id: number | null
  }

  export type SubredditSumAggregateOutputType = {
    id: number | null
  }

  export type SubredditMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastFetchedAt: Date | null
  }

  export type SubredditMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastFetchedAt: Date | null
  }

  export type SubredditCountAggregateOutputType = {
    id: number
    name: number
    lastFetchedAt: number
    _all: number
  }


  export type SubredditAvgAggregateInputType = {
    id?: true
  }

  export type SubredditSumAggregateInputType = {
    id?: true
  }

  export type SubredditMinAggregateInputType = {
    id?: true
    name?: true
    lastFetchedAt?: true
  }

  export type SubredditMaxAggregateInputType = {
    id?: true
    name?: true
    lastFetchedAt?: true
  }

  export type SubredditCountAggregateInputType = {
    id?: true
    name?: true
    lastFetchedAt?: true
    _all?: true
  }

  export type SubredditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subreddit to aggregate.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subreddits
    **/
    _count?: true | SubredditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubredditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubredditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubredditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubredditMaxAggregateInputType
  }

  export type GetSubredditAggregateType<T extends SubredditAggregateArgs> = {
        [P in keyof T & keyof AggregateSubreddit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubreddit[P]>
      : GetScalarType<T[P], AggregateSubreddit[P]>
  }




  export type SubredditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubredditWhereInput
    orderBy?: SubredditOrderByWithAggregationInput | SubredditOrderByWithAggregationInput[]
    by: SubredditScalarFieldEnum[] | SubredditScalarFieldEnum
    having?: SubredditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubredditCountAggregateInputType | true
    _avg?: SubredditAvgAggregateInputType
    _sum?: SubredditSumAggregateInputType
    _min?: SubredditMinAggregateInputType
    _max?: SubredditMaxAggregateInputType
  }

  export type SubredditGroupByOutputType = {
    id: number
    name: string
    lastFetchedAt: Date | null
    _count: SubredditCountAggregateOutputType | null
    _avg: SubredditAvgAggregateOutputType | null
    _sum: SubredditSumAggregateOutputType | null
    _min: SubredditMinAggregateOutputType | null
    _max: SubredditMaxAggregateOutputType | null
  }

  type GetSubredditGroupByPayload<T extends SubredditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubredditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubredditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubredditGroupByOutputType[P]>
            : GetScalarType<T[P], SubredditGroupByOutputType[P]>
        }
      >
    >


  export type SubredditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastFetchedAt?: boolean
    posts?: boolean | Subreddit$postsArgs<ExtArgs>
    _count?: boolean | SubredditCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastFetchedAt?: boolean
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastFetchedAt?: boolean
  }, ExtArgs["result"]["subreddit"]>

  export type SubredditSelectScalar = {
    id?: boolean
    name?: boolean
    lastFetchedAt?: boolean
  }

  export type SubredditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastFetchedAt", ExtArgs["result"]["subreddit"]>
  export type SubredditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Subreddit$postsArgs<ExtArgs>
    _count?: boolean | SubredditCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubredditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubredditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubredditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subreddit"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastFetchedAt: Date | null
    }, ExtArgs["result"]["subreddit"]>
    composites: {}
  }

  type SubredditGetPayload<S extends boolean | null | undefined | SubredditDefaultArgs> = $Result.GetResult<Prisma.$SubredditPayload, S>

  type SubredditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubredditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubredditCountAggregateInputType | true
    }

  export interface SubredditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subreddit'], meta: { name: 'Subreddit' } }
    /**
     * Find zero or one Subreddit that matches the filter.
     * @param {SubredditFindUniqueArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubredditFindUniqueArgs>(args: SelectSubset<T, SubredditFindUniqueArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subreddit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubredditFindUniqueOrThrowArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubredditFindUniqueOrThrowArgs>(args: SelectSubset<T, SubredditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subreddit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindFirstArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubredditFindFirstArgs>(args?: SelectSubset<T, SubredditFindFirstArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subreddit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindFirstOrThrowArgs} args - Arguments to find a Subreddit
     * @example
     * // Get one Subreddit
     * const subreddit = await prisma.subreddit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubredditFindFirstOrThrowArgs>(args?: SelectSubset<T, SubredditFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subreddits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subreddits
     * const subreddits = await prisma.subreddit.findMany()
     * 
     * // Get first 10 Subreddits
     * const subreddits = await prisma.subreddit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subredditWithIdOnly = await prisma.subreddit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubredditFindManyArgs>(args?: SelectSubset<T, SubredditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subreddit.
     * @param {SubredditCreateArgs} args - Arguments to create a Subreddit.
     * @example
     * // Create one Subreddit
     * const Subreddit = await prisma.subreddit.create({
     *   data: {
     *     // ... data to create a Subreddit
     *   }
     * })
     * 
     */
    create<T extends SubredditCreateArgs>(args: SelectSubset<T, SubredditCreateArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subreddits.
     * @param {SubredditCreateManyArgs} args - Arguments to create many Subreddits.
     * @example
     * // Create many Subreddits
     * const subreddit = await prisma.subreddit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubredditCreateManyArgs>(args?: SelectSubset<T, SubredditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subreddits and returns the data saved in the database.
     * @param {SubredditCreateManyAndReturnArgs} args - Arguments to create many Subreddits.
     * @example
     * // Create many Subreddits
     * const subreddit = await prisma.subreddit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subreddits and only return the `id`
     * const subredditWithIdOnly = await prisma.subreddit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubredditCreateManyAndReturnArgs>(args?: SelectSubset<T, SubredditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subreddit.
     * @param {SubredditDeleteArgs} args - Arguments to delete one Subreddit.
     * @example
     * // Delete one Subreddit
     * const Subreddit = await prisma.subreddit.delete({
     *   where: {
     *     // ... filter to delete one Subreddit
     *   }
     * })
     * 
     */
    delete<T extends SubredditDeleteArgs>(args: SelectSubset<T, SubredditDeleteArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subreddit.
     * @param {SubredditUpdateArgs} args - Arguments to update one Subreddit.
     * @example
     * // Update one Subreddit
     * const subreddit = await prisma.subreddit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubredditUpdateArgs>(args: SelectSubset<T, SubredditUpdateArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subreddits.
     * @param {SubredditDeleteManyArgs} args - Arguments to filter Subreddits to delete.
     * @example
     * // Delete a few Subreddits
     * const { count } = await prisma.subreddit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubredditDeleteManyArgs>(args?: SelectSubset<T, SubredditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subreddits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subreddits
     * const subreddit = await prisma.subreddit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubredditUpdateManyArgs>(args: SelectSubset<T, SubredditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subreddits and returns the data updated in the database.
     * @param {SubredditUpdateManyAndReturnArgs} args - Arguments to update many Subreddits.
     * @example
     * // Update many Subreddits
     * const subreddit = await prisma.subreddit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subreddits and only return the `id`
     * const subredditWithIdOnly = await prisma.subreddit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubredditUpdateManyAndReturnArgs>(args: SelectSubset<T, SubredditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subreddit.
     * @param {SubredditUpsertArgs} args - Arguments to update or create a Subreddit.
     * @example
     * // Update or create a Subreddit
     * const subreddit = await prisma.subreddit.upsert({
     *   create: {
     *     // ... data to create a Subreddit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subreddit we want to update
     *   }
     * })
     */
    upsert<T extends SubredditUpsertArgs>(args: SelectSubset<T, SubredditUpsertArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subreddits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditCountArgs} args - Arguments to filter Subreddits to count.
     * @example
     * // Count the number of Subreddits
     * const count = await prisma.subreddit.count({
     *   where: {
     *     // ... the filter for the Subreddits we want to count
     *   }
     * })
    **/
    count<T extends SubredditCountArgs>(
      args?: Subset<T, SubredditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubredditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subreddit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubredditAggregateArgs>(args: Subset<T, SubredditAggregateArgs>): Prisma.PrismaPromise<GetSubredditAggregateType<T>>

    /**
     * Group by Subreddit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubredditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubredditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubredditGroupByArgs['orderBy'] }
        : { orderBy?: SubredditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubredditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubredditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subreddit model
   */
  readonly fields: SubredditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subreddit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubredditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Subreddit$postsArgs<ExtArgs> = {}>(args?: Subset<T, Subreddit$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subreddit model
   */
  interface SubredditFieldRefs {
    readonly id: FieldRef<"Subreddit", 'Int'>
    readonly name: FieldRef<"Subreddit", 'String'>
    readonly lastFetchedAt: FieldRef<"Subreddit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subreddit findUnique
   */
  export type SubredditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit findUniqueOrThrow
   */
  export type SubredditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit findFirst
   */
  export type SubredditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subreddits.
     */
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit findFirstOrThrow
   */
  export type SubredditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddit to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subreddits.
     */
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit findMany
   */
  export type SubredditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter, which Subreddits to fetch.
     */
    where?: SubredditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subreddits to fetch.
     */
    orderBy?: SubredditOrderByWithRelationInput | SubredditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subreddits.
     */
    cursor?: SubredditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subreddits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subreddits.
     */
    skip?: number
    distinct?: SubredditScalarFieldEnum | SubredditScalarFieldEnum[]
  }

  /**
   * Subreddit create
   */
  export type SubredditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The data needed to create a Subreddit.
     */
    data: XOR<SubredditCreateInput, SubredditUncheckedCreateInput>
  }

  /**
   * Subreddit createMany
   */
  export type SubredditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subreddits.
     */
    data: SubredditCreateManyInput | SubredditCreateManyInput[]
  }

  /**
   * Subreddit createManyAndReturn
   */
  export type SubredditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * The data used to create many Subreddits.
     */
    data: SubredditCreateManyInput | SubredditCreateManyInput[]
  }

  /**
   * Subreddit update
   */
  export type SubredditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The data needed to update a Subreddit.
     */
    data: XOR<SubredditUpdateInput, SubredditUncheckedUpdateInput>
    /**
     * Choose, which Subreddit to update.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit updateMany
   */
  export type SubredditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subreddits.
     */
    data: XOR<SubredditUpdateManyMutationInput, SubredditUncheckedUpdateManyInput>
    /**
     * Filter which Subreddits to update
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to update.
     */
    limit?: number
  }

  /**
   * Subreddit updateManyAndReturn
   */
  export type SubredditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * The data used to update Subreddits.
     */
    data: XOR<SubredditUpdateManyMutationInput, SubredditUncheckedUpdateManyInput>
    /**
     * Filter which Subreddits to update
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to update.
     */
    limit?: number
  }

  /**
   * Subreddit upsert
   */
  export type SubredditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * The filter to search for the Subreddit to update in case it exists.
     */
    where: SubredditWhereUniqueInput
    /**
     * In case the Subreddit found by the `where` argument doesn't exist, create a new Subreddit with this data.
     */
    create: XOR<SubredditCreateInput, SubredditUncheckedCreateInput>
    /**
     * In case the Subreddit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubredditUpdateInput, SubredditUncheckedUpdateInput>
  }

  /**
   * Subreddit delete
   */
  export type SubredditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
    /**
     * Filter which Subreddit to delete.
     */
    where: SubredditWhereUniqueInput
  }

  /**
   * Subreddit deleteMany
   */
  export type SubredditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subreddits to delete
     */
    where?: SubredditWhereInput
    /**
     * Limit how many Subreddits to delete.
     */
    limit?: number
  }

  /**
   * Subreddit.posts
   */
  export type Subreddit$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Subreddit without action
   */
  export type SubredditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subreddit
     */
    select?: SubredditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subreddit
     */
    omit?: SubredditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubredditInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    upvotes: number | null
    subredditId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    upvotes: number | null
    subredditId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    redditId: string | null
    title: string | null
    selftext: string | null
    author: string | null
    upvotes: number | null
    createdUtc: Date | null
    url: string | null
    fetchedAt: Date | null
    subredditId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    redditId: string | null
    title: string | null
    selftext: string | null
    author: string | null
    upvotes: number | null
    createdUtc: Date | null
    url: string | null
    fetchedAt: Date | null
    subredditId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    redditId: number
    title: number
    selftext: number
    author: number
    upvotes: number
    createdUtc: number
    url: number
    fetchedAt: number
    subredditId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    upvotes?: true
    subredditId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    upvotes?: true
    subredditId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    redditId?: true
    title?: true
    selftext?: true
    author?: true
    upvotes?: true
    createdUtc?: true
    url?: true
    fetchedAt?: true
    subredditId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    redditId?: true
    title?: true
    selftext?: true
    author?: true
    upvotes?: true
    createdUtc?: true
    url?: true
    fetchedAt?: true
    subredditId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    redditId?: true
    title?: true
    selftext?: true
    author?: true
    upvotes?: true
    createdUtc?: true
    url?: true
    fetchedAt?: true
    subredditId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    redditId: string
    title: string
    selftext: string
    author: string
    upvotes: number
    createdUtc: Date
    url: string
    fetchedAt: Date
    subredditId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redditId?: boolean
    title?: boolean
    selftext?: boolean
    author?: boolean
    upvotes?: boolean
    createdUtc?: boolean
    url?: boolean
    fetchedAt?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redditId?: boolean
    title?: boolean
    selftext?: boolean
    author?: boolean
    upvotes?: boolean
    createdUtc?: boolean
    url?: boolean
    fetchedAt?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    redditId?: boolean
    title?: boolean
    selftext?: boolean
    author?: boolean
    upvotes?: boolean
    createdUtc?: boolean
    url?: boolean
    fetchedAt?: boolean
    subredditId?: boolean
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    redditId?: boolean
    title?: boolean
    selftext?: boolean
    author?: boolean
    upvotes?: boolean
    createdUtc?: boolean
    url?: boolean
    fetchedAt?: boolean
    subredditId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "redditId" | "title" | "selftext" | "author" | "upvotes" | "createdUtc" | "url" | "fetchedAt" | "subredditId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subreddit?: boolean | SubredditDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      subreddit: Prisma.$SubredditPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      redditId: string
      title: string
      selftext: string
      author: string
      upvotes: number
      createdUtc: Date
      url: string
      fetchedAt: Date
      subredditId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subreddit<T extends SubredditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubredditDefaultArgs<ExtArgs>>): Prisma__SubredditClient<$Result.GetResult<Prisma.$SubredditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly redditId: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly selftext: FieldRef<"Post", 'String'>
    readonly author: FieldRef<"Post", 'String'>
    readonly upvotes: FieldRef<"Post", 'Int'>
    readonly createdUtc: FieldRef<"Post", 'DateTime'>
    readonly url: FieldRef<"Post", 'String'>
    readonly fetchedAt: FieldRef<"Post", 'DateTime'>
    readonly subredditId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model SearchQuery
   */

  export type AggregateSearchQuery = {
    _count: SearchQueryCountAggregateOutputType | null
    _avg: SearchQueryAvgAggregateOutputType | null
    _sum: SearchQuerySumAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  export type SearchQueryAvgAggregateOutputType = {
    id: number | null
  }

  export type SearchQuerySumAggregateOutputType = {
    id: number | null
  }

  export type SearchQueryMinAggregateOutputType = {
    id: number | null
    keywords: string | null
    subreddits: string | null
    createdAt: Date | null
  }

  export type SearchQueryMaxAggregateOutputType = {
    id: number | null
    keywords: string | null
    subreddits: string | null
    createdAt: Date | null
  }

  export type SearchQueryCountAggregateOutputType = {
    id: number
    keywords: number
    subreddits: number
    createdAt: number
    _all: number
  }


  export type SearchQueryAvgAggregateInputType = {
    id?: true
  }

  export type SearchQuerySumAggregateInputType = {
    id?: true
  }

  export type SearchQueryMinAggregateInputType = {
    id?: true
    keywords?: true
    subreddits?: true
    createdAt?: true
  }

  export type SearchQueryMaxAggregateInputType = {
    id?: true
    keywords?: true
    subreddits?: true
    createdAt?: true
  }

  export type SearchQueryCountAggregateInputType = {
    id?: true
    keywords?: true
    subreddits?: true
    createdAt?: true
    _all?: true
  }

  export type SearchQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQuery to aggregate.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchQueries
    **/
    _count?: true | SearchQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchQueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchQuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchQueryMaxAggregateInputType
  }

  export type GetSearchQueryAggregateType<T extends SearchQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchQuery[P]>
      : GetScalarType<T[P], AggregateSearchQuery[P]>
  }




  export type SearchQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchQueryWhereInput
    orderBy?: SearchQueryOrderByWithAggregationInput | SearchQueryOrderByWithAggregationInput[]
    by: SearchQueryScalarFieldEnum[] | SearchQueryScalarFieldEnum
    having?: SearchQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchQueryCountAggregateInputType | true
    _avg?: SearchQueryAvgAggregateInputType
    _sum?: SearchQuerySumAggregateInputType
    _min?: SearchQueryMinAggregateInputType
    _max?: SearchQueryMaxAggregateInputType
  }

  export type SearchQueryGroupByOutputType = {
    id: number
    keywords: string
    subreddits: string
    createdAt: Date
    _count: SearchQueryCountAggregateOutputType | null
    _avg: SearchQueryAvgAggregateOutputType | null
    _sum: SearchQuerySumAggregateOutputType | null
    _min: SearchQueryMinAggregateOutputType | null
    _max: SearchQueryMaxAggregateOutputType | null
  }

  type GetSearchQueryGroupByPayload<T extends SearchQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchQueryGroupByOutputType[P]>
        }
      >
    >


  export type SearchQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywords?: boolean
    subreddits?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywords?: boolean
    subreddits?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywords?: boolean
    subreddits?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["searchQuery"]>

  export type SearchQuerySelectScalar = {
    id?: boolean
    keywords?: boolean
    subreddits?: boolean
    createdAt?: boolean
  }

  export type SearchQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywords" | "subreddits" | "createdAt", ExtArgs["result"]["searchQuery"]>

  export type $SearchQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchQuery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywords: string
      subreddits: string
      createdAt: Date
    }, ExtArgs["result"]["searchQuery"]>
    composites: {}
  }

  type SearchQueryGetPayload<S extends boolean | null | undefined | SearchQueryDefaultArgs> = $Result.GetResult<Prisma.$SearchQueryPayload, S>

  type SearchQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchQueryCountAggregateInputType | true
    }

  export interface SearchQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchQuery'], meta: { name: 'SearchQuery' } }
    /**
     * Find zero or one SearchQuery that matches the filter.
     * @param {SearchQueryFindUniqueArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchQueryFindUniqueArgs>(args: SelectSubset<T, SearchQueryFindUniqueArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchQueryFindUniqueOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchQueryFindFirstArgs>(args?: SelectSubset<T, SearchQueryFindFirstArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindFirstOrThrowArgs} args - Arguments to find a SearchQuery
     * @example
     * // Get one SearchQuery
     * const searchQuery = await prisma.searchQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany()
     * 
     * // Get first 10 SearchQueries
     * const searchQueries = await prisma.searchQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchQueryFindManyArgs>(args?: SelectSubset<T, SearchQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchQuery.
     * @param {SearchQueryCreateArgs} args - Arguments to create a SearchQuery.
     * @example
     * // Create one SearchQuery
     * const SearchQuery = await prisma.searchQuery.create({
     *   data: {
     *     // ... data to create a SearchQuery
     *   }
     * })
     * 
     */
    create<T extends SearchQueryCreateArgs>(args: SelectSubset<T, SearchQueryCreateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchQueries.
     * @param {SearchQueryCreateManyArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchQueryCreateManyArgs>(args?: SelectSubset<T, SearchQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchQueries and returns the data saved in the database.
     * @param {SearchQueryCreateManyAndReturnArgs} args - Arguments to create many SearchQueries.
     * @example
     * // Create many SearchQueries
     * const searchQuery = await prisma.searchQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchQuery.
     * @param {SearchQueryDeleteArgs} args - Arguments to delete one SearchQuery.
     * @example
     * // Delete one SearchQuery
     * const SearchQuery = await prisma.searchQuery.delete({
     *   where: {
     *     // ... filter to delete one SearchQuery
     *   }
     * })
     * 
     */
    delete<T extends SearchQueryDeleteArgs>(args: SelectSubset<T, SearchQueryDeleteArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchQuery.
     * @param {SearchQueryUpdateArgs} args - Arguments to update one SearchQuery.
     * @example
     * // Update one SearchQuery
     * const searchQuery = await prisma.searchQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchQueryUpdateArgs>(args: SelectSubset<T, SearchQueryUpdateArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchQueries.
     * @param {SearchQueryDeleteManyArgs} args - Arguments to filter SearchQueries to delete.
     * @example
     * // Delete a few SearchQueries
     * const { count } = await prisma.searchQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchQueryDeleteManyArgs>(args?: SelectSubset<T, SearchQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchQueryUpdateManyArgs>(args: SelectSubset<T, SearchQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchQueries and returns the data updated in the database.
     * @param {SearchQueryUpdateManyAndReturnArgs} args - Arguments to update many SearchQueries.
     * @example
     * // Update many SearchQueries
     * const searchQuery = await prisma.searchQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchQueries and only return the `id`
     * const searchQueryWithIdOnly = await prisma.searchQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchQuery.
     * @param {SearchQueryUpsertArgs} args - Arguments to update or create a SearchQuery.
     * @example
     * // Update or create a SearchQuery
     * const searchQuery = await prisma.searchQuery.upsert({
     *   create: {
     *     // ... data to create a SearchQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchQuery we want to update
     *   }
     * })
     */
    upsert<T extends SearchQueryUpsertArgs>(args: SelectSubset<T, SearchQueryUpsertArgs<ExtArgs>>): Prisma__SearchQueryClient<$Result.GetResult<Prisma.$SearchQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryCountArgs} args - Arguments to filter SearchQueries to count.
     * @example
     * // Count the number of SearchQueries
     * const count = await prisma.searchQuery.count({
     *   where: {
     *     // ... the filter for the SearchQueries we want to count
     *   }
     * })
    **/
    count<T extends SearchQueryCountArgs>(
      args?: Subset<T, SearchQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchQueryAggregateArgs>(args: Subset<T, SearchQueryAggregateArgs>): Prisma.PrismaPromise<GetSearchQueryAggregateType<T>>

    /**
     * Group by SearchQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchQueryGroupByArgs['orderBy'] }
        : { orderBy?: SearchQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchQuery model
   */
  readonly fields: SearchQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchQuery model
   */
  interface SearchQueryFieldRefs {
    readonly id: FieldRef<"SearchQuery", 'Int'>
    readonly keywords: FieldRef<"SearchQuery", 'String'>
    readonly subreddits: FieldRef<"SearchQuery", 'String'>
    readonly createdAt: FieldRef<"SearchQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchQuery findUnique
   */
  export type SearchQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findUniqueOrThrow
   */
  export type SearchQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery findFirst
   */
  export type SearchQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findFirstOrThrow
   */
  export type SearchQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQuery to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchQueries.
     */
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery findMany
   */
  export type SearchQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter, which SearchQueries to fetch.
     */
    where?: SearchQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchQueries to fetch.
     */
    orderBy?: SearchQueryOrderByWithRelationInput | SearchQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchQueries.
     */
    cursor?: SearchQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchQueries.
     */
    skip?: number
    distinct?: SearchQueryScalarFieldEnum | SearchQueryScalarFieldEnum[]
  }

  /**
   * SearchQuery create
   */
  export type SearchQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to create a SearchQuery.
     */
    data: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
  }

  /**
   * SearchQuery createMany
   */
  export type SearchQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
  }

  /**
   * SearchQuery createManyAndReturn
   */
  export type SearchQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchQueries.
     */
    data: SearchQueryCreateManyInput | SearchQueryCreateManyInput[]
  }

  /**
   * SearchQuery update
   */
  export type SearchQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data needed to update a SearchQuery.
     */
    data: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
    /**
     * Choose, which SearchQuery to update.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery updateMany
   */
  export type SearchQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery updateManyAndReturn
   */
  export type SearchQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The data used to update SearchQueries.
     */
    data: XOR<SearchQueryUpdateManyMutationInput, SearchQueryUncheckedUpdateManyInput>
    /**
     * Filter which SearchQueries to update
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to update.
     */
    limit?: number
  }

  /**
   * SearchQuery upsert
   */
  export type SearchQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * The filter to search for the SearchQuery to update in case it exists.
     */
    where: SearchQueryWhereUniqueInput
    /**
     * In case the SearchQuery found by the `where` argument doesn't exist, create a new SearchQuery with this data.
     */
    create: XOR<SearchQueryCreateInput, SearchQueryUncheckedCreateInput>
    /**
     * In case the SearchQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchQueryUpdateInput, SearchQueryUncheckedUpdateInput>
  }

  /**
   * SearchQuery delete
   */
  export type SearchQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
    /**
     * Filter which SearchQuery to delete.
     */
    where: SearchQueryWhereUniqueInput
  }

  /**
   * SearchQuery deleteMany
   */
  export type SearchQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchQueries to delete
     */
    where?: SearchQueryWhereInput
    /**
     * Limit how many SearchQueries to delete.
     */
    limit?: number
  }

  /**
   * SearchQuery without action
   */
  export type SearchQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchQuery
     */
    select?: SearchQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchQuery
     */
    omit?: SearchQueryOmit<ExtArgs> | null
  }


  /**
   * Model ApiCall
   */

  export type AggregateApiCall = {
    _count: ApiCallCountAggregateOutputType | null
    _avg: ApiCallAvgAggregateOutputType | null
    _sum: ApiCallSumAggregateOutputType | null
    _min: ApiCallMinAggregateOutputType | null
    _max: ApiCallMaxAggregateOutputType | null
  }

  export type ApiCallAvgAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type ApiCallSumAggregateOutputType = {
    id: number | null
    count: number | null
  }

  export type ApiCallMinAggregateOutputType = {
    id: number | null
    endpoint: string | null
    timestamp: Date | null
    count: number | null
  }

  export type ApiCallMaxAggregateOutputType = {
    id: number | null
    endpoint: string | null
    timestamp: Date | null
    count: number | null
  }

  export type ApiCallCountAggregateOutputType = {
    id: number
    endpoint: number
    timestamp: number
    count: number
    _all: number
  }


  export type ApiCallAvgAggregateInputType = {
    id?: true
    count?: true
  }

  export type ApiCallSumAggregateInputType = {
    id?: true
    count?: true
  }

  export type ApiCallMinAggregateInputType = {
    id?: true
    endpoint?: true
    timestamp?: true
    count?: true
  }

  export type ApiCallMaxAggregateInputType = {
    id?: true
    endpoint?: true
    timestamp?: true
    count?: true
  }

  export type ApiCallCountAggregateInputType = {
    id?: true
    endpoint?: true
    timestamp?: true
    count?: true
    _all?: true
  }

  export type ApiCallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCall to aggregate.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiCalls
    **/
    _count?: true | ApiCallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiCallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiCallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiCallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiCallMaxAggregateInputType
  }

  export type GetApiCallAggregateType<T extends ApiCallAggregateArgs> = {
        [P in keyof T & keyof AggregateApiCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiCall[P]>
      : GetScalarType<T[P], AggregateApiCall[P]>
  }




  export type ApiCallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiCallWhereInput
    orderBy?: ApiCallOrderByWithAggregationInput | ApiCallOrderByWithAggregationInput[]
    by: ApiCallScalarFieldEnum[] | ApiCallScalarFieldEnum
    having?: ApiCallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCallCountAggregateInputType | true
    _avg?: ApiCallAvgAggregateInputType
    _sum?: ApiCallSumAggregateInputType
    _min?: ApiCallMinAggregateInputType
    _max?: ApiCallMaxAggregateInputType
  }

  export type ApiCallGroupByOutputType = {
    id: number
    endpoint: string
    timestamp: Date
    count: number
    _count: ApiCallCountAggregateOutputType | null
    _avg: ApiCallAvgAggregateOutputType | null
    _sum: ApiCallSumAggregateOutputType | null
    _min: ApiCallMinAggregateOutputType | null
    _max: ApiCallMaxAggregateOutputType | null
  }

  type GetApiCallGroupByPayload<T extends ApiCallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiCallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiCallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiCallGroupByOutputType[P]>
            : GetScalarType<T[P], ApiCallGroupByOutputType[P]>
        }
      >
    >


  export type ApiCallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    timestamp?: boolean
    count?: boolean
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    timestamp?: boolean
    count?: boolean
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpoint?: boolean
    timestamp?: boolean
    count?: boolean
  }, ExtArgs["result"]["apiCall"]>

  export type ApiCallSelectScalar = {
    id?: boolean
    endpoint?: boolean
    timestamp?: boolean
    count?: boolean
  }

  export type ApiCallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpoint" | "timestamp" | "count", ExtArgs["result"]["apiCall"]>

  export type $ApiCallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiCall"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endpoint: string
      timestamp: Date
      count: number
    }, ExtArgs["result"]["apiCall"]>
    composites: {}
  }

  type ApiCallGetPayload<S extends boolean | null | undefined | ApiCallDefaultArgs> = $Result.GetResult<Prisma.$ApiCallPayload, S>

  type ApiCallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiCallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCallCountAggregateInputType | true
    }

  export interface ApiCallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiCall'], meta: { name: 'ApiCall' } }
    /**
     * Find zero or one ApiCall that matches the filter.
     * @param {ApiCallFindUniqueArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiCallFindUniqueArgs>(args: SelectSubset<T, ApiCallFindUniqueArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiCall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiCallFindUniqueOrThrowArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiCallFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiCallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindFirstArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiCallFindFirstArgs>(args?: SelectSubset<T, ApiCallFindFirstArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiCall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindFirstOrThrowArgs} args - Arguments to find a ApiCall
     * @example
     * // Get one ApiCall
     * const apiCall = await prisma.apiCall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiCallFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiCallFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiCalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiCalls
     * const apiCalls = await prisma.apiCall.findMany()
     * 
     * // Get first 10 ApiCalls
     * const apiCalls = await prisma.apiCall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiCallFindManyArgs>(args?: SelectSubset<T, ApiCallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiCall.
     * @param {ApiCallCreateArgs} args - Arguments to create a ApiCall.
     * @example
     * // Create one ApiCall
     * const ApiCall = await prisma.apiCall.create({
     *   data: {
     *     // ... data to create a ApiCall
     *   }
     * })
     * 
     */
    create<T extends ApiCallCreateArgs>(args: SelectSubset<T, ApiCallCreateArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiCalls.
     * @param {ApiCallCreateManyArgs} args - Arguments to create many ApiCalls.
     * @example
     * // Create many ApiCalls
     * const apiCall = await prisma.apiCall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCallCreateManyArgs>(args?: SelectSubset<T, ApiCallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiCalls and returns the data saved in the database.
     * @param {ApiCallCreateManyAndReturnArgs} args - Arguments to create many ApiCalls.
     * @example
     * // Create many ApiCalls
     * const apiCall = await prisma.apiCall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiCalls and only return the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCallCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiCall.
     * @param {ApiCallDeleteArgs} args - Arguments to delete one ApiCall.
     * @example
     * // Delete one ApiCall
     * const ApiCall = await prisma.apiCall.delete({
     *   where: {
     *     // ... filter to delete one ApiCall
     *   }
     * })
     * 
     */
    delete<T extends ApiCallDeleteArgs>(args: SelectSubset<T, ApiCallDeleteArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiCall.
     * @param {ApiCallUpdateArgs} args - Arguments to update one ApiCall.
     * @example
     * // Update one ApiCall
     * const apiCall = await prisma.apiCall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiCallUpdateArgs>(args: SelectSubset<T, ApiCallUpdateArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiCalls.
     * @param {ApiCallDeleteManyArgs} args - Arguments to filter ApiCalls to delete.
     * @example
     * // Delete a few ApiCalls
     * const { count } = await prisma.apiCall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiCallDeleteManyArgs>(args?: SelectSubset<T, ApiCallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiCalls
     * const apiCall = await prisma.apiCall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiCallUpdateManyArgs>(args: SelectSubset<T, ApiCallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiCalls and returns the data updated in the database.
     * @param {ApiCallUpdateManyAndReturnArgs} args - Arguments to update many ApiCalls.
     * @example
     * // Update many ApiCalls
     * const apiCall = await prisma.apiCall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiCalls and only return the `id`
     * const apiCallWithIdOnly = await prisma.apiCall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiCallUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiCallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiCall.
     * @param {ApiCallUpsertArgs} args - Arguments to update or create a ApiCall.
     * @example
     * // Update or create a ApiCall
     * const apiCall = await prisma.apiCall.upsert({
     *   create: {
     *     // ... data to create a ApiCall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiCall we want to update
     *   }
     * })
     */
    upsert<T extends ApiCallUpsertArgs>(args: SelectSubset<T, ApiCallUpsertArgs<ExtArgs>>): Prisma__ApiCallClient<$Result.GetResult<Prisma.$ApiCallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallCountArgs} args - Arguments to filter ApiCalls to count.
     * @example
     * // Count the number of ApiCalls
     * const count = await prisma.apiCall.count({
     *   where: {
     *     // ... the filter for the ApiCalls we want to count
     *   }
     * })
    **/
    count<T extends ApiCallCountArgs>(
      args?: Subset<T, ApiCallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiCallAggregateArgs>(args: Subset<T, ApiCallAggregateArgs>): Prisma.PrismaPromise<GetApiCallAggregateType<T>>

    /**
     * Group by ApiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCallGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiCallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiCallGroupByArgs['orderBy'] }
        : { orderBy?: ApiCallGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiCallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiCall model
   */
  readonly fields: ApiCallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiCall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiCallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiCall model
   */
  interface ApiCallFieldRefs {
    readonly id: FieldRef<"ApiCall", 'Int'>
    readonly endpoint: FieldRef<"ApiCall", 'String'>
    readonly timestamp: FieldRef<"ApiCall", 'DateTime'>
    readonly count: FieldRef<"ApiCall", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApiCall findUnique
   */
  export type ApiCallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall findUniqueOrThrow
   */
  export type ApiCallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall findFirst
   */
  export type ApiCallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCalls.
     */
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall findFirstOrThrow
   */
  export type ApiCallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter, which ApiCall to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiCalls.
     */
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall findMany
   */
  export type ApiCallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter, which ApiCalls to fetch.
     */
    where?: ApiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiCalls to fetch.
     */
    orderBy?: ApiCallOrderByWithRelationInput | ApiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiCalls.
     */
    cursor?: ApiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiCalls.
     */
    skip?: number
    distinct?: ApiCallScalarFieldEnum | ApiCallScalarFieldEnum[]
  }

  /**
   * ApiCall create
   */
  export type ApiCallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiCall.
     */
    data: XOR<ApiCallCreateInput, ApiCallUncheckedCreateInput>
  }

  /**
   * ApiCall createMany
   */
  export type ApiCallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiCalls.
     */
    data: ApiCallCreateManyInput | ApiCallCreateManyInput[]
  }

  /**
   * ApiCall createManyAndReturn
   */
  export type ApiCallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data used to create many ApiCalls.
     */
    data: ApiCallCreateManyInput | ApiCallCreateManyInput[]
  }

  /**
   * ApiCall update
   */
  export type ApiCallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiCall.
     */
    data: XOR<ApiCallUpdateInput, ApiCallUncheckedUpdateInput>
    /**
     * Choose, which ApiCall to update.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall updateMany
   */
  export type ApiCallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiCalls.
     */
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyInput>
    /**
     * Filter which ApiCalls to update
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to update.
     */
    limit?: number
  }

  /**
   * ApiCall updateManyAndReturn
   */
  export type ApiCallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The data used to update ApiCalls.
     */
    data: XOR<ApiCallUpdateManyMutationInput, ApiCallUncheckedUpdateManyInput>
    /**
     * Filter which ApiCalls to update
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to update.
     */
    limit?: number
  }

  /**
   * ApiCall upsert
   */
  export type ApiCallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiCall to update in case it exists.
     */
    where: ApiCallWhereUniqueInput
    /**
     * In case the ApiCall found by the `where` argument doesn't exist, create a new ApiCall with this data.
     */
    create: XOR<ApiCallCreateInput, ApiCallUncheckedCreateInput>
    /**
     * In case the ApiCall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiCallUpdateInput, ApiCallUncheckedUpdateInput>
  }

  /**
   * ApiCall delete
   */
  export type ApiCallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
    /**
     * Filter which ApiCall to delete.
     */
    where: ApiCallWhereUniqueInput
  }

  /**
   * ApiCall deleteMany
   */
  export type ApiCallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiCalls to delete
     */
    where?: ApiCallWhereInput
    /**
     * Limit how many ApiCalls to delete.
     */
    limit?: number
  }

  /**
   * ApiCall without action
   */
  export type ApiCallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCall
     */
    select?: ApiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiCall
     */
    omit?: ApiCallOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SubredditScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastFetchedAt: 'lastFetchedAt'
  };

  export type SubredditScalarFieldEnum = (typeof SubredditScalarFieldEnum)[keyof typeof SubredditScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    redditId: 'redditId',
    title: 'title',
    selftext: 'selftext',
    author: 'author',
    upvotes: 'upvotes',
    createdUtc: 'createdUtc',
    url: 'url',
    fetchedAt: 'fetchedAt',
    subredditId: 'subredditId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SearchQueryScalarFieldEnum: {
    id: 'id',
    keywords: 'keywords',
    subreddits: 'subreddits',
    createdAt: 'createdAt'
  };

  export type SearchQueryScalarFieldEnum = (typeof SearchQueryScalarFieldEnum)[keyof typeof SearchQueryScalarFieldEnum]


  export const ApiCallScalarFieldEnum: {
    id: 'id',
    endpoint: 'endpoint',
    timestamp: 'timestamp',
    count: 'count'
  };

  export type ApiCallScalarFieldEnum = (typeof ApiCallScalarFieldEnum)[keyof typeof ApiCallScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SubredditWhereInput = {
    AND?: SubredditWhereInput | SubredditWhereInput[]
    OR?: SubredditWhereInput[]
    NOT?: SubredditWhereInput | SubredditWhereInput[]
    id?: IntFilter<"Subreddit"> | number
    name?: StringFilter<"Subreddit"> | string
    lastFetchedAt?: DateTimeNullableFilter<"Subreddit"> | Date | string | null
    posts?: PostListRelationFilter
  }

  export type SubredditOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastFetchedAt?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type SubredditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubredditWhereInput | SubredditWhereInput[]
    OR?: SubredditWhereInput[]
    NOT?: SubredditWhereInput | SubredditWhereInput[]
    lastFetchedAt?: DateTimeNullableFilter<"Subreddit"> | Date | string | null
    posts?: PostListRelationFilter
  }, "id" | "name">

  export type SubredditOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastFetchedAt?: SortOrderInput | SortOrder
    _count?: SubredditCountOrderByAggregateInput
    _avg?: SubredditAvgOrderByAggregateInput
    _max?: SubredditMaxOrderByAggregateInput
    _min?: SubredditMinOrderByAggregateInput
    _sum?: SubredditSumOrderByAggregateInput
  }

  export type SubredditScalarWhereWithAggregatesInput = {
    AND?: SubredditScalarWhereWithAggregatesInput | SubredditScalarWhereWithAggregatesInput[]
    OR?: SubredditScalarWhereWithAggregatesInput[]
    NOT?: SubredditScalarWhereWithAggregatesInput | SubredditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subreddit"> | number
    name?: StringWithAggregatesFilter<"Subreddit"> | string
    lastFetchedAt?: DateTimeNullableWithAggregatesFilter<"Subreddit"> | Date | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    redditId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    selftext?: StringFilter<"Post"> | string
    author?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    createdUtc?: DateTimeFilter<"Post"> | Date | string
    url?: StringFilter<"Post"> | string
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    subredditId?: IntFilter<"Post"> | number
    subreddit?: XOR<SubredditScalarRelationFilter, SubredditWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    redditId?: SortOrder
    title?: SortOrder
    selftext?: SortOrder
    author?: SortOrder
    upvotes?: SortOrder
    createdUtc?: SortOrder
    url?: SortOrder
    fetchedAt?: SortOrder
    subredditId?: SortOrder
    subreddit?: SubredditOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    redditId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    selftext?: StringFilter<"Post"> | string
    author?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    createdUtc?: DateTimeFilter<"Post"> | Date | string
    url?: StringFilter<"Post"> | string
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    subredditId?: IntFilter<"Post"> | number
    subreddit?: XOR<SubredditScalarRelationFilter, SubredditWhereInput>
  }, "id" | "redditId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    redditId?: SortOrder
    title?: SortOrder
    selftext?: SortOrder
    author?: SortOrder
    upvotes?: SortOrder
    createdUtc?: SortOrder
    url?: SortOrder
    fetchedAt?: SortOrder
    subredditId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    redditId?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    selftext?: StringWithAggregatesFilter<"Post"> | string
    author?: StringWithAggregatesFilter<"Post"> | string
    upvotes?: IntWithAggregatesFilter<"Post"> | number
    createdUtc?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    url?: StringWithAggregatesFilter<"Post"> | string
    fetchedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    subredditId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type SearchQueryWhereInput = {
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    id?: IntFilter<"SearchQuery"> | number
    keywords?: StringFilter<"SearchQuery"> | string
    subreddits?: StringFilter<"SearchQuery"> | string
    createdAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }

  export type SearchQueryOrderByWithRelationInput = {
    id?: SortOrder
    keywords?: SortOrder
    subreddits?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SearchQueryWhereInput | SearchQueryWhereInput[]
    OR?: SearchQueryWhereInput[]
    NOT?: SearchQueryWhereInput | SearchQueryWhereInput[]
    keywords?: StringFilter<"SearchQuery"> | string
    subreddits?: StringFilter<"SearchQuery"> | string
    createdAt?: DateTimeFilter<"SearchQuery"> | Date | string
  }, "id">

  export type SearchQueryOrderByWithAggregationInput = {
    id?: SortOrder
    keywords?: SortOrder
    subreddits?: SortOrder
    createdAt?: SortOrder
    _count?: SearchQueryCountOrderByAggregateInput
    _avg?: SearchQueryAvgOrderByAggregateInput
    _max?: SearchQueryMaxOrderByAggregateInput
    _min?: SearchQueryMinOrderByAggregateInput
    _sum?: SearchQuerySumOrderByAggregateInput
  }

  export type SearchQueryScalarWhereWithAggregatesInput = {
    AND?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    OR?: SearchQueryScalarWhereWithAggregatesInput[]
    NOT?: SearchQueryScalarWhereWithAggregatesInput | SearchQueryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SearchQuery"> | number
    keywords?: StringWithAggregatesFilter<"SearchQuery"> | string
    subreddits?: StringWithAggregatesFilter<"SearchQuery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SearchQuery"> | Date | string
  }

  export type ApiCallWhereInput = {
    AND?: ApiCallWhereInput | ApiCallWhereInput[]
    OR?: ApiCallWhereInput[]
    NOT?: ApiCallWhereInput | ApiCallWhereInput[]
    id?: IntFilter<"ApiCall"> | number
    endpoint?: StringFilter<"ApiCall"> | string
    timestamp?: DateTimeFilter<"ApiCall"> | Date | string
    count?: IntFilter<"ApiCall"> | number
  }

  export type ApiCallOrderByWithRelationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    count?: SortOrder
  }

  export type ApiCallWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApiCallWhereInput | ApiCallWhereInput[]
    OR?: ApiCallWhereInput[]
    NOT?: ApiCallWhereInput | ApiCallWhereInput[]
    endpoint?: StringFilter<"ApiCall"> | string
    timestamp?: DateTimeFilter<"ApiCall"> | Date | string
    count?: IntFilter<"ApiCall"> | number
  }, "id">

  export type ApiCallOrderByWithAggregationInput = {
    id?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    count?: SortOrder
    _count?: ApiCallCountOrderByAggregateInput
    _avg?: ApiCallAvgOrderByAggregateInput
    _max?: ApiCallMaxOrderByAggregateInput
    _min?: ApiCallMinOrderByAggregateInput
    _sum?: ApiCallSumOrderByAggregateInput
  }

  export type ApiCallScalarWhereWithAggregatesInput = {
    AND?: ApiCallScalarWhereWithAggregatesInput | ApiCallScalarWhereWithAggregatesInput[]
    OR?: ApiCallScalarWhereWithAggregatesInput[]
    NOT?: ApiCallScalarWhereWithAggregatesInput | ApiCallScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApiCall"> | number
    endpoint?: StringWithAggregatesFilter<"ApiCall"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ApiCall"> | Date | string
    count?: IntWithAggregatesFilter<"ApiCall"> | number
  }

  export type SubredditCreateInput = {
    name: string
    lastFetchedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutSubredditInput
  }

  export type SubredditUncheckedCreateInput = {
    id?: number
    name: string
    lastFetchedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutSubredditInput
  }

  export type SubredditUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutSubredditNestedInput
  }

  export type SubredditCreateManyInput = {
    id?: number
    name: string
    lastFetchedAt?: Date | string | null
  }

  export type SubredditUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubredditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCreateInput = {
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
    subreddit: SubredditCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
    subredditId: number
  }

  export type PostUpdateInput = {
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subreddit?: SubredditUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subredditId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
    subredditId: number
  }

  export type PostUpdateManyMutationInput = {
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subredditId?: IntFieldUpdateOperationsInput | number
  }

  export type SearchQueryCreateInput = {
    keywords: string
    subreddits: string
    createdAt?: Date | string
  }

  export type SearchQueryUncheckedCreateInput = {
    id?: number
    keywords: string
    subreddits: string
    createdAt?: Date | string
  }

  export type SearchQueryUpdateInput = {
    keywords?: StringFieldUpdateOperationsInput | string
    subreddits?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywords?: StringFieldUpdateOperationsInput | string
    subreddits?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryCreateManyInput = {
    id?: number
    keywords: string
    subreddits: string
    createdAt?: Date | string
  }

  export type SearchQueryUpdateManyMutationInput = {
    keywords?: StringFieldUpdateOperationsInput | string
    subreddits?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchQueryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywords?: StringFieldUpdateOperationsInput | string
    subreddits?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCallCreateInput = {
    endpoint: string
    timestamp?: Date | string
    count?: number
  }

  export type ApiCallUncheckedCreateInput = {
    id?: number
    endpoint: string
    timestamp?: Date | string
    count?: number
  }

  export type ApiCallUpdateInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ApiCallUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ApiCallCreateManyInput = {
    id?: number
    endpoint: string
    timestamp?: Date | string
    count?: number
  }

  export type ApiCallUpdateManyMutationInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ApiCallUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubredditCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFetchedAt?: SortOrder
  }

  export type SubredditAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubredditMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFetchedAt?: SortOrder
  }

  export type SubredditMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastFetchedAt?: SortOrder
  }

  export type SubredditSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubredditScalarRelationFilter = {
    is?: SubredditWhereInput
    isNot?: SubredditWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    redditId?: SortOrder
    title?: SortOrder
    selftext?: SortOrder
    author?: SortOrder
    upvotes?: SortOrder
    createdUtc?: SortOrder
    url?: SortOrder
    fetchedAt?: SortOrder
    subredditId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    subredditId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    redditId?: SortOrder
    title?: SortOrder
    selftext?: SortOrder
    author?: SortOrder
    upvotes?: SortOrder
    createdUtc?: SortOrder
    url?: SortOrder
    fetchedAt?: SortOrder
    subredditId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    redditId?: SortOrder
    title?: SortOrder
    selftext?: SortOrder
    author?: SortOrder
    upvotes?: SortOrder
    createdUtc?: SortOrder
    url?: SortOrder
    fetchedAt?: SortOrder
    subredditId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    subredditId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SearchQueryCountOrderByAggregateInput = {
    id?: SortOrder
    keywords?: SortOrder
    subreddits?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SearchQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    keywords?: SortOrder
    subreddits?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQueryMinOrderByAggregateInput = {
    id?: SortOrder
    keywords?: SortOrder
    subreddits?: SortOrder
    createdAt?: SortOrder
  }

  export type SearchQuerySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApiCallCountOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    count?: SortOrder
  }

  export type ApiCallAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type ApiCallMaxOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    count?: SortOrder
  }

  export type ApiCallMinOrderByAggregateInput = {
    id?: SortOrder
    endpoint?: SortOrder
    timestamp?: SortOrder
    count?: SortOrder
  }

  export type ApiCallSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
  }

  export type PostCreateNestedManyWithoutSubredditInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutSubredditInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PostUpdateManyWithoutSubredditNestedInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubredditInput | PostUpsertWithWhereUniqueWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubredditInput | PostUpdateWithWhereUniqueWithoutSubredditInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubredditInput | PostUpdateManyWithWhereWithoutSubredditInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutSubredditNestedInput = {
    create?: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput> | PostCreateWithoutSubredditInput[] | PostUncheckedCreateWithoutSubredditInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubredditInput | PostCreateOrConnectWithoutSubredditInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubredditInput | PostUpsertWithWhereUniqueWithoutSubredditInput[]
    createMany?: PostCreateManySubredditInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubredditInput | PostUpdateWithWhereUniqueWithoutSubredditInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubredditInput | PostUpdateManyWithWhereWithoutSubredditInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SubredditCreateNestedOneWithoutPostsInput = {
    create?: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubredditCreateOrConnectWithoutPostsInput
    connect?: SubredditWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubredditUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubredditCreateOrConnectWithoutPostsInput
    upsert?: SubredditUpsertWithoutPostsInput
    connect?: SubredditWhereUniqueInput
    update?: XOR<XOR<SubredditUpdateToOneWithWhereWithoutPostsInput, SubredditUpdateWithoutPostsInput>, SubredditUncheckedUpdateWithoutPostsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostCreateWithoutSubredditInput = {
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutSubredditInput = {
    id?: number
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutSubredditInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput>
  }

  export type PostCreateManySubredditInputEnvelope = {
    data: PostCreateManySubredditInput | PostCreateManySubredditInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutSubredditInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSubredditInput, PostUncheckedUpdateWithoutSubredditInput>
    create: XOR<PostCreateWithoutSubredditInput, PostUncheckedCreateWithoutSubredditInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSubredditInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSubredditInput, PostUncheckedUpdateWithoutSubredditInput>
  }

  export type PostUpdateManyWithWhereWithoutSubredditInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSubredditInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    redditId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    selftext?: StringFilter<"Post"> | string
    author?: StringFilter<"Post"> | string
    upvotes?: IntFilter<"Post"> | number
    createdUtc?: DateTimeFilter<"Post"> | Date | string
    url?: StringFilter<"Post"> | string
    fetchedAt?: DateTimeFilter<"Post"> | Date | string
    subredditId?: IntFilter<"Post"> | number
  }

  export type SubredditCreateWithoutPostsInput = {
    name: string
    lastFetchedAt?: Date | string | null
  }

  export type SubredditUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    lastFetchedAt?: Date | string | null
  }

  export type SubredditCreateOrConnectWithoutPostsInput = {
    where: SubredditWhereUniqueInput
    create: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
  }

  export type SubredditUpsertWithoutPostsInput = {
    update: XOR<SubredditUpdateWithoutPostsInput, SubredditUncheckedUpdateWithoutPostsInput>
    create: XOR<SubredditCreateWithoutPostsInput, SubredditUncheckedCreateWithoutPostsInput>
    where?: SubredditWhereInput
  }

  export type SubredditUpdateToOneWithWhereWithoutPostsInput = {
    where?: SubredditWhereInput
    data: XOR<SubredditUpdateWithoutPostsInput, SubredditUncheckedUpdateWithoutPostsInput>
  }

  export type SubredditUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubredditUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastFetchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCreateManySubredditInput = {
    id?: number
    redditId: string
    title: string
    selftext?: string
    author: string
    upvotes?: number
    createdUtc: Date | string
    url: string
    fetchedAt?: Date | string
  }

  export type PostUpdateWithoutSubredditInput = {
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutSubredditInput = {
    id?: IntFieldUpdateOperationsInput | number
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutSubredditInput = {
    id?: IntFieldUpdateOperationsInput | number
    redditId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    selftext?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}