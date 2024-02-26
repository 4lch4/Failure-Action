import * as core from '@actions/core'
import { SubFile } from './SubFile.js'

async function run() {
  const subfile = new SubFile()

  core.info('[index#run]: Running the test function in the SubFile class.')

  core.warning('This is a warning message.', {
    file: '/src/index.ts',
    title: 'A customized warning message.',
    startLine: 5,
    endLine: 16,
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
