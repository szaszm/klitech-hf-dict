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
import { LemmatronLexicalEntry } from './lemmatronLexicalEntry';


/**
 * Description of an inflected form of a word
 */
export interface HeadwordLemmatron {
    /**
     * The identifier of a word
     */
    id: string;
    /**
     * IANA language code
     */
    language: string;
    /**
     * A grouping of various senses in a specific language, and a lexical category that relates to a word
     */
    lexicalEntries: Array<LemmatronLexicalEntry>;
    /**
     * The json object type. Could be 'headword', 'inflection' or 'phrase'
     */
    type?: string;
    /**
     * A given written or spoken realisation of a an entry, lowercased.
     */
    word: string;
}
