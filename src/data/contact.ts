export const contact = {
  company: 'Lenz Wohntex',
  owner: 'Werner Lenz',
  street: 'Stuttgarter Str. 2',
  zip: '74545',
  city: 'Michelfeld',
  phone: '0791 / 89805',
  phonePlain: '+4979189805',
  fax: '0791 / 856155',
  // TODO: Bitte tatsächliche E-Mail-Adresse eintragen
  email: 'info@lenz-wohntex.de',
  ustId: '146802642',
  court: 'Schwäbisch Hall',
  founded: '1985',
  hours: [
    { days: 'Mo, Di, Do, Fr', time: '9:00 – 12:30 und 14:00 – 18:00 Uhr' },
    { days: 'Mittwoch', time: '9:00 – 12:30 Uhr' },
    { days: 'Samstag', time: '9:00 – 12:30 Uhr' },
  ],
  regions: ['Schwäbisch Hall', 'Michelfeld', 'Mainhardt', 'Untermünkheim', 'Rosengarten'],
  mapsUrl: 'https://maps.google.com/?q=Stuttgarter+Str.+2,+74545+Michelfeld',
} as const;
