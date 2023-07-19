import {
  arrowDown,
  arrowUp,
  check,
  circle,
  close,
  down,
  fileDoc,
  spinner,
  star,
  trash,
  date,
  left,
  right
} from '@formkit/icons'
import { nl } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'
import theme from '@/style/theme.js'
const isCheckboxAndRadioMultiple = (node) =>
  (node.props.type === 'checkbox' || node.props.type === 'radio') && node.props.options

function addAsteriskPlugin(node) {
  node.on('created', () => {
    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      const isRequired = node.props.parsedRules.some((rule) => rule.name === 'required')

      if (isRequired) {
        if (isCheckboxAndRadioMultiple(node)) {
          sectionsSchema.legend = {
            children: ['$label', ' *']
          }
        } else {
          sectionsSchema.label = {
            children: ['$label', ' *']
          }
        }
      }
      return schemaFn(sectionsSchema)
    }
  })
}
const config = {
  config: {
    // pass our theme object to generateClasses
    classes: generateClasses(theme)
  },
  locales: { nl },
  locale: 'nl',
  messages: {
    nl: {
      ui: {
        submit: 'Bewaar'
      }
    }
  },
  icons: {
    // include supporting icons from @formkit/icons
    arrowDown,
    arrowUp,
    close,
    checkboxDecorator: check,
    fileItem: fileDoc,
    fileRemove: close,
    noFiles: fileDoc,
    radioDecorator: circle,
    select: down,
    spinner,
    star,
    trash,
    date,
    left,
    right
  },
  plugins: [addAsteriskPlugin]
}

export default config
