export interface MultilingualField {
  fr: string;
  ar: string;
  en: string;
}

export interface ContactPayload {
  nom?: string | null;
  email: string;
  telephone: string;
  adresse: MultilingualField;
  ville: MultilingualField;
  wilaya: MultilingualField;
  horaires: string;
  site_web?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  linkedin?: string | null;
  x?: string | null;
  message_acceuil?: MultilingualField | null;
}

export interface ContactResponse extends ContactPayload {
  date_creation?: string;
  date_modification?: string;
}
