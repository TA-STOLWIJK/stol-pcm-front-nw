import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { required } from '@vee-validate/rules'
import { email } from '@vee-validate/rules'

export default (app) => {
  defineRule('required', required)
  defineRule('email', email)
  configure({
    generateMessage: localize('en', {
      messages: {
        required: 'Je bent dit veld vergeten in te vullen',
        email: 'Dit lijkt geen geldig email adres'
      }
    })
  })

  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeErrorMessage', ErrorMessage)
}
