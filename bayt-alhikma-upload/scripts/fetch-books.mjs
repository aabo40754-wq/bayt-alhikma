import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const token = process.env.AIRTABLE_TOKEN
const baseId = 'appA2VwmucK1rogZf'
const tableId = 'tblsIPNK65lmzDHNH'
const outFile = fileURLToPath(new URL('../src/data/books.json', import.meta.url))
const outDir = fileURLToPath(new URL('../src/data/', import.meta.url))

mkdirSync(outDir, { recursive: true })

if (!token) {
  console.warn('AIRTABLE_TOKEN is not set — writing empty books.json')
  writeFileSync(outFile, '[]\n')
  process.exit(0)
}

async function fetchAllRecords() {
  const records = []
  let offset

  do {
    const url = new URL(`https://api.airtable.com/v0/${baseId}/${tableId}`)
    url.searchParams.set('pageSize', '100')
    if (offset) url.searchParams.set('offset', offset)

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) {
      throw new Error(`Airtable API error ${res.status}: ${await res.text()}`)
    }

    const data = await res.json()
    records.push(...data.records)
    offset = data.offset
  } while (offset)

  return records
}

const records = await fetchAllRecords()

const books = records
  .map((r) => ({
    id: r.id,
    title: r.fields['اسم الكتاب'] || '',
    author: r.fields['اسم المؤلف'] || '',
    publisher: r.fields['دار النشر'] || '',
    status: r.fields['الحالة'] || '',
  }))
  .filter((b) => b.title)

writeFileSync(outFile, JSON.stringify(books, null, 2) + '\n')
console.log(`Fetched ${books.length} books from Airtable.`)
