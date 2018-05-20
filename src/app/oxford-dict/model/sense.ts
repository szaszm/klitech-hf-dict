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
import { CrossReferencesList } from './crossReferencesList';
import { ExamplesList } from './examplesList';
import { PronunciationsList } from './pronunciationsList';
import { ThesaurusLink } from './thesaurusLink';
import { TranslationsList } from './translationsList';
import { VariantFormsList } from './variantFormsList';


/**
 * A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element
 */
export interface Sense {
    /**
     * A grouping of crossreference notes.
     */
    crossReferenceMarkers?: Arrayofstrings;
    crossReferences?: CrossReferencesList;
    /**
     * A list of statements of the exact meaning of a word
     */
    definitions?: Arrayofstrings;
    /**
     * A subject, discipline, or branch of knowledge particular to the Sense
     */
    domains?: Arrayofstrings;
    examples?: ExamplesList;
    /**
     * The id of the sense that is required for the delete procedure
     */
    id?: string;
    notes?: CategorizedTextList;
    pronunciations?: PronunciationsList;
    /**
     * A particular area in which the Sense occurs, e.g. 'Great Britain'
     */
    regions?: Arrayofstrings;
    /**
     * A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal'
     */
    registers?: Arrayofstrings;
    /**
     * A list of short statements of the exact meaning of a word
     */
    shortDefinitions?: Arrayofstrings;
    /**
     * Ordered list of subsenses of a sense
     */
    subsenses?: Array<Sense>;
    /**
     * Ordered list of links to the Thesaurus Dictionary
     */
    thesaurusLinks?: Array<ThesaurusLink>;
    translations?: TranslationsList;
    /**
     * Various words that are used interchangeably depending on the context, e.g 'duck' and 'duck boat'
     */
    variantForms?: VariantFormsList;
}
