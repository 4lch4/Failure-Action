import * as core from '@actions/core'

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
      core.error('[SubFile#test]: An error w/ extra options.', {
        file: '/src/SubFile.ts',
        title: 'A customized error message.',
        startLine: 10,
        endLine: 10,
        startColumn: 7,
        endColumn: 61,
      })

      if (error instanceof Error) core.error(error.message)
      else core.error('An error occurred, check logs for more information.')

      console.error('[SubFile#test]: Console error:', error)
    }
  }
}
