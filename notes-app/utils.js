import chalk from 'chalk'
import fs from 'fs'

export const listNotes = () =>
  loadNotes().forEach((note) =>
    console.log(chalk.greenBright.inverse(note.title))
  )

export const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({ title: title, body: body })
    saveNotes(notes)
    console.log('New note added')
  } else {
    console.log('Note title taken')
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch {
    return []
  }
}

export const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Remove successull'))
    saveNotes(notesToKeep)
  } else console.log(chalk.red.inverse('Note not found'))
}

export const readNote = (title) => {
  const note = loadNotes().find((note) => note.title === title)
  if (note) {
    console.log(chalk.yellow(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red('Note not found'))
  }
}
// export { addNote, loadNotes, removeNote }
