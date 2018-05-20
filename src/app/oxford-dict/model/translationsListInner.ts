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
import { CategorizedTextList } from './categorizedTextList';
import { GrammaticalFeaturesList } from './grammaticalFeaturesList';


export interface TranslationsListInner {
    /**
     * A subject, discipline, or branch of knowledge particular to the translation
     */
    domains?: Arrayofstrings;
    grammaticalFeatures?: GrammaticalFeaturesList;
    /**
     * IANA language code specifying the language of the translation
     */
    language: string;
    notes?: CategorizedTextList;
    /**
     * A particular area in which the translation occurs, e.g. 'Great Britain'
     */
    regions?: Arrayofstrings;
    /**
     * A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal'
     */
    registers?: Arrayofstrings;
    text: string;
}