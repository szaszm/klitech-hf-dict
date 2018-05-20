/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.11.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Wordlist } from '../model/wordlist';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class WordlistService {

    protected basePath = 'https://od-api-demo.oxforddictionaries.com:443/api/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Retrieve list of words for category with advanced options
     * Use this to apply more complex filters to the [list of words](documentation/glossary?term&#x3D;wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term&#x3D;sense) match the filter, or only its &#39;prime sense&#39;. You can also filter by word length or match by substring (prefix).     &lt;div id&#x3D;\&quot;wordlist_advanced\&quot;&gt;&lt;/div&gt; 
     * @param sourceLang IANA language code
     * @param filtersAdvanced Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory&#x3D;noun,adjective;domains&#x3D;sport. Number of values limited to 5.
     * @param appId App ID Authentication Parameter
     * @param appKey App Key Authentication Parameter
     * @param exclude Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.
     * @param excludeSenses Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.
     * @param excludePrimeSenses Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).
     * @param wordLength Parameter to speficy the minimum (&gt;), exact or maximum (&lt;) length of the words required. E.g., &gt;5 - more than 5 chars; &lt;4 - less than 4 chars; &gt;5&lt;10 - from 5 to 10 chars; 3 - exactly 3 chars.
     * @param prefix Filter words that start with prefix parameter
     * @param exact If exact&#x3D;true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.
     * @param limit Limit the number of results per response. Default and maximum limit is 5000.
     * @param offset Offset the start number of the result.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wordlistSourceLangFiltersAdvancedGet(sourceLang: string, filtersAdvanced: string, appId: string, appKey: string, exclude?: string, excludeSenses?: string, excludePrimeSenses?: string, wordLength?: string, prefix?: string, exact?: boolean, limit?: string, offset?: string, observe?: 'body', reportProgress?: boolean): Observable<Wordlist>;
    public wordlistSourceLangFiltersAdvancedGet(sourceLang: string, filtersAdvanced: string, appId: string, appKey: string, exclude?: string, excludeSenses?: string, excludePrimeSenses?: string, wordLength?: string, prefix?: string, exact?: boolean, limit?: string, offset?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Wordlist>>;
    public wordlistSourceLangFiltersAdvancedGet(sourceLang: string, filtersAdvanced: string, appId: string, appKey: string, exclude?: string, excludeSenses?: string, excludePrimeSenses?: string, wordLength?: string, prefix?: string, exact?: boolean, limit?: string, offset?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Wordlist>>;
    public wordlistSourceLangFiltersAdvancedGet(sourceLang: string, filtersAdvanced: string, appId: string, appKey: string, exclude?: string, excludeSenses?: string, excludePrimeSenses?: string, wordLength?: string, prefix?: string, exact?: boolean, limit?: string, offset?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sourceLang === null || sourceLang === undefined) {
            throw new Error('Required parameter sourceLang was null or undefined when calling wordlistSourceLangFiltersAdvancedGet.');
        }
        if (filtersAdvanced === null || filtersAdvanced === undefined) {
            throw new Error('Required parameter filtersAdvanced was null or undefined when calling wordlistSourceLangFiltersAdvancedGet.');
        }
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling wordlistSourceLangFiltersAdvancedGet.');
        }
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling wordlistSourceLangFiltersAdvancedGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (exclude !== undefined) {
            queryParameters = queryParameters.set('exclude', <any>exclude);
        }
        if (excludeSenses !== undefined) {
            queryParameters = queryParameters.set('exclude_senses', <any>excludeSenses);
        }
        if (excludePrimeSenses !== undefined) {
            queryParameters = queryParameters.set('exclude_prime_senses', <any>excludePrimeSenses);
        }
        if (wordLength !== undefined) {
            queryParameters = queryParameters.set('word_length', <any>wordLength);
        }
        if (prefix !== undefined) {
            queryParameters = queryParameters.set('prefix', <any>prefix);
        }
        if (exact !== undefined) {
            queryParameters = queryParameters.set('exact', <any>exact);
        }
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;
        if (appId !== undefined && appId !== null) {
            headers = headers.set('app_id', String(appId));
        }
        if (appKey !== undefined && appKey !== null) {
            headers = headers.set('app_key', String(appKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Wordlist>(`${this.basePath}/wordlist/${encodeURIComponent(String(sourceLang))}/${encodeURIComponent(String(filtersAdvanced))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a list of words in a category
     *  Use this to retrieve a [list of words](documentation/glossary?term&#x3D;wordlist) for particular [domain](documentation/glossary?term&#x3D;domain), [lexical category](documentation/glossary?term&#x3D;lexicalcategory), [register](documentation/glossary?term&#x3D;registers) and/or [region](documentation/glossary?term&#x3D;regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term&#x3D;headword), not all their possible [inflections](documentation/glossary?term&#x3D;inflection). If you require a full [wordlist](documentation/glossary?term&#x3D;wordlist) including [inflected forms](documentation/glossary?term&#x3D;inflection), contact us and we can help.    &lt;div id&#x3D;\&quot;wordlist\&quot;&gt;&lt;/div&gt; 
     * @param sourceLang IANA language code
     * @param filtersBasic Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory&#x3D;noun,adjective;domains&#x3D;sport. Number of values limited to 5.
     * @param appId App ID Authentication Parameter
     * @param appKey App Key Authentication Parameter
     * @param limit Limit the number of results per response. Default and maximum limit is 5000.
     * @param offset Offset the start number of the result
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wordlistSourceLangFiltersBasicGet(sourceLang: string, filtersBasic: string, appId: string, appKey: string, limit?: string, offset?: string, observe?: 'body', reportProgress?: boolean): Observable<Wordlist>;
    public wordlistSourceLangFiltersBasicGet(sourceLang: string, filtersBasic: string, appId: string, appKey: string, limit?: string, offset?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Wordlist>>;
    public wordlistSourceLangFiltersBasicGet(sourceLang: string, filtersBasic: string, appId: string, appKey: string, limit?: string, offset?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Wordlist>>;
    public wordlistSourceLangFiltersBasicGet(sourceLang: string, filtersBasic: string, appId: string, appKey: string, limit?: string, offset?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sourceLang === null || sourceLang === undefined) {
            throw new Error('Required parameter sourceLang was null or undefined when calling wordlistSourceLangFiltersBasicGet.');
        }
        if (filtersBasic === null || filtersBasic === undefined) {
            throw new Error('Required parameter filtersBasic was null or undefined when calling wordlistSourceLangFiltersBasicGet.');
        }
        if (appId === null || appId === undefined) {
            throw new Error('Required parameter appId was null or undefined when calling wordlistSourceLangFiltersBasicGet.');
        }
        if (appKey === null || appKey === undefined) {
            throw new Error('Required parameter appKey was null or undefined when calling wordlistSourceLangFiltersBasicGet.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;
        if (appId !== undefined && appId !== null) {
            headers = headers.set('app_id', String(appId));
        }
        if (appKey !== undefined && appKey !== null) {
            headers = headers.set('app_key', String(appKey));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Wordlist>(`${this.basePath}/wordlist/${encodeURIComponent(String(sourceLang))}/${encodeURIComponent(String(filtersBasic))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}