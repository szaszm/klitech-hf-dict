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
import { NgramsResultResults } from './ngramsResultResults';


/**
 * Schema for corpus ngrams.
 */
export interface NgramsResult {
    /**
     * Additional Information provided by OUP
     */
    metadata?: any;
    /**
     * A list of found ngrams along with their frequencies
     */
    results?: Array<NgramsResultResults>;
}
