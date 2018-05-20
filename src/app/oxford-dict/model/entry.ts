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
import { PronunciationsList } from './pronunciationsList';
import { Sense } from './sense';
import { VariantFormsList } from './variantFormsList';


export interface Entry {
    /**
     * The origin of the word and the way in which its meaning has changed throughout history
     */
    etymologies?: Arrayofstrings;
    grammaticalFeatures?: GrammaticalFeaturesList;
    /**
     * Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number.
     */
    homographNumber?: string;
    notes?: CategorizedTextList;
    pronunciations?: PronunciationsList;
    /**
     * Complete list of senses
     */
    senses?: Array<Sense>;
    /**
     * Various words that are used interchangeably depending on the context, e.g 'a' and 'an'
     */
    variantForms?: VariantFormsList;
}
