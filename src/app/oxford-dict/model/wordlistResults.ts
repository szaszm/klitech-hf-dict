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


/**
 * Description of found word
 */
export interface WordlistResults {
    /**
     * The identifier of a word
     */
    id: string;
    matchType?: string;
    /**
     * Name of region.
     */
    region?: string;
    /**
     * A given written or spoken realisation of a an entry, lowercased.
     */
    word: string;
}