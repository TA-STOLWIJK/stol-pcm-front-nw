import ModalSend from '@/components/form/ModalSend.vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'
const useConfirmBeforeSend = (action, props) => {
  const { reveal, onConfirm } = createConfirmDialog(ModalSend, props)

  onConfirm(action)

  reveal()
}

export default useConfirmBeforeSend
