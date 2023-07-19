import ModalActive from '@/components/form/ModalActive.vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'
const useConfirmBeforeActive = (action, props) => {
  const { reveal, onConfirm } = createConfirmDialog(ModalActive, props)

  onConfirm(action)

  reveal()
}

export default useConfirmBeforeActive
