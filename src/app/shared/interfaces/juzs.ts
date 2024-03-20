export interface Juzs {
    id: number
    juz_number: number
    verse_mapping: VerseMapping
    first_verse_id: number
    last_verse_id: number
    verses_count: number
}
      
export interface VerseMapping {
    "1": string
    "2": string
}