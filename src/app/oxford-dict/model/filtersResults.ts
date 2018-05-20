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
import { Arrayofstrings } from './arrayofstrings';


/**
 * A mapping of filters available per endpoints.
 */
export interface FiltersResults {
    /**
     * A list of filters available for Retrieve Entry endpoint
     */
    entries?: Arrayofstrings;
    /**
     * A list of filters available for LEMMATRON endpoint
     */
    inflections?: Arrayofstrings;
    /**
     * A list of filters available for Translations endpoint
     */
    translations?: Arrayofstrings;
    /**
     * A list of filters available for Translations endpoint
     */
    wordlist?: Arrayofstrings;
}
