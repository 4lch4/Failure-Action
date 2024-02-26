import * as core from '@actions/core'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * This is a utility class that is for testing how the `core` library manages failures and error
 * messages by default.
 */
export class SubFile {
  public async test() {
    try {
      core.info('[SubFile#test]: Within the test function.')

      throw new Error('A default error message.')
    } catch (error) {
      core.error('[SubFile#test]: A default error message.')

      const subFilePath = core.toPlatformPath(join(__dirname, '..', 'src', 'SubFile.ts'))

      core.info(`[SubFile#test]: The source file is located at: ${subFilePath}`)

      core.error('[SubFile#test]: An error w/ extra options.', {
        file: subFilePath,
        title: 'A customized error message.',
        // The following line & column numbers should highlight the `core.info` line in the try
        // statement above.
        startLine: 14,
        endLine: 14,
        startColumn: 7,
        endColumn: 61,
      })

      if (error instanceof Error) core.error(error.message)
      else core.error('An error occurred, check logs for more information.')

      console.error('[SubFile#test]: Console error:', error)
    }
  }
}
