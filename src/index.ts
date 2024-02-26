import * as core from '@actions/core'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { SubFile } from './SubFile.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function run() {
  const subfile = new SubFile()

  core.info('[index#run]: Running the test function in the SubFile class.')

  const srcFile = core.toPlatformPath(join(__dirname, '..', 'src', 'index.ts'))

  core.info(`[index#run]: The source file is located at: ${srcFile}`)

  core.warning('This is a warning message', {
    file: srcFile,
    title: 'A customized warning message',
    startLine: 9,
    endLine: 25,
  })

  return subfile.test()
}

run()
  .then(res => {
    console.log(`[index#run]: Response: ${JSON.stringify(res, null, 2)}`)
    console.log('[index#run]: Completed successfully!')
  })
  .catch(err => {
    console.error(`[index#run]: Error: ${err.message}`)
    console.error('[index#run]: Completed with errors!')

    core.setFailed(err)
  })
