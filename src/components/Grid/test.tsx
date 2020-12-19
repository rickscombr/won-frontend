import { renderWithTheme } from 'utils/tests/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
    it('shouder render the heading', () => {
        const { container } = renderWithTheme(<Grid>childreen</Grid>)

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              display: grid;
              grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
              grid-gap: 3.2rem;
              margin: 3.2rem 0;
            }

            <div
              class="c0"
            >
              childreen
            </div>
        `)
    })
})
