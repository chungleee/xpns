import * as yup from 'yup'

export const validateExpenseFormSchema = yup.object().shape({
  date: yup.string().required(),
  category: yup
    .string()
    .trim()
    .required(),
  amount: yup
    .number()
    .required()
    .positive()
    .integer()
})

export const validate = values => {
  let errors = {}

  if (values.category === 'other' && !values.other) {
    errors.other = 'other is a required field'
  }

  return errors
}
