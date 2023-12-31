import { computed } from 'vue'
import { useIsFormDirty, useIsFormValid } from 'vee-validate'

export function useIsDisabled() {
  const isDirty = useIsFormDirty()
  const isValid = useIsFormValid()
  return computed(() => {
    return !isDirty.value || !isValid.value
  })
}
