export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = project => ({
  type: SHOW_MODAL,
  project
})

export const HIDE_MODAL = 'HIDE_MODAL';
export const hideModal = () => ({
  type: HIDE_MODAL
})