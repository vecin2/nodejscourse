import chalk from 'chalk'
import _yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const yargs = _yargs(hideBin(process.argv))

import * as notes from './utils.js'

yargs.version('1.3.4')
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    notes.listNotes()
  },
})

yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Read Note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
})

yargs.parse()
