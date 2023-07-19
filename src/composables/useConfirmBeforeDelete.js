import ModalDelete from '@/components/form/ModalDelete.vue'
import { createConfirmDialog } from 'vuejs-confirm-dialog'
const useConfirmBeforeDelete = (action, props) => {
  const { reveal, onConfirm } = createConfirmDialog(ModalDelete, props)

  onConfirm(action)

  reveal()
}

export default useConfirmBeforeDelete
