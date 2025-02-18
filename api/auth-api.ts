/* tslint:disable */
/* eslint-disable */
/**
 * Gopad OpenAPI
 * API definition for Gopad, Etherpad for markdown with go
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 * Contact: gopad@webhippie.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from "url";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import type { AuthToken } from "../model";
// @ts-ignore
import type { AuthVerify } from "../model";
// @ts-ignore
import type { ListProviders200Response } from "../model";
// @ts-ignore
import type { LoginAuthRequest } from "../model";
// @ts-ignore
import type { Notification } from "../model";
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Callback to parse the defined provider
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {string} [code] Auth code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    callbackProvider: async (
      provider: string,
      state?: string,
      code?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'provider' is not null or undefined
      assertParamExists("callbackProvider", "provider", provider);
      const localVarPath = `/auth/{provider}/callback`.replace(
        `{${"provider"}}`,
        encodeURIComponent(String(provider)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (state !== undefined) {
        localVarQueryParameter["state"] = state;
      }

      if (code !== undefined) {
        localVarQueryParameter["code"] = code;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Fetch the available auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listProviders: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/providers`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Authenticate an user by credentials
     * @param {LoginAuthRequest} loginAuthRequest The credentials to authenticate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAuth: async (
      loginAuthRequest: LoginAuthRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'loginAuthRequest' is not null or undefined
      assertParamExists("loginAuth", "loginAuthRequest", loginAuthRequest);
      const localVarPath = `/auth/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        loginAuthRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAuth: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/refresh`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Request the redirect to defined provider
     * @param {string} provider An identifier for the auth provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestProvider: async (
      provider: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'provider' is not null or undefined
      assertParamExists("requestProvider", "provider", provider);
      const localVarPath = `/auth/{provider}/request`.replace(
        `{${"provider"}}`,
        encodeURIComponent(String(provider)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyAuth: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/verify`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Callback to parse the defined provider
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {string} [code] Auth code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async callbackProvider(
      provider: string,
      state?: string,
      code?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.callbackProvider(
          provider,
          state,
          code,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.callbackProvider"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Fetch the available auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listProviders(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ListProviders200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listProviders(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.listProviders"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Authenticate an user by credentials
     * @param {LoginAuthRequest} loginAuthRequest The credentials to authenticate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async loginAuth(
      loginAuthRequest: LoginAuthRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthToken>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.loginAuth(
        loginAuthRequest,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.loginAuth"]?.[localVarOperationServerIndex]
          ?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async refreshAuth(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthToken>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.refreshAuth(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.refreshAuth"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Request the redirect to defined provider
     * @param {string} provider An identifier for the auth provider
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async requestProvider(
      provider: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.requestProvider(
        provider,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.requestProvider"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyAuth(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthVerify>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.verifyAuth(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.verifyAuth"]?.[localVarOperationServerIndex]
          ?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuthApiFp(configuration);
  return {
    /**
     *
     * @summary Callback to parse the defined provider
     * @param {AuthApiCallbackProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    callbackProvider(
      requestParameters: AuthApiCallbackProviderRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<void> {
      return localVarFp
        .callbackProvider(
          requestParameters.provider,
          requestParameters.state,
          requestParameters.code,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch the available auth providers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listProviders(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListProviders200Response> {
      return localVarFp
        .listProviders(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Authenticate an user by credentials
     * @param {AuthApiLoginAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAuth(
      requestParameters: AuthApiLoginAuthRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<AuthToken> {
      return localVarFp
        .loginAuth(requestParameters.loginAuthRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAuth(options?: RawAxiosRequestConfig): AxiosPromise<AuthToken> {
      return localVarFp
        .refreshAuth(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Request the redirect to defined provider
     * @param {AuthApiRequestProviderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestProvider(
      requestParameters: AuthApiRequestProviderRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<void> {
      return localVarFp
        .requestProvider(requestParameters.provider, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyAuth(options?: RawAxiosRequestConfig): AxiosPromise<AuthVerify> {
      return localVarFp
        .verifyAuth(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for callbackProvider operation in AuthApi.
 * @export
 * @interface AuthApiCallbackProviderRequest
 */
export interface AuthApiCallbackProviderRequest {
  /**
   * An identifier for the auth provider
   * @type {string}
   * @memberof AuthApiCallbackProvider
   */
  readonly provider: string;

  /**
   * Auth state
   * @type {string}
   * @memberof AuthApiCallbackProvider
   */
  readonly state?: string;

  /**
   * Auth code
   * @type {string}
   * @memberof AuthApiCallbackProvider
   */
  readonly code?: string;
}

/**
 * Request parameters for loginAuth operation in AuthApi.
 * @export
 * @interface AuthApiLoginAuthRequest
 */
export interface AuthApiLoginAuthRequest {
  /**
   * The credentials to authenticate
   * @type {LoginAuthRequest}
   * @memberof AuthApiLoginAuth
   */
  readonly loginAuthRequest: LoginAuthRequest;
}

/**
 * Request parameters for requestProvider operation in AuthApi.
 * @export
 * @interface AuthApiRequestProviderRequest
 */
export interface AuthApiRequestProviderRequest {
  /**
   * An identifier for the auth provider
   * @type {string}
   * @memberof AuthApiRequestProvider
   */
  readonly provider: string;
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
  /**
   *
   * @summary Callback to parse the defined provider
   * @param {AuthApiCallbackProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public callbackProvider(
    requestParameters: AuthApiCallbackProviderRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .callbackProvider(
        requestParameters.provider,
        requestParameters.state,
        requestParameters.code,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch the available auth providers
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public listProviders(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .listProviders(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Authenticate an user by credentials
   * @param {AuthApiLoginAuthRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public loginAuth(
    requestParameters: AuthApiLoginAuthRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .loginAuth(requestParameters.loginAuthRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Refresh an auth token before it expires
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public refreshAuth(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .refreshAuth(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Request the redirect to defined provider
   * @param {AuthApiRequestProviderRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public requestProvider(
    requestParameters: AuthApiRequestProviderRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .requestProvider(requestParameters.provider, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Verify validity for an authentication token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public verifyAuth(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .verifyAuth(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
