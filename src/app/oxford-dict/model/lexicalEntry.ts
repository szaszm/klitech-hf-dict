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
import { ArrayOfRelatedEntries } from './arrayOfRelatedEntries';
import { CategorizedTextList } from './categorizedTextList';
import { Entry } from './entry';
import { GrammaticalFeaturesList } from './grammaticalFeaturesList';
import { PronunciationsList } from './pronunciationsList';
import { VariantFormsList } from './variantFormsList';


/**
 * Description of an entry for a particular part of speech
 */
export interface LexicalEntry {
    /**
     * Other words from which this one derives
     */
    derivativeOf?: ArrayOfRelatedEntries;
    /**
     * Other words from which their Sense derives
     */
    derivatives?: ArrayOfRelatedEntries;
    entries?: Array<Entry>;
    grammaticalFeatures?: GrammaticalFeaturesList;
    /**
     * IANA language code
     */
    language: string;
    /**
     * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
     */
    lexicalCategory: string;
    notes?: CategorizedTextList;
    pronunciations?: PronunciationsList;
    /**
     * A given written or spoken realisation of a an entry.
     */
    text: string;
    /**
     * Various words that are used interchangeably depending on the context, e.g 'a' and 'an'
     */
    variantForms?: VariantFormsList;
}
