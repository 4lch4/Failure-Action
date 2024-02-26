import * as core from '@actions/core'
import { SubFile } from './SubFile.js'

async function run() {
  const subfile = new SubFile()

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
